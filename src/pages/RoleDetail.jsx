import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, GraduationCap, DollarSign, BookOpen } from 'lucide-react';
import { roleDetails } from '../data/roleDetails';

const RoleDetail = () => {
    const { roleId } = useParams();
    const role = roleDetails[roleId];

    if (!role) {
        return (
            <div className="container section text-center">
                <h2>Role Not Found</h2>
                <Link to="/roadmap" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to Roadmaps
                </Link>
            </div>
        );
    }

    return (
        <div style={{ paddingBottom: '4rem' }}>
            <Helmet>
                <title>{role.title} Career Roadmap | Salary, Skills & Eligibility</title>
                <meta name="description" content={`Complete career guide for ${role.title}. Learn about eligibility, required skills, salary expectations, and the step-by-step path to becoming a ${role.title}.`} />
            </Helmet>
            {/* Header */}
            <div style={{ background: 'var(--color-primary)', color: 'white', padding: '4rem 0' }}>
                <div className="container">
                    <Link to="/roadmap" style={{ color: 'white', display: 'inline-flex', alignItems: 'center', marginBottom: '1rem', opacity: 0.8 }}>
                        <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to Roadmaps
                    </Link>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{role.title}</h1>
                    <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                        {role.category}
                    </div>
                </div>
            </div>

            <div className="container section" style={{ marginTop: '-2rem', background: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}>
                {/* Summary */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <BookOpen color="var(--color-accent)" /> Job Summary
                    </h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#475569' }}>{role.summary}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
                    {/* Eligibility */}
                    <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <GraduationCap color="var(--color-primary)" /> Eligibility
                        </h3>
                        <div style={{ marginBottom: '1rem' }}>
                            <strong>Degree:</strong>
                            <p style={{ color: '#64748b' }}>{role.eligibility.degree}</p>
                        </div>
                        <div>
                            <strong>Skills Needed:</strong>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                                {role.eligibility.skills.map((skill, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', color: '#64748b' }}>
                                        <div style={{ width: 6, height: 6, background: 'var(--color-accent)', borderRadius: '50%' }}></div>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Salary */}
                    <div style={{ background: '#f0fdf4', padding: '2rem', borderRadius: '12px' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <DollarSign color="#166534" /> Salary Range
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {role.salary.fresher && (
                                <div>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#166534', textTransform: 'uppercase' }}>Freshers</span>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{role.salary.fresher}</div>
                                </div>
                            )}
                            {role.salary.experienced && (
                                <div>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#166534', textTransform: 'uppercase' }}>Experienced</span>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{role.salary.experienced}</div>
                                </div>
                            )}
                            {role.salary.top && (
                                <div>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#166534', textTransform: 'uppercase' }}>Top Institutes</span>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{role.salary.top}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Flow Diagram */}
                <div>
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Career Roadmap</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                        {/* Vertical Line */}
                        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '4px', background: '#e2e8f0', transform: 'translateX(-50%)', borderRadius: '2px' }}></div>

                        {role.flow.map((step, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                marginBottom: '2rem',
                                position: 'relative'
                            }}>
                                {/* Dot */}
                                <div style={{
                                    position: 'absolute', left: '50%', top: '24px', transform: 'translateX(-50%)',
                                    width: '20px', height: '20px', background: index === role.flow.length - 1 ? 'var(--color-primary)' : 'var(--color-accent)',
                                    borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 2px #e2e8f0', zIndex: 2
                                }}></div>

                                <div style={{
                                    width: '45%',
                                    background: index === role.flow.length - 1 ? 'var(--color-primary)' : 'white',
                                    color: index === role.flow.length - 1 ? 'white' : 'inherit',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                                    border: index === role.flow.length - 1 ? 'none' : '1px solid #e2e8f0'
                                }}>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{index + 1}. {step.step}</h4>
                                    <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>{step.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoleDetail;
