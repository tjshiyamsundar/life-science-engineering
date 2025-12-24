import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Dna, ChevronRight, Download, Check, FlaskConical, Microscope, Activity, Star, Quote, ChevronLeft, Brain } from 'lucide-react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { blogPosts } from '../data/blogPosts';

const iconMap = {
    Microscope: <Microscope size={32} />,
    FlaskConical: <FlaskConical size={32} />,
    Dna: <Dna size={32} />,
    Activity: <Activity size={32} />,
    Brain: <Brain size={32} />
};

// Testimonials Data
const testimonials = [
    {
        name: "Ananya Iyer",
        program: "M.Sc Life Science – S.R.M. Institute of Science and Technology, Chennai",
        service: "Clinical Research Consultation",
        quote: "The clinical research consultation gave me absolute clarity about CRC and CRA roles. The mentor explained real trial processes, documentation, and career growth in a very practical way. After this session, I finally felt confident about entering the clinical research field."
    },
    {
        name: "Kavya Reddy",
        program: "M.Pharm – NIPER Hyderabad",
        service: "Pharmacovigilance Consultation",
        quote: "The pharmacovigilance consultation was extremely detailed and industry-focused. I clearly understood adverse event reporting, safety databases, and global regulations. This session helped me confidently choose drug safety as my long-term career path."
    },
    {
        name: "Suresh Kumar",
        program: "B.Sc Life Science – PSG College of Pharmacy, Coimbatore",
        service: "Medical Coding Consultation",
        quote: "Medical coding felt confusing before the session, but the mentor explained CPT, ICD-10, and CPC certification step by step. I now know exactly how to prepare and what roles to target. This consultation saved me a lot of time and confusion."
    },
    {
        name: "Meera Nair",
        program: "M.Pharm – Manipal College of Pharmaceutical Sciences, Manipal",
        service: "Regulatory Affairs Consultation",
        quote: "The regulatory affairs consultation was incredibly insightful. I learned about dossier preparation, submissions, and global regulatory pathways. The mentor shared real industry examples that helped me understand how regulatory teams actually work."
    },
    {
        name: "Arun Prakash",
        program: "B.Pharm – AU College of Pharmaceutical Sciences, Andhra University",
        service: "Medical Writing Consultation",
        quote: "The medical writing session helped me understand different writing roles like regulatory writing, clinical documents, and publications. I also got guidance on building a portfolio. It was very practical and career-oriented."
    },
    {
        name: "Priya Sharma",
        program: "M.Sc Biology – Birla Institute of Technology & Science, Pilani",
        service: "Career Roadmaps",
        quote: "The career roadmaps are extremely well-structured and easy to follow. Every step is clearly explained—from skills to certifications to job roles. Instead of random advice, I finally had a clear plan for my future."
    },
    {
        name: "Rahul Verma",
        program: "M.Pharm – Poona College of Pharmacy, Pune",
        service: "Placement Support",
        quote: "The placement support was very professional and student-focused. From interview preparation to understanding recruiter expectations, everything was covered. I felt well-prepared and confident while attending interviews."
    },
    {
        name: "Neha Gupta",
        program: "M.Pharm – Maharshi Dayanand University, Rohtak",
        service: "Resume Preparation",
        quote: "The resume preparation service completely transformed my CV. It became ATS-optimized and role-specific. The mentor explained what recruiters actually look for, which made a huge difference in my job applications."
    },
    {
        name: "Pooja Singh",
        program: "B.Pharm – JSS College of Pharmacy, Ooty",
        service: "Learning Resources",
        quote: "The resources provided are extremely helpful and industry-relevant. From interview questions to role-based preparation material, everything is available in one place. It made my preparation much more focused and effective."
    }
];

