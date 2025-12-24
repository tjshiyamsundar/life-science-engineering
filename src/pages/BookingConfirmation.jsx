import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const BookingConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { planName, price, source, topic } = location.state || {}; // source: 'counseling' | 'placement'

    let title = "Request Submitted! 🎉";
    let messageLine1 = "Our associate will contact you shortly with further details.";
    let messageLine2 = "Thank you for choosing us.";
    let team = "Team LSE";

    if (source === 'counseling') {
        messageLine1 = "Thank you for booking your session with Life Science Engineering (LSE).";
        messageLine2 = "Our associate will contact you shortly with further details.";
    } else if (source === 'placement') {
        messageLine1 = "Thank you for choosing your placement plan with Life Science Engineering (LSE).";
        messageLine2 = "Our associate will contact you shortly with further details.";
    }

    return (
        <div className="container" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 1rem',
            fontFamily: "'Inter', sans-serif"
        }}>
            <Helmet>
                <title>Request Submitted | Life Science Engineering</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* Success Icon */}
            <div style={{
                width: '100px',
                height: '100px',
                background: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)',
                position: 'relative'
            }}>
                <CheckCircle size={54} color="white" strokeWidth={2.5} />
            </div>

            {/* Heading */}
            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                marginBottom: '1.5rem',
                textAlign: 'center',
                color: '#1e293b',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
            }}>
                {title}
            </h1>

            {/* Plan/Context Card */}
            {(planName || topic) && (
                <div style={{
                    background: '#f8fafc',
                    padding: '2rem 4rem',
                    borderRadius: '16px',
                    marginBottom: '2.5rem',
                    textAlign: 'center',
                    border: '1px solid rgba(0,0,0,0.02)'
                }}>
                    <p style={{
                        color: '#3b82f6',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        marginBottom: '0.5rem'
                    }}>
                        {planName || topic}
                    </p>
                    {price && (
                        <p style={{
                            fontSize: '1.8rem',
                            fontWeight: '800',
                            color: '#0f172a'
                        }}>
                            {price}
                        </p>
                    )}
                </div>
            )}

            {/* Message */}
            <div style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '3rem' }}>
                <p style={{ fontSize: '1.2rem', color: '#10b981', fontWeight: '600', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {messageLine1}
                </p>
                <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {messageLine2}
                </p>
                <p style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 'bold' }}>
                    {team}
                </p>
            </div>

            {/* CTA Button */}
            <button
                onClick={() => navigate('/')}
                className="btn btn-primary"
                style={{
                    borderRadius: '50px',
                    padding: '0.8rem 2.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    background: '#0088cc',
                    border: 'none',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
            >
                Back to Home
            </button>
        </div>
    );
};

export default BookingConfirmation;
