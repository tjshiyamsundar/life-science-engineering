import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, User, Phone, Mail, Loader } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { planName, price } = location.state || { planName: 'Placement Pro', price: '₹4,999' };
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', degree: '', city: '', state: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const processSubmission = async () => {
            // 1. Save to Firebase (Independent)
            const dbPromise = addDoc(collection(db, "placement_leads"), {
                ...formData,
                plan: planName,
                price: price,
                status: 'pending',
                createdAt: serverTimestamp()
            }).then(() => console.log("Payment DB Save: Success"))
                .catch(err => console.error("Payment DB Save FAILED (Check Firestore Rules):", err));

            // 2. Web3Forms (Independent)
            const emailFormBody = {
                access_key: 'aa3876b2-bc3a-43db-9896-f777584cbb14',
                subject: `🎯 New Placement Package Interest - ${planName}`,
                from_name: 'Life Science Engineering',
                to: 'team.lifescienceengineering@gmail.com',
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                degree: formData.degree,
                city: formData.city,
                state: formData.state,
                plan: planName,
                price: price,
                message: `New placement package interest:\n\nPlan: ${planName}\nPrice: ${price}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDegree: ${formData.degree}\nCity: ${formData.city}\nState: ${formData.state}`
            };

            const emailPromise = fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailFormBody),
            }).then(() => console.log("Payment Email: Sent"))
                .catch(err => console.error("Payment Email FAILED:", err));

            await Promise.all([dbPromise, emailPromise]);
        };

        try {
            await Promise.race([
                processSubmission(),
                new Promise(resolve => setTimeout(resolve, 4000))
            ]);
        } catch (error) {
            console.error("Global submission error:", error);
        } finally {
            setIsSubmitting(false);
            navigate('/booking-confirmation', {
                state: {
                    planName: planName,
                    price: price,
                    type: 'placement',
                    source: 'placement'
                }
            });
        }
    };


    return (
        <div className="container" style={{ padding: '6rem 1rem', maxWidth: '600px', margin: '0 auto' }}>
            <Helmet>
                <title>Choose Plan | Life Science Engineering</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* Plan Details Card */}
            <div style={{ background: 'linear-gradient(135deg, var(--color-primary), #004d80)', padding: '2rem', borderRadius: '16px', color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '0.5rem', fontSize: '1.75rem' }}>{planName}</h2>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{price}</div>
            </div>

            {/* Form */}
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Interested in this plan?</h3>
                <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem', fontSize: '0.95rem' }}>
                    Fill in your details and our team will contact you to confirm.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Full Name</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                            <input
                                type="text"
                                required
                                placeholder="John Doe"
                                style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                            <input
                                type="email"
                                required
                                placeholder="john@example.com"
                                style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Phone Number</label>
                        <div style={{ position: 'relative' }}>
                            <Phone size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                            <input
                                type="tel"
                                required
                                placeholder="+91 9876543210"
                                style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Degree / Qualification</label>
                        <input
                            type="text"
                            required
                            placeholder="e.g., M.Pharm, B.Sc Life Science"
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                            value={formData.degree}
                            onChange={e => setFormData({ ...formData, degree: e.target.value })}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>City</label>
                            <input
                                type="text"
                                required
                                placeholder="Chennai"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                                value={formData.city}
                                onChange={e => setFormData({ ...formData, city: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>State</label>
                            <input
                                type="text"
                                required
                                placeholder="Tamil Nadu"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                                value={formData.state}
                                onChange={e => setFormData({ ...formData, state: e.target.value })}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.1rem', marginTop: '0.5rem' }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader size={20} style={{ marginRight: '0.5rem', animation: 'spin 1s linear infinite' }} />
                                Submitting...
                            </>
                        ) : (
                            'Submit Request'
                        )}
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#94a3b8' }}>
                        Our team will contact you within 24 hours to confirm enrollment.
                    </p>
                </form>
            </div>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Payment;

