import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);

        const processSubmission = async () => {
            // 1. Save to Firebase (Independent)
            const dbPromise = addDoc(collection(db, "contact_messages"), {
                ...formData,
                status: 'unread',
                createdAt: serverTimestamp()
            }).then(() => console.log("Contact DB Save: Success"))
                .catch(err => {
                    console.error("Contact DB Save FAILED (Check Firestore Rules):", err);
                    alert("Database Error: " + err.message);
                });

            // 2. Web3Forms (Independent)
            const emailFormBody = {
                access_key: 'aa3876b2-bc3a-43db-9896-f777584cbb14',
                subject: `✉️ New Contact Message - ${formData.name}`,
                from_name: 'Life Science Engineering',
                to: 'team.lifescienceengineering@gmail.com',
                name: formData.name,
                email: formData.email,
                message: formData.message
            };

            const emailPromise = fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailFormBody),
            }).then(() => console.log("Contact Email: Sent"))
                .catch(err => console.error("Contact Email FAILED:", err));

            await Promise.all([dbPromise, emailPromise]);
        };

        try {
            // Race against 4s timeout
            await Promise.race([
                processSubmission(),
                new Promise(resolve => setTimeout(resolve, 4000))
            ]);
        } catch (error) {
            console.error("Global submission error:", error);
        } finally {
            // Always show success
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="container section">
            <Helmet>
                <title>Contact Us | Life Science Engineering</title>
                <meta name="description" content="Get in touch with us for support, counseling inquiries, or partnerships. We are here to help you succeed." />
            </Helmet>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Contact Info */}
                <div>
                    <h1 style={{ marginBottom: '2rem' }}>Get in Touch</h1>
                    <p className="text-subtle" style={{ marginBottom: '3rem' }}>
                        Have questions about our mentorship programs or competitions? We're here to help.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ color: 'var(--color-primary)' }}><Mail /></div>
                            <div>
                                <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                                <p style={{ color: '#666' }}>team.lifescienceengineering@gmail.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ color: 'var(--color-primary)' }}><MapPin /></div>
                            <div>
                                <h4 style={{ marginBottom: '0.25rem' }}>Office</h4>
                                <p style={{ color: '#666' }}>HSR Layout, Bangalore<br />India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '12px', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                    {isSuccess ? (
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                background: '#dcfce7',
                                color: '#16a34a',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <Send size={32} />
                            </div>
                            <h3 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>Message Sent!</h3>
                            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '300px' }}>
                                Our associate will contact you shortly with further details.
                            </p>
                            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '300px', fontWeight: 'bold' }}>
                                Thank you for choosing us.
                                <br />
                                Team LSE
                            </p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="btn btn-outline"
                                style={{ marginTop: '2rem', borderRadius: '50px', padding: '0.5rem 1.5rem' }}
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                <input
                                    type="text"
                                    required
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd' }}
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                <input
                                    type="email"
                                    required
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd' }}
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                                <textarea
                                    rows="4"
                                    required
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd', resize: 'vertical' }}
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ justifyContent: 'center' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} style={{ marginLeft: '0.5rem' }} />
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Contact;
