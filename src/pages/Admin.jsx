import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { db } from '../firebase';
import { collection, query, onSnapshot, doc, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { LayoutDashboard, Users, BookOpen, Trophy, LogOut, MessageSquare, Trash2, PlusCircle, FileText, UserPlus, File, CheckCircle } from 'lucide-react';

const Admin = () => {
    // --- STATE ---
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('LSE_ADMIN_LOGGED_IN') === 'true');
    const [password, setPassword] = useState('');

    // Data Collections
    const [bookings, setBookings] = useState([]);
    const [leads, setLeads] = useState([]);
    const [messages, setMessages] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [contests, setContests] = useState([]);
    const [mentors, setMentors] = useState([]);
    const [resources, setResources] = useState([]);

    // Forms
    const [newBlog, setNewBlog] = useState({ title: '', category: '', image: '', author: 'Admin', content: '' });
    const [newContest, setNewContest] = useState({ contest: '', category: '', prize: '₹10,000', icon: 'Microscope', color: '#009B77' });
    const [newMentor, setNewMentor] = useState({ name: '', role: '', company: '', exp: '', rate: '₹999/session' });
    const [newResource, setNewResource] = useState({ title: '', category: '', link: '' });

    // --- AUTH ---
    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'LSEAdmin2024') {
            setIsAuthenticated(true);
            localStorage.setItem('LSE_ADMIN_LOGGED_IN', 'true');
        } else {
            alert('Incorrect Password');
        }
    };

    // --- DATA FETCHING ---
    useEffect(() => {
        if (!isAuthenticated) return;
        const q = (col) => query(collection(db, col));

        // Listeners (Silent Fail if Network Blocked)
        const unsubs = [
            onSnapshot(q("counseling_bookings"), s => setBookings(s.docs.map(d => ({ id: d.id, ...d.data() }))), e => { }),
            onSnapshot(q("placement_leads"), s => setLeads(s.docs.map(d => ({ id: d.id, ...d.data() }))), e => { }),
            onSnapshot(q("contact_messages"), s => setMessages(s.docs.map(d => ({ id: d.id, ...d.data() }))), e => { }),
            onSnapshot(q("blogs"), s => setBlogs(s.docs.map(d => ({ id: d.id, ...d.data() }))), e => { }),
            onSnapshot(q("competitions"), s => setContests(s.docs.map(d => ({ id: d.id, ...d.data() }))), e => { }),
            onSnapshot(q("mentors"), s => setMentors(s.docs.map(d => ({ id: d.id, ...d.data() }))), e => { }),
            onSnapshot(q("resources"), s => setResources(s.docs.map(d => ({ id: d.id, ...d.data() }))), e => { }),
        ];
        return () => unsubs.forEach(u => u());
    }, [isAuthenticated]);

    // --- ACTIONS ---
    const handleAdd = async (col, data, resetFn, defaultState) => {
        if (activeTab === 'dashboard') { // Demo Mode Check (Fake Add)
            alert("Added to Demo State (Refresh to clear)");
            return;
        }
        try {
            await addDoc(collection(db, col), { ...data, createdAt: serverTimestamp() });
            resetFn(defaultState);
            alert("Item Added Successfully!");
        } catch (err) {
            alert("Failed to Add (Network Blocked): " + err.message);
        }
    };

    const handleDelete = async (col, id) => {
        if (!confirm("Delete this item?")) return;
        try {
            await deleteDoc(doc(db, col, id));
        } catch (err) {
            alert("Delete Failed (Network Blocked)");
        }
    };

    const handleLoadDemo = () => {
        setBookings([{ id: '1', name: 'Rahul Verma', topic: 'Career Guidance', date: '2024-12-25' }, { id: '2', name: 'Sneha Gupta', topic: 'Higher Studies', date: '2024-12-26' }]);
        setLeads([{ id: '1', name: 'Priya Sharma', plan: 'Placement Pro', phone: '+91 9876500000' }]);
        setMessages([{ id: '1', name: 'Vikram', message: 'Interested in courses.' }, { id: '2', name: 'Anjali', message: 'Internship query.' }]);
        setBlogs([{ id: '1', title: 'Future of Biotech', category: 'Biotech' }, { id: '2', title: 'Clinical Research 101', category: 'Research' }]);
        setContests([{ id: '1', contest: 'Research Pitch', category: 'Life Science', prize: '₹10,000' }]);
        setMentors([{ id: '1', name: 'Dr. Anadhu', role: 'Senior Scientist', company: 'Biocon', exp: '7 Years' }]);
        setResources([{ id: '1', title: 'Resume Template 2025', category: 'Placement', link: '#' }]);
        alert("Demo Data Loaded!");
    };

    // --- UI COMPONENTS ---
    const SectionHeader = ({ title, sub }) => (
        <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1e293b' }}>{title}</h2>
            <p style={{ color: '#64748b' }}>{sub}</p>
        </div>
    );

    const FormCard = ({ title, children, onSubmit }) => (
        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                <PlusCircle size={20} color="var(--color-primary)" /> {title}
            </h3>
            <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                {children}
                <button className="btn btn-primary" style={{ width: 'fit-content' }}>Publish Item</button>
            </form>
        </div>
    );

    const Input = (props) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#475569' }}>{props.label}</label>
            <input {...props} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', transition: 'border 0.2s', ...props.style }} />
        </div>
    );

    if (!isAuthenticated) return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
            <form onSubmit={handleLogin} style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>LSE Admin</h2>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" style={{ width: '100%', padding: '1rem', marginBottom: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Login</button>
            </form>
        </div>
    );

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f1f5f9' }}>
            <Helmet><title>Admin Panel | LSE</title></Helmet>

            {/* SIDEBAR */}
            <div style={{ width: '260px', background: '#0f172a', color: 'white', padding: '2rem', position: 'fixed', height: '100vh', zIndex: 10 }}>
                <div style={{ marginBottom: '3rem', fontSize: '1.5rem', fontWeight: 'bold' }}>LSE ADMIN</div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
                        { id: 'blogs', label: 'Manage Blogs', icon: <BookOpen size={18} /> },
                        { id: 'competitions', label: 'Competitions', icon: <Trophy size={18} /> },
                        { id: 'mentors', label: 'Mentors', icon: <UserPlus size={18} /> },
                        { id: 'resources', label: 'Resources', icon: <FileText size={18} /> },
                    ].map(item => (
                        <button key={item.id} onClick={() => setActiveTab(item.id)} style={{
                            display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', borderRadius: '8px',
                            background: activeTab === item.id ? '#334155' : 'transparent', color: activeTab === item.id ? 'white' : '#94a3b8', border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s'
                        }}>
                            {item.icon} {item.label}
                        </button>
                    ))}
                    <button onClick={handleLoadDemo} style={{ marginTop: '2rem', padding: '0.75rem', background: 'rgba(16,185,129,0.1)', color: '#34d399', border: '1px solid #10b981', borderRadius: '8px', cursor: 'pointer' }}>Load Demo Data</button>
                </nav>
            </div>

            {/* MAIN CONTENT */}
            <div style={{ flex: 1, marginLeft: '260px', padding: '3rem' }}>

                {activeTab === 'dashboard' && (
                    <>
                        <SectionHeader title="Dashboard Overview" sub="Real-time Platform Activity" />
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                <p style={{ color: '#64748b' }}>Total Interactions</p>
                                <h3 style={{ fontSize: '2rem' }}>{bookings.length + leads.length + messages.length}</h3>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                <p style={{ color: '#64748b' }}>Bookings</p>
                                <h3 style={{ fontSize: '2rem' }}>{bookings.length}</h3>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                <p style={{ color: '#64748b' }}>Messages</p>
                                <h3 style={{ fontSize: '2rem' }}>{messages.length}</h3>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                <p style={{ color: '#64748b' }}>Leads</p>
                                <h3 style={{ fontSize: '2rem' }}>{leads.length}</h3>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {/* Recent Bookings */}
                            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px' }}>
                                <h3 style={{ marginBottom: '1.5rem' }}>Recent Bookings</h3>
                                {bookings.length === 0 ? <p style={{ color: '#94a3b8' }}>No bookings yet.</p> :
                                    bookings.map(b => (
                                        <div key={b.id} style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <strong>{b.name}</strong>
                                                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{b.topic}</div>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ fontWeight: '600', color: 'var(--color-primary)' }}>{b.date}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{b.phone}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            {/* Recent Leads */}
                            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px' }}>
                                <h3 style={{ marginBottom: '1.5rem' }}>Placement Leads</h3>
                                {leads.length === 0 ? <p style={{ color: '#94a3b8' }}>No leads yet.</p> :
                                    leads.map(l => (
                                        <div key={l.id} style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <strong>{l.name}</strong>
                                                <span style={{ background: '#ecfdf5', color: '#059669', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>{l.plan}</span>
                                            </div>
                                            <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>{l.city} • {l.phone}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Messages Row */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', marginTop: '2rem' }}>
                            <h3>Contact Inbox</h3>
                            {messages.length === 0 ? <p style={{ color: '#94a3b8', marginTop: '1rem' }}>No messages found.</p> :
                                messages.map(m => (
                                    <div key={m.id} style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                                        <strong>{m.name}</strong> <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{m.email}</span>
                                        <p style={{ margin: '0.5rem 0 0', color: '#475569' }}>{m.message}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )}

                {activeTab === 'blogs' && (
                    <>
                        <SectionHeader title="Manage Blogs" sub="Create and edit articles" />
                        <FormCard title="Write New Article" onSubmit={(e) => { e.preventDefault(); handleAdd('blogs', newBlog, setNewBlog, { title: '', category: '', image: '', author: 'Admin', content: '' }) }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                                <Input label="Article Title" value={newBlog.title} onChange={e => setNewBlog({ ...newBlog, title: e.target.value })} placeholder="e.g. 5 Careers in Biotech" required />
                                <Input label="Category" value={newBlog.category} onChange={e => setNewBlog({ ...newBlog, category: e.target.value })} placeholder="e.g. Career Guide" required />
                            </div>
                            <Input label="Cover Image URL" value={newBlog.image} onChange={e => setNewBlog({ ...newBlog, image: e.target.value })} placeholder="https://..." />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#475569' }}>Content</label>
                                <textarea
                                    value={newBlog.content} onChange={e => setNewBlog({ ...newBlog, content: e.target.value })}
                                    rows={6}
                                    style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', resize: 'vertical' }}
                                    placeholder="Write your article markdown here..."
                                    required
                                />
                            </div>
                        </FormCard>
                        {/* List */}
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {blogs.map(b => (
                                <div key={b.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem' }}>{b.title}</h4>
                                        <span style={{ background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', color: '#64748b' }}>{b.category}</span>
                                    </div>
                                    <button onClick={() => handleDelete('blogs', b.id)} style={{ color: 'red', background: 'none', border: 'none' }}><Trash2 size={18} /></button>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {activeTab === 'competitions' && (
                    <>
                        <SectionHeader title="Competitions" sub="Manage active contests" />
                        <FormCard title="Launch New Competition" onSubmit={(e) => { e.preventDefault(); handleAdd('competitions', newContest, setNewContest, { contest: '', category: '', prize: '₹10,000', icon: 'Microscope', color: '#009B77' }) }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <Input label="Contest Name" value={newContest.contest} onChange={e => setNewContest({ ...newContest, contest: e.target.value })} required />
                                <Input label="Field / Category" value={newContest.category} onChange={e => setNewContest({ ...newContest, category: e.target.value })} required />
                                <Input label="Prize Pool" value={newContest.prize} onChange={e => setNewContest({ ...newContest, prize: e.target.value })} required />
                                <Input label="Icon Name (Lucide)" value={newContest.icon} onChange={e => setNewContest({ ...newContest, icon: e.target.value })} />
                            </div>
                        </FormCard>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            {contests.map(c => (
                                <div key={c.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', borderTop: `4px solid ${c.color || 'gray'}` }}>
                                    <h4>{c.contest}</h4>
                                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{c.category} • {c.prize}</p>
                                    <button onClick={() => handleDelete('competitions', c.id)} style={{ color: 'red', marginTop: '1rem', background: 'none', border: 'none' }}>Delete</button>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {activeTab === 'mentors' && (
                    <>
                        <SectionHeader title="Manage Mentors" sub="Add experts to the counseling pool" />
                        <FormCard title="Add New Mentor" onSubmit={(e) => { e.preventDefault(); handleAdd('mentors', newMentor, setNewMentor, { name: '', role: '', company: '', exp: '', rate: '₹999/session' }) }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <Input label="Full Name" value={newMentor.name} onChange={e => setNewMentor({ ...newMentor, name: e.target.value })} required />
                                <Input label="Current Role" value={newMentor.role} onChange={e => setNewMentor({ ...newMentor, role: e.target.value })} required />
                                <Input label="Company" value={newMentor.company} onChange={e => setNewMentor({ ...newMentor, company: e.target.value })} required />
                                <Input label="Experience (e.g. 5 Years)" value={newMentor.exp} onChange={e => setNewMentor({ ...newMentor, exp: e.target.value })} required />
                            </div>
                            <Input label="Session Rate" value={newMentor.rate} onChange={e => setNewMentor({ ...newMentor, rate: e.target.value })} />
                        </FormCard>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                            {mentors.map(m => (
                                <div key={m.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', background: '#e2e8f0', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>{m.name?.[0]}</div>
                                    <h4>{m.name}</h4>
                                    <p style={{ fontSize: '0.8rem', color: '#64748b' }}>{m.role} @ {m.company}</p>
                                    <button onClick={() => handleDelete('mentors', m.id)} style={{ color: 'red', marginTop: '1rem', background: 'none', border: 'none' }}>Remove</button>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {activeTab === 'resources' && (
                    <>
                        <SectionHeader title="Resources" sub="Upload PDFs and Learning Materials" />
                        <FormCard title="Upload Resource" onSubmit={(e) => { e.preventDefault(); handleAdd('resources', newResource, setNewResource, { title: '', category: '', link: '' }) }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <Input label="Resource Title" value={newResource.title} onChange={e => setNewResource({ ...newResource, title: e.target.value })} required />
                                <Input label="Category" value={newResource.category} onChange={e => setNewResource({ ...newResource, category: e.target.value })} />
                            </div>
                            <Input label="File URL (Drive/Dropbox/PDF Link)" value={newResource.link} onChange={e => setNewResource({ ...newResource, link: e.target.value })} placeholder="https://..." required />
                        </FormCard>
                        {/* List */}
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {resources.map(r => (
                                <div key={r.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <File size={24} color="var(--color-primary)" />
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem' }}>{r.title}</h4>
                                            <a href={r.link} target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>View File</a>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDelete('resources', r.id)} style={{ color: 'red', background: 'none', border: 'none' }}>Delete</button>
                                </div>
                            ))}
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default Admin;
