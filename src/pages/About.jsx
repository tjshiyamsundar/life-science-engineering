import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="container section">
            <Helmet>
                <title>About Us | Life Science Engineering</title>
                <meta name="description" content="We bridge the gap between academia and industry in Life Sciences. Learn about our mission to empower students with career-ready skills and mentorship." />
            </Helmet>
            <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
                <h1>Who We Are</h1>
                <p style={{ fontSize: '1.25rem', color: '#555', marginTop: '1rem' }}>
                    A platform dedicated to bridging the career awareness gap for Life Science, Pharma, and Biotech students. We guide, mentor, train, and empower students to build careers in healthcare, research, and industry.
                </p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '4rem' }}>

                <div style={{ padding: '2rem', border: '1px solid #efefef', borderRadius: '8px' }}>
                    <div style={{ width: '50px', height: '50px', background: '#e0f2fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                        <Target size={24} />
                    </div>
                    <h3>Our Mission</h3>
                    <p className="text-subtle">
                        To provide accessible, high-quality guidance and resources that enable every life science student to find their ideal career path.
                    </p>
                </div>

                <div style={{ padding: '2rem', border: '1px solid #efefef', borderRadius: '8px' }}>
                    <div style={{ width: '50px', height: '50px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
                        <Eye size={24} />
                    </div>
                    <h3>Our Vision</h3>
                    <p className="text-subtle">
                        A world where scientific talent is fully utilized, leading to faster innovations in healthcare and biotechnology.
                    </p>
                </div>

                <div style={{ padding: '2rem', border: '1px solid #efefef', borderRadius: '8px' }}>
                    <div style={{ width: '50px', height: '50px', background: '#fef2f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#ef4444' }}>
                        <Heart size={24} />
                    </div>
                    <h3>Core Values</h3>
                    <p className="text-subtle">
                        Integrity in science, inclusivity in education, and excellence in mentorship.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;
