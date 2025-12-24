import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { blogPosts as localBlogs } from '../data/blogPosts';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Safety timeout: If DB doesn't respond in 3 seconds, use local data
        const timeout = setTimeout(() => {
            if (loading) {
                setBlogs(localBlogs);
                setLoading(false);
            }
        }, 3000);

        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedBlogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBlogs(fetchedBlogs.length > 0 ? fetchedBlogs : localBlogs);
            setLoading(false);
            clearTimeout(timeout);
        }, (error) => {
            console.error("Firebase error:", error);
            setBlogs(localBlogs);
            setLoading(false);
            clearTimeout(timeout);
        });

        return () => {
            unsubscribe();
            clearTimeout(timeout);
        };
    }, [loading]);

    if (loading) {
        return (
            <div className="container section" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', gap: '1rem' }}>
                <Loader
                    size={48}
                    color="var(--color-primary)"
                    style={{ animation: 'spin 1s linear infinite' }}
                />
                <style>{`
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}</style>
                <p style={{ color: '#64748b' }}>Loading latest insights...</p>
            </div>
        );
    }

    return (
        <div className="container section">
            <Helmet>
                <title>Career Insights Blog | Life Science Engineering</title>
                <meta name="description" content="Stay updated with the latest trends, career tips, and industry insights in Life Science, Pharma, and Biotech." />
            </Helmet>
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Latest Insights</h1>
                <p className="text-subtle" style={{ fontSize: '1.25rem' }}>News, trends, and career advice from industry experts.</p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                {blogs.map((post, i) => (
                    <Link to={`/blog/${post.id}`} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <article style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            border: '1px solid #f1f5f9',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            height: '100%',
                            background: 'white'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(0, 0, 0, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '180px',
                                background: '#f8fafc',
                                borderRadius: '8px',
                                marginBottom: '1.5rem',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#64748b', marginBottom: '0.75rem' }}>
                                <span>{post.date}</span>
                                <span>•</span>
                                <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>{post.category}</span>
                            </div>

                            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4', fontWeight: '700' }}>{post.title}</h2>
                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', color: 'var(--color-primary)', fontWeight: '500' }}>
                                Read More <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;
