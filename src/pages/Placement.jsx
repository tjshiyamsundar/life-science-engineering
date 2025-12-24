import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Placement = () => {
    const plans = [
        {
            name: 'Resume Blueprint',
            price: '₹999',
            features: ['ATS-optimized Template', 'Keyword formatting', '1 Review iteration']
        },
        {
            name: 'Placement Pro',
            price: '₹4,999',
            features: ['Resume & Cover Letter', 'Mock Interview (HR)', 'LinkedIn Optimization', '3 Review iterations'],
            highlight: true
        },
        {
            name: 'Premium Mentorship',
            price: '₹14,999',
            features: ['Dedicated Industry Mentor', 'Technical Mock Interviews', 'Research Proposal Guidance', 'Unlimited Support until placed']
        }
    ];

    return (
        <div className="container section">
            <Helmet>
                <title>Placement Plans | Resume & Interview Prep</title>
                <meta name="description" content="Accelerate your career with our specialized placement plans. Get resume restructuring, mock interviews, and LinkedIn optimization." />
            </Helmet>
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h1>Career Acceleration Plans</h1>
                <p className="text-subtle">Invest in your future with expert guidance.</p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                {plans.map((plan, i) => (
                    <div key={i} style={{
                        border: plan.highlight ? '2px solid var(--color-primary)' : '1px solid #eee',
                        borderRadius: '12px',
                        padding: '2.5rem',
                        position: 'relative',
                        backgroundColor: plan.highlight ? '#fff' : '#fafafa',
                        boxShadow: plan.highlight ? '0 20px 40px rgba(0,0,0,0.1)' : 'none',
                        transform: plan.highlight ? 'scale(1.05)' : 'none'
                    }}>
                        {plan.highlight && (
                            <div style={{
                                position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                                background: 'var(--color-primary)', color: 'white', padding: '4px 12px',
                                borderRadius: '20px', fontSize: '0.875rem', fontWeight: 'bold'
                            }}>Most Popular</div>
                        )}

                        <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>{plan.name}</h3>
                        <div style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: plan.highlight ? 'var(--color-primary)' : '#333' }}>
                            {plan.price}
                        </div>

                        <ul style={{ marginBottom: '2.5rem' }}>
                            {plan.features.map((feat, idx) => (
                                <li key={idx} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <Check size={18} color="var(--color-accent)" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/payment"
                            state={{ planName: plan.name, price: plan.price }}
                            className={plan.highlight ? 'btn btn-primary' : 'btn btn-outline'}
                            style={{ width: '100%', justifyContent: 'center' }}
                        >
                            Get Started
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Placement;