// Testimonials Section Component
const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 3) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const visibleTestimonials = [
        testimonials[currentIndex % testimonials.length],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length]
    ];

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 3 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 3) % testimonials.length);
    };

    return (
        <section className="container section" style={{ padding: '6rem 2rem' }}>
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h2>What Our Students Say</h2>
                <p className="text-subtle">Real experiences from students who transformed their careers with LSE</p>
            </div>

            <div style={{ position: 'relative' }}>
                {/* Navigation Arrows */}
                <button
                    onClick={goToPrev}
                    style={{
                        position: 'absolute',
                        left: '-20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                >
                    <ChevronLeft size={24} color="#64748b" />
                </button>

                <button
                    onClick={goToNext}
                    style={{
                        position: 'absolute',
                        right: '-20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                >
                    <ChevronRight size={24} color="#64748b" />
                </button>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-3" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {visibleTestimonials.map((testimonial, index) => (
                        <div
                            key={`${testimonial.name}-${index}`}
                            style={{
                                background: 'white',
                                borderRadius: '20px',
                                padding: '2rem',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                                position: 'relative',
                                transition: 'all 0.5s ease',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {/* Quote Icon */}
                            <div style={{
                                position: 'absolute',
                                top: '-15px',
                                left: '2rem',
                                width: '40px',
                                height: '40px',
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 12px rgba(0,51,102,0.3)'
                            }}>
                                <Quote size={18} color="white" />
                            </div>

                            {/* Service Tag */}
                            <div style={{
                                background: '#f1f5f9',
                                color: 'var(--color-primary)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '50px',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                width: 'fit-content',
                                marginBottom: '1.5rem',
                                marginTop: '0.5rem'
                            }}>
                                {testimonial.service}
                            </div>

                            {/* Quote */}
                            <p style={{
                                color: '#475569',
                                fontSize: '0.95rem',
                                lineHeight: '1.7',
                                fontStyle: 'italic',
                                flex: 1,
                                marginBottom: '1.5rem'
                            }}>
                                "{testimonial.quote}"
                            </p>

                            {/* Author - Without Photo */}
                            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: '#1e293b', fontWeight: '600' }}>
                                    {testimonial.name}
                                </h4>
                                <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: '1.4' }}>
                                    {testimonial.program}
                                </p>
                                {/* 5 Stars */}
                                <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.75rem' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots Indicator */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
                    {[0, 3, 6].map((dotIndex) => (
                        <button
                            key={dotIndex}
                            onClick={() => setCurrentIndex(dotIndex)}
                            style={{
                                width: currentIndex === dotIndex ? '24px' : '8px',
                                height: '8px',
                                borderRadius: '4px',
                                background: currentIndex === dotIndex ? 'var(--color-primary)' : '#cbd5e1',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    const [liveCompetitions, setLiveCompetitions] = useState([]);

    useEffect(() => {
        // Query fetching logic...
        const q = query(collection(db, "competitions"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            if (fetched.length > 0) {
                // If we have DB data, show it (ensure it doesn't break layout if > 3)
                setLiveCompetitions(fetched.slice(0, 3));
            } else {
                // Fallback: 3 Fixed Boxes as requested
                setLiveCompetitions([
                    { category: 'Life Science', contest: 'Research Idea Contest', prize: '₹10,000', icon: 'Microscope', color: '#009B77', lightBg: '#f0fdf4' },
                    { category: 'Biotech', contest: 'Startup Pitch Deck', prize: '₹10,000', icon: 'FlaskConical', color: '#3b82f6', lightBg: '#eff6ff' },
                    { category: 'Pharma', contest: 'Case Study Challenge', prize: '₹10,000', icon: 'Dna', color: '#a855f7', lightBg: '#f5f3ff' }
                ]);
            }
        }, (error) => {
            console.error("Error fetching competitions:", error);
            // Fallback on error too
            setLiveCompetitions([
                { category: 'Life Science', contest: 'Research Idea Contest', prize: '₹10,000', icon: 'Microscope', color: '#009B77', lightBg: '#f0fdf4' },
                { category: 'Biotech', contest: 'Startup Pitch Deck', prize: '₹10,000', icon: 'FlaskConical', color: '#3b82f6', lightBg: '#eff6ff' },
                { category: 'Pharma', contest: 'Case Study Challenge', prize: '₹10,000', icon: 'Dna', color: '#a855f7', lightBg: '#f5f3ff' }
            ]);
        });
        return () => unsubscribe();
    }, []);
    // Mentor Data
    const healthcareMentors = [
        { name: "Anadhu Shyam", role: "Sr Clinical Project Coordinator", exp: "7 Years", company: "Clinical Research", rate: "₹999/session" },
        { name: "Ramya Nambisan", role: "Senior Medical Coder", exp: "15 Years", company: "Medical Coding", rate: "₹999/session" },
        { name: "Sundar", role: "Placement Expert", exp: "4 Years", company: "Career Services", rate: "₹999/session" }
    ];





    const MentorCard = ({ mentor }) => (
        <div style={{
            padding: '1.5rem',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            background: 'white',
            textAlign: 'center',
            transition: 'transform 0.2s',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
            <div style={{
                width: '80px', height: '80px',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>
                <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{mentor.name.charAt(0)}</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{mentor.name}</h3>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{mentor.company}</div>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem', minHeight: '40px' }}>
                {mentor.role} • {mentor.exp}
            </p>
            <div style={{ padding: '0.5rem', background: '#f8fafc', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.9rem', fontWeight: '600' }}>
                {mentor.rate}
            </div>
            <Link to="/counseling" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', borderRadius: '8px' }}>
                Book Session
            </Link>
        </div>
    );

    return (
        <div>
            <Helmet>
                <title>Life Science Engineering | Career Maps, Mentorship & Competitions</title>
                <meta name="description" content="Launch your career in Life Science, Pharma, and Biotech. Get step-by-step career roadmaps, book counseling with experts, and win national competitions." />
                <meta name="keywords" content="Life Science Careers, Biotech Jobs, Pharma Roadmap, Medical Coding, Clinical Research, Mentorship" />
            </Helmet>
            {/* HERO SECTION */}
            <section style={{
                textAlign: 'center',
                padding: '8rem 1rem 6rem',
                maxWidth: '900px',
                margin: '0 auto',
                position: 'relative'
            }}>
                <h1 style={{ marginBottom: '1.5rem', fontSize: '4rem', letterSpacing: '-0.03em', lineHeight: '1.1' }}>
                    From Lab to Leadership  <br />
                    <span style={{ color: 'var(--color-primary)' }}>Your Career Starts Here.</span>
                </h1>
                <p style={{ fontSize: '1.35rem', color: '#64748b', marginBottom: '3rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 3rem' }}>
                    Explore careers, get guidance, and compete in national-level contests across Life Science, Pharma, and Biotech.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
                    <Link to="/counseling" className="btn btn-accent" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px', boxShadow: '0 10px 25px -5px rgba(0, 155, 119, 0.3)' }}>
                        Book Counseling
                    </Link>
                    <Link to="/roadmap" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px', boxShadow: '0 10px 25px -5px rgba(0, 51, 102, 0.3)' }}>
                        Explore Roadmaps
                    </Link>
                </div>
            </section>

            {/* COUNSELING SECTION */}
            <section className="container section" style={{ paddingTop: '2rem' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2>Counseling & Mentorship</h2>
                    <p className="text-subtle">Expert guidance to accelerate your career.</p>
                </div>

                {/* Healthcare Career Mentors */}
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ marginBottom: '2rem', paddingLeft: '0.5rem', borderLeft: '4px solid var(--color-primary)' }}>Healthcare Career Mentors</h3>
                    <div className="grid grid-cols-3" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        {healthcareMentors.map((m, i) => <MentorCard key={i} mentor={m} />)}
                    </div>
                </div>

            </section>

            {/* FEATURED CAREER TRACKS */}
            <section className="container section" style={{ background: '#f8fafc', padding: '6rem 2rem', borderRadius: '20px' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2>Choose Your Path</h2>
                    <p className="text-subtle">Comprehensive roadmaps for every discipline</p>
                </div>

                <div className="grid grid-cols-3" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {[
                        { title: 'Life Science', desc: 'Master CPT, ICD-10, and healthcare data management.', icon: '🧬', category: 'lifescience' },
                        { title: 'Biotech', desc: 'Monitor clinical trials and ensure protocol compliance.', icon: '🧪', category: 'biotech' },
                        { title: 'Pharma', desc: 'Drug safety monitoring and adverse event reporting.', icon: '💊', category: 'pharma' }
                    ].map((track, i) => (
                        <div key={i} style={{
                            padding: '2.5rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '16px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            backgroundColor: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' // Shadow Border
                        }}
                            className="hover-card"
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.2)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)'; }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{track.icon}</div>
                            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.5rem' }}>{track.title}</h3>
                            <p className="text-subtle" style={{ marginBottom: '2rem', fontSize: '1rem' }}>
                                {track.desc}
                            </p>
                            <Link to={`/roadmap?category=${track.category}`} style={{
                                color: 'var(--color-primary)',
                                fontWeight: 'bold',
                                display: 'inline-flex',
                                alignItems: 'center',
                                fontSize: '1rem'
                            }}>
                                View Roadmap <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* PLACEMENT PLANS */}
            <section className="container section" style={{ padding: '6rem 2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ maxWidth: '600px' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Placement Packages</h2>
                        <p className="text-subtle" style={{ fontSize: '1.1rem' }}>Ready to commit? Choose a comprehensive placement package.</p>
                    </div>
                </div>
                <div className="grid grid-cols-3" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {[
                        { title: 'Resume Blueprint', price: '₹999', features: ['ATS Optimized', 'Keyword Formatting'] },
                        { title: 'Placement Pro', price: '₹4,999', features: ['Mock Interviews', 'LinkedIn Optimization', 'Cover Letter'] },
                        { title: 'Premium Mentorship', price: '₹14,999', features: ['Industry Mentor', 'Mock Interview', 'Unlimited Prep'] }
                    ].map((plan, i) => (
                        <div key={i} style={{
                            background: 'white',
                            borderRadius: '16px',
                            padding: '2rem',
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', // Shadow Border
                            border: i === 1 ? '2px solid var(--color-primary)' : '1px solid #e2e8f0',
                            position: 'relative',
                            transition: 'transform 0.3s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {i === 1 && <div style={{ position: 'absolute', top: 12, right: 12, background: 'var(--color-primary)', color: 'white', fontSize: '0.7rem', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px' }}>POPULAR</div>}
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{plan.title}</h3>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1e293b' }}>{plan.price}</div>
                            <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {plan.features.map((f, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>
                                        <Check size={16} color="var(--color-accent)" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/payment"
                                state={{ planName: plan.title, price: plan.price }}
                                className={i === 1 ? "btn btn-primary" : "btn btn-outline"}
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                Choose Plan
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* ACTIVE COMPETITIONS SECTION - LIGHT PREMIUM REDESIGN */}
            <section style={{
                background: '#ffffff', // Clean white background to match page flow
                padding: '8rem 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Subtle background element */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(0,51,102,0.03) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            background: '#f1f5f9',
                            padding: '0.6rem 1.5rem',
                            borderRadius: '50px',
                            marginBottom: '1.5rem',
                            border: '1px solid #e2e8f0'
                        }}>
                            <span style={{ fontSize: '1.2rem' }}>🏆</span>
                            <span style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>National Level Contests</span>
                        </div>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.25rem', color: '#0f172a' }}>Active Competitions</h2>
                        <p style={{ color: '#64748b', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                            Showcase your expertise, solve real-world challenges, and win <span style={{ color: 'var(--color-primary)', fontWeight: '700' }}>₹10,000</span> cash prizes.
                        </p>
                    </div>

                    <div className="grid grid-cols-3" style={{ gap: '2rem', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        {liveCompetitions.map((comp, i) => (
                            <div key={i} style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: '3rem 2rem',
                                border: '1px solid #f1f5f9',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)';
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    backgroundColor: comp.lightBg || `${comp.color}15`,
                                    color: comp.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '2rem',
                                    boxShadow: `0 10px 20px -5px ${comp.color}40`
                                }}>
                                    {iconMap[comp.icon] || <Microscope size={36} />}
                                </div>

                                <div style={{
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    color: comp.color,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    marginBottom: '0.75rem'
                                }}>
                                    {comp.category}
                                </div>

                                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#0f172a', lineHeight: '1.3' }}>
                                    {comp.contest}
                                </h3>

                                <div style={{
                                    display: 'inline-block',
                                    marginBottom: '2rem',
                                    padding: '0.5rem 1.25rem',
                                    background: '#f8fafc',
                                    borderRadius: '50px',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    <span style={{ fontWeight: '600', color: '#64748b', fontSize: '0.9rem' }}>Prize Pool: </span>
                                    <span style={{ fontWeight: '800', color: '#0f172a', fontSize: '1rem' }}>{comp.prize}</span>
                                </div>

                                <Link to="/compete" className="btn" style={{
                                    marginTop: 'auto',
                                    width: '100%',
                                    background: comp.color,
                                    color: 'white',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    fontWeight: '700',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    boxShadow: `0 10px 20px -5px ${comp.color}50`
                                }}>
                                    Participate Now
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link to="/compete" className="btn btn-outline" style={{ padding: '0.8rem 2.5rem', borderRadius: '50px' }}>
                            View All Contests
                        </Link>
                    </div>
                </div>
            </section>

            {/* LATEST BLOGS SECTION */}
            <section className="container section" style={{ padding: '6rem 2rem' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2>Latest from Our Blog</h2>
                    <p className="text-subtle">Insights and roadmaps for your life science journey</p>
                </div>

                <div className="grid grid-cols-3" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} style={{
                            background: 'white',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.15)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)'; }}
                        >
                            <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1rem',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold'
                                }}>
                                    {post.category}
                                </div>
                            </div>
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4', flex: 1 }}>{post.title}</h3>
                                <Link to={`/blog/${post.id}`} style={{
                                    color: 'var(--color-primary)',
                                    fontWeight: 'bold',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    fontSize: '0.9rem',
                                    marginTop: 'auto'
                                }}>
                                    Read Article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '4rem' }}>
                    <Link to="/blog" className="btn btn-outline" style={{ borderRadius: '50px', padding: '0.75rem 2rem' }}>
                        View All Posts
                    </Link>
                </div>
            </section >

            {/* TESTIMONIALS SECTION */}
            < TestimonialsSection />
        </div >
    );
};

export default Home;
