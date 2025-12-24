import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Tag, Share2, Loader } from 'lucide-react';
import { blogPosts as localPosts } from '../data/blogPosts';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const BlogPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchPost = async () => {
            // 1. First, check purely local data for instant load
            const localPost = localPosts.find(p => p.id === postId);
            if (localPost) {
                setPost(localPost);
                setLoading(false);
                return; // Found locally, no need to wait for network
            }

            try {
                // 2. If not found locally, try fetching from Firestore (async)
                const docRef = doc(db, "blogs", postId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setPost({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setPost(null); // Truly not found
                }
            } catch (error) {
                console.error("Error fetching post, and not found locally:", error);
                setPost(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    if (loading) {
        return (
            <div className="container section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <Loader className="animate-spin" size={48} color="var(--color-primary)" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="container section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', flexDirection: 'column' }}>
                <h2>Post Not Found</h2>
                <Link to="/blog" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="container section" style={{ marginTop: '80px' }}>
            <Helmet>
                <title>{post.title} | Life Science Engineering Blog</title>
                <meta name="description" content={`Read about ${post.title} in our latest blog post.`} />
            </Helmet>

            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', textDecoration: 'none', marginBottom: '2rem', fontWeight: '500' }}>
                <ArrowLeft size={18} /> Back to Insights
            </Link>

            <article style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                        <span style={{
                            background: '#f1f5f9',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            color: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <Tag size={14} /> {post.category}
                        </span>
                        <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#64748b',
                            fontSize: '0.875rem'
                        }}>
                            <Calendar size={14} /> {post.date}
                        </span>
                    </div>

                    <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1rem', color: '#1e293b' }}>{post.title}</h1>
                    <p style={{ color: '#64748b', fontStyle: 'italic', marginBottom: '2rem' }}>Written by {post.author}</p>

                    <div style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden' }}>
                        <img
                            src={post.image}
                            alt={post.title}
                            style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <div
                    className="blog-content"
                    style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#334155' }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>Share this article</p>
                    <button className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                    }}>
                        <Share2 size={18} /> Copy Link
                    </button>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
