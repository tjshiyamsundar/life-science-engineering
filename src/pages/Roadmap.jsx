import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const RoleCard = ({ role }) => (
    <Link to={`/roadmap/${role.id}`} style={{
        background: '#1e293b',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid #334155',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.2s',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit'
    }}
        className="hover-card"
    >
        <span style={{ fontWeight: '500', fontSize: '1.1rem', color: '#e2e8f0' }}>{role.name}</span>
        <ArrowRight size={20} color="#64748b" />
    </Link>
);

const SectionGrid = ({ title, roles, color, refProp }) => (
    <div ref={refProp} style={{ marginBottom: '5rem', scrollMarginTop: '2rem' }}>
        <h2 style={{
            color: 'white',
            marginBottom: '2rem',
            borderLeft: `4px solid ${color}`,
            paddingLeft: '1rem',
            fontSize: '2rem'
        }}>{title}</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {roles.map((role, i) => (
                <RoleCard key={i} role={role} />
            ))}
        </div>
    </div>
);

const Roadmap = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    const lifeScienceRef = useRef(null);
    const biotechRef = useRef(null);
    const pharmaRef = useRef(null);

    useEffect(() => {
        // Scroll to the correct section based on category
        if (category === 'lifescience' && lifeScienceRef.current) {
            lifeScienceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (category === 'biotech' && biotechRef.current) {
            biotechRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (category === 'pharma' && pharmaRef.current) {
            pharmaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [category]);

    const lifeScienceRoles = [
        { name: "Research Assistant", id: "research-assistant" },
        { name: "Clinical Research Coordinator", id: "clinical-research-coordinator" },
        { name: "Lab Technician", id: "lab-technician" },
        { name: "Bioinformatician", id: "bioinformatician" },
        { name: "Environmental Scientist", id: "environmental-scientist" },
        { name: "Microbiologist", id: "microbiologist" },
        { name: "Quality Control Analyst", id: "quality-control-analyst" },
        { name: "Scientific Writer", id: "scientific-writer" },
        { name: "Food Safety Officer", id: "food-safety-officer" }
    ];

    const pharmaRoles = [
        { name: "Medical Representative", id: "medical-representative" },
        { name: "Pharmacovigilance Associate", id: "pharmacovigilance-associate" },
        { name: "Regulatory Affairs Executive", id: "regulatory-affairs-executive" },
        { name: "Clinical Data Manager", id: "clinical-data-manager" },
        { name: "Quality Assurance Officer", id: "quality-assurance-officer" },
        { name: "Production Chemist", id: "production-chemist" },
        { name: "Formulation & Development Scientist", id: "formulation-development-scientist" },
        { name: "Medical Writer", id: "medical-writer" },
        { name: "Drug Safety Associate", id: "drug-safety-associate" }
    ];

    const biotechRoles = [
        { name: "Bioprocess Engineer", id: "bioprocess-engineer" },
        { name: "Genetic Engineer", id: "genetic-engineer" },
        { name: "Molecular Biologist", id: "molecular-biologist" },
        { name: "Fermentation Scientist", id: "fermentation-scientist" },
        { name: "Biomedical Engineer", id: "biomedical-engineer" },
        { name: "Bioinformatics Specialist", id: "bioinformatics-specialist" },
        { name: "Cell Culture Technician", id: "cell-culture-technician" },
        { name: "R&D Scientist", id: "r-and-d-scientist" },
        { name: "Quality Control Microbiologist", id: "quality-control-microbiologist" }
    ];

    return (
        <div style={{ background: '#0f172a', minHeight: '100vh', color: '#e2e8f0', paddingBottom: '6rem' }}>
            <Helmet>
                <title>Career Roadmaps | Life Science, Pharma, & Biotech</title>
                <meta name="description" content="Explore step-by-step career paths for 27+ roles in Life Science, Pharmaceutical, and Biotechnology industries. Find your dream job roadmap today." />
            </Helmet>
            {/* Header */}
            <div style={{ background: '#1e293b', padding: '6rem 0 4rem', textAlign: 'center', marginBottom: '4rem', borderBottom: '1px solid #334155' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem' }}>Career Roadmaps</h1>
                    <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto' }}>
                        Step-by-step guides for the most in-demand roles in Life Science, Pharma, and Biotech.
                    </p>
                </div>
            </div>

            <div className="container">
                <SectionGrid title="LIFE SCIENCE – 9 Job Roles" roles={lifeScienceRoles} color="#009B77" refProp={lifeScienceRef} />
                <SectionGrid title="PHARMA – 9 Job Roles" roles={pharmaRoles} color="#3b82f6" refProp={pharmaRef} />
                <SectionGrid title="BIOTECH – 9 Job Roles" roles={biotechRoles} color="#a855f7" refProp={biotechRef} />
            </div>
        </div>
    );
};

export default Roadmap;
