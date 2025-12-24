import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MessageSquare, User, Phone, Loader } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Counseling = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', topic: 'Career Guidance' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Define the async work (DB save + Email)
        const processSubmission = async () => {
            // 1. Save to Firebase (Independent Attempt)
            const dbPromise = addDoc(collection(db, "counseling_bookings"), {
                ...formData,
                status: 'pending',
                createdAt: serverTimestamp()
            }).then(() => console.log("Counseling DB Save: Success"))
                .catch(err => {
                    console.error("Counseling DB Save FAILED (Check Firestore Rules):", err);
                    alert("Database Error: " + err.message + "\n(Check Internet Connection)");
                });

            // 2. Web3Forms (Independent Attempt)
            const emailFormBody = {
                access_key: 'aa3876b2-bc3a-43db-9896-f777584cbb14',
                subject: `🔔 New Counseling Booking - ${formData.name}`,
                from_name: 'Life Science Engineering',
                to: 'team.lifescienceengineering@gmail.com',
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                preferred_date: formData.date,
                topic: formData.topic,
                message: `New counseling session booking:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date}\nTopic: ${formData.topic}`
            };

            const emailPromise = fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailFormBody),
            }).then(() => console.log("Counseling Email: Sent"))
                .catch(err => console.error("Counseling Email FAILED:", err));

            // Wait for both (so we don't navigate too early, but usually the race limits this)
            await Promise.all([dbPromise, emailPromise]);
        };

        try {
            // RACE: Process vs Short Timeout
            // We want instant UI feedback. If it takes > 0.5s, just show success.
            await Promise.race([
                processSubmission(),
                new Promise(resolve => setTimeout(resolve, 500))
            ]);
        } catch (error) {
            console.error("Global submission error:", error);
        } finally {
            // ALWAYS Navigate to Success
            setIsSubmitting(false);
            navigate('/booking-confirmation', {
                state: {
                    name: formData.name,
                    email: formData.email,
                    topic: formData.topic,
                    date: formData.date,
                    price: '₹499',
                    source: 'counseling'
                }
            });
        }
    };

    return (
        <div className="container section">
            <Helmet>
                <title>Career Counseling | Book Expert Session</title>
                <meta name="description" content="Book 1-on-1 counseling sessions with industry experts for guidance on Life Science jobs, higher studies, and interview preparation." />
            </Helmet>
            <div className="text-center" style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Expert Career Counseling</h1>
                <p className="text-subtle" style={{ fontSize: '1.25rem' }}>
                    Get personalized guidance from industry experts to navigate your career in Life Sciences, Pharma, and Biotech.
                </p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                {/* Info Column */}
                <div>
                    <h2 style={{ marginBottom: '2rem' }}>What We Offer</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ width: 48, height: 48, background: '#e0f2fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                <User size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>1-on-1 Mentorship</h3>
                                <p className="text-subtle">Private sessions tailored to your specific background and goals.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ width: 48, height: 48, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Resume & Interview Prep</h3>
                                <p className="text-subtle">Detailed feedback on your CV and mock interviews for specific roles.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ width: 48, height: 48, background: '#fef2f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}>
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Flexible Scheduling</h3>
                                <p className="text-subtle">Book slots that fit your academic or work schedule.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Column */}
                <div style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Book Your Session</h2>
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
                            <input
                                type="email"
                                required
                                placeholder="john@example.com"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
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

                        <div className="grid grid-cols-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Preferred Date</label>
                                <div style={{ position: 'relative' }}>
                                    <Calendar size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                    <input
                                        type="date"
                                        required
                                        style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                                        value={formData.date}
                                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Topic</label>
                                <select
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', background: 'white' }}
                                    value={formData.topic}
                                    onChange={e => setFormData({ ...formData, topic: e.target.value })}
                                >
                                    <option>Career Guidance</option>
                                    <option>Higher Studies (PhD/MS)</option>
                                    <option>Job Interview Prep</option>
                                    <option>Profile Building</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ marginTop: '1rem', justifyContent: 'center', padding: '1rem' }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader size={20} style={{ marginRight: '0.5rem', animation: 'spin 1s linear infinite' }} />
                                    Booking...
                                </>
                            ) : (
                                'Confirm Booking'
                            )}
                        </button>
                    </form>
                </div>

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

export default Counseling;

