import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Trophy, Users, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';

const Compete = () => {
    const commonPrize = "₹10,000";
    const registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdG5_t3vTx2IpKKX_WCU-hFRyNGcT8KMGn34hZWa0v5OsLH6A/viewform?usp=header";

    const sections = [
        {
            title: "Life Science Competitions",
            color: "#009B77", // Green
            competitions: [
                {
                    id: 1, title: 'Life Science Research Idea Contest',
                    who: ['Life Science', 'Biotech', 'Pharma', 'MBBS students', 'UG, PG & Research scholars'],
                    rules: ['Idea must be original', 'Max 3 members per team', 'Presentation time: 5 minutes', 'PPT or PDF compulsory', 'No plagiarism'],
                    steps: ['Register online', 'Submit a 1-page abstract', 'Shortlisting', 'Final presentation on event day']
                },
                {
                    id: 2, title: 'Scientific Poster Presentation',
                    who: ['All science & medical students including MBBS', 'UG / PG / PhD'],
                    rules: ['Poster size: A1 (digital or printed)', 'Max 3 participants per team', 'Must follow scientific poster format', 'No copyrighted images without reference'],
                    steps: ['Register', 'Submit poster draft', 'Jury review', 'Display & present poster']
                },
                {
                    id: 3, title: 'Environmental Problem-Solving Challenge',
                    who: ['Life Science, Biotech, Pharma, MBBS', 'Interdisciplinary teams allowed'],
                    rules: ['Team size: max 3', 'Problem must be real-world and actionable', 'Present a structured solution', 'Use data to support the problem'],
                    steps: ['Choose an environmental problem', 'Create solution framework', 'Submit proposal', 'Present solution']
                }
            ]
        },
        {
            title: "Biotech Competitions",
            color: "#003366", // Blue
            competitions: [
                {
                    id: 4, title: 'Biotechnology Startup Pitch',
                    who: ['Biotech, Life Science, Pharma, MBBS', 'Students with innovative biotech ideas'],
                    rules: ['Solo or team (max 3)', '3-minute pitch + 2-minute Q&A', 'Pitch deck mandatory', 'Idea must be feasible & ethical'],
                    steps: ['Register', 'Upload pitch deck', 'Screening round', 'Final on-stage pitch']
                },
                {
                    id: 5, title: 'Bio-Innovation Prototype Contest',
                    who: ['All science/engineering/medical students', 'MBBS allowed'],
                    rules: ['Prototype can be physical or digital', 'Team size: max 3', 'Must explain mechanism + use case', 'No hazardous materials'],
                    steps: ['Submit concept note', 'Build prototype', 'Demonstrate to jury', 'Q&A session']
                },
                {
                    id: 6, title: 'Genetic Engineering Case Challenge',
                    who: ['Biotech, Life Science, Pharma, MBBS', 'UG / PG students'],
                    rules: ['Teams of 2–3', 'Case will be provided 48 hours before', 'Written solution + short presentation', 'Must cite references'],
                    steps: ['Register', 'Receive case', 'Prepare solution', 'Present to experts']
                }
            ]
        },
        {
            title: "Pharma Competitions",
            color: "#000000", // Black
            competitions: [
                {
                    id: 7, title: 'Pharma Case Study Competition',
                    who: ['Pharma, Life Science, Biotech, MBBS', 'Students interested in QA/QC, R&D, RA'],
                    rules: ['Individual or max 3-member team', 'Case must be solved with scientific reasoning', 'Max 5 slides for solution'],
                    steps: ['Register', 'Case distributed', 'Submit solution', 'Present to panel']
                },
                {
                    id: 8, title: 'Prescription Analysis & Clinical Quiz',
                    who: ['MBBS, Pharma, Biotech, Life Science', 'UG/PG medical students'],
                    rules: ['Individual participation', 'Multiple rounds (MCQ + case + rapid fire)', 'No negative marking in round 1'],
                    steps: ['Take written MCQ', 'Top scorers go to clinical case round', 'Finalists attend rapid fire round', 'Winner announced']
                },
                {
                    id: 9, title: 'Pharma Marketing Strategy Contest',
                    who: ['Pharma, Biotech, Life Science, MBBS', 'Students interested in pharma marketing'],
                    rules: ['Team size: max 3', 'Prepare a strategy for a drug/OTC product', 'Must include pricing, positioning, promotion', 'Max 7 slides'],
                    steps: ['Register', 'Receive product topic', 'Prepare marketing strategy deck', 'Final presentation']
                }
            ]
        },
        {
            title: "Medical Student Competitions",
            color: "#ef4444", // Red
            competitions: [
                {
                    id: 10, title: 'Clinical Case Analysis Contest (Online)',
                    who: ['MBBS, Pharma, Biotech, Life Science students', 'Anyone interested in clinical reasoning'],
                    rules: ['Individual participation', 'Digital clinical case provided', 'Submit diagnosis & management plan', 'Max 2-3 pages PDF', 'Online-only submission'],
                    steps: ['Register', 'Receive clinical case', 'Analyze and prepare answer sheet', 'Submit online', 'Final evaluation']
                },
                {
                    id: 11, title: 'National Medical Quiz Challenge (Online)',
                    who: ['MBBS, Pharma, Biotech, Life Science students', 'Interest in medical/clinical knowledge'],
                    rules: ['Timed quiz (Anatomy, Physiology, Pathology, etc.)', 'Google Forms/Zoom format', 'Must complete in one go', 'Highest scorer wins'],
                    steps: ['Register', 'Receive quiz link', 'Join scheduled quiz', 'Complete in time', 'Results announced']
                },
                {
                    id: 12, title: 'Medical Research Idea Pitch (Online)',
                    who: ['MBBS, Pharma, Biotech, Life Science students', 'Interest in research/public health'],
                    rules: ['Individual or team (max 3)', 'Submit 1-2 page research idea', 'Topics: Public health, Community med, etc.', 'Shortlisted: 5-min online pitch'],
                    steps: ['Register', 'Submit idea', 'Shortlisting', 'Online pitch', 'Winner selection']
                }
            ]
        }
    ];

    return (
        <div className="container section">
            <Helmet>
                <title>Competitions & Hackathons | Life Science Engineering</title>
                <meta name="description" content="Participate in national-level Life Science, Pharma, and Medical competitions. Win prizes, gain recognition, and showcase your talent." />
            </Helmet>
            <div className="text-center" style={{ marginBottom: '5rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>National Competitions</h1>
                <p className="text-subtle" style={{ fontSize: '1.25rem' }}>Showcase your talent, innovate, and win big.</p>
            </div>

            {sections.map((section, idx) => (
                <div key={idx} style={{ marginBottom: '6rem' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '3rem',
                        paddingBottom: '1rem',
                        borderBottom: `2px solid ${section.color}`
                    }}>
                        <h2 style={{ fontSize: '2.5rem', color: section.color, margin: 0 }}>{section.title}</h2>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                        {section.competitions.map((comp) => (
                            <div key={comp.id} style={{
                                border: '1px solid #e2e8f0',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                background: 'white',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}>
                                {/* Header */}
                                <div style={{ background: section.color, padding: '1.5rem', color: 'white' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{comp.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', background: 'rgba(255,255,255,0.2)', width: 'fit-content', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>
                                        <Trophy size={18} />
                                        <span>Prize: {commonPrize}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{ padding: '2rem' }}>

                                    {/* Who Can Apply */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1e293b', marginBottom: '0.75rem' }}>
                                            <Users size={20} /> Who Can Apply
                                        </h4>
                                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#64748b' }}>
                                            {comp.who.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>

                                    {/* Rules */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1e293b', marginBottom: '0.75rem' }}>
                                            <AlertCircle size={20} /> Rules
                                        </h4>
                                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#64748b' }}>
                                            {comp.rules.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>

                                    {/* Steps */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1e293b', marginBottom: '0.75rem' }}>
                                            <CheckCircle size={20} /> Steps
                                        </h4>
                                        <ol style={{ listStyle: 'decimal', paddingLeft: '1.5rem', color: '#64748b' }}>
                                            {comp.steps.map((item, i) => <li key={i}>{item}</li>)}
                                        </ol>
                                    </div>

                                    <a
                                        href={registerLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn"
                                        style={{
                                            width: '100%',
                                            background: section.color,
                                            color: 'white',
                                            justifyContent: 'center',
                                            padding: '1rem',
                                            borderRadius: '8px'
                                        }}
                                    >
                                        Register Now <ExternalLink size={18} style={{ marginLeft: '0.5rem' }} />
                                    </a>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Compete;
