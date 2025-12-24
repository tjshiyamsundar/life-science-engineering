import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Download } from 'lucide-react';
import medicalCodingImg from '../assets/resources/medical-coding.png';

const Resources = () => {
    const resources = [
        { title: 'Clinical Research Interview Q&A', coverText: 'Top 100 Important Clinical Research Questions and Answers', type: 'PDF', icon: FileText, downloads: 450, link: 'https://drive.google.com/file/d/1Av5bJkl2GUWFpP8UZGlpvMR6SYdHDxIE/view?usp=sharing' },
        { title: 'Common Interview Q&A', coverText: 'Top 100 Important Common Interview Questions and Answers', type: 'PDF', icon: FileText, downloads: 1205, link: 'https://drive.google.com/file/d/13eouQIAbmmum1HmkAYv8rksgPcG4eq61/view?usp=sharing' },
        { title: 'Medical Coding Interview Q&A', coverText: 'Top 100 Important Medical Coding Questions and Answers', type: 'PDF', icon: FileText, image: medicalCodingImg, downloads: 980, link: 'https://drive.google.com/file/d/15PXJFiNiGyFMISA8K5kk7XBSsOG60BfV/view?usp=sharing' },
        { title: 'Bioinformatics Interview Q&A', coverText: 'Top 100 Important Bioinformatics Questions and Answers', type: 'PDF', icon: FileText, downloads: 890, link: 'https://drive.google.com/file/d/1dlpVnPYcT5S9AovZ9H_O11td4n8klEoQ/view?usp=sharing' },
        { title: 'Clinical SAS Interview Q&A', coverText: 'Top 100 Important Clinical SAS Questions and Answers', type: 'PDF', icon: FileText, downloads: 670, link: 'https://drive.google.com/file/d/1yWubVpYuTdbukX8tJip_uPs4SSo90W4i/view?usp=sharing' },
        { title: 'Pharmacovigilance Interview Q&A', coverText: 'Top 100 Important Pharmacovigilance Questions and Answers', type: 'PDF', icon: FileText, downloads: 340, link: 'https://drive.google.com/file/d/1aHS9xS9YEUMkzSxLPk1-4clf7EBZ2Khx/view?usp=sharing' },
        { title: 'Clinical Data Management Interview Q&A', coverText: 'Top 100 Important Clinical Data Management Questions and Answers', type: 'PDF', icon: FileText, downloads: 210, link: 'https://drive.google.com/file/d/1uzBtSbDSPRA-9cgCJDdMCm9c7vjej4D-/view?usp=sharing' },
        { title: 'Medical Writing Interview Q&A', coverText: 'Top 100 Important Medical Writing Questions and Answers', type: 'PDF', icon: FileText, downloads: 150, link: 'https://drive.google.com/file/d/16VYnnmlthi7oeaRnf1op39enpsvJHgS5/view?usp=sharing' },
        { title: 'Regulatory Affairs Interview Q&A', coverText: 'Top 100 Important Regulatory Affairs Questions and Answers', type: 'PDF', icon: FileText, downloads: 550, link: 'https://drive.google.com/file/d/11NTCHbi5xEsLZ2x3LR9TWyt6WkBBY6L3/view?usp=sharing' },
    ];

    return (
        <div className="container section">
            <Helmet>
                <title>Free Career Resources | Life Science Engineering</title>
                <meta name="description" content="Download free resume templates, interview Q&A, standard protocols, and career guides for Life Science professionals." />
            </Helmet>
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Resource Library</h1>
                <p className="text-subtle" style={{ fontSize: '1.25rem' }}>Essential tools, templates, and guides. All in PDF format.</p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {resources.map((res, i) => (
                    <a
                        key={i}
                        href={res.link || '#'}
                        target={res.link !== '#' ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        style={{
                            display: 'block',
                            background: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            position: 'relative',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        {/* Preview Area */}
                        <div style={{ height: '140px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                            {res.image ? (
                                <img src={res.image} alt={res.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', transform: 'scale(1.75)', transformOrigin: 'top center' }} />
                            ) : (
                                <div style={{ padding: '1rem', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                    <h5 style={{ margin: 0, fontSize: '1rem', fontWeight: '700', color: '#1e293b', lineHeight: '1.4' }}>
                                        {res.coverText || res.title}
                                    </h5>
                                </div>
                            )}
                        </div>

                        <div style={{ padding: '1.5rem' }}>
                            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem', minHeight: '56px', lineHeight: '1.4' }}>{res.title}</h4>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.85rem' }}>
                                    <span style={{ background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase', fontWeight: '600', fontSize: '0.75rem' }}>{res.type}</span>
                                    <span>{res.downloads} Downloads</span>
                                </div>

                                <div
                                    style={{
                                        background: 'var(--color-accent)',
                                        color: 'white',
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Download size={18} />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Resources;
