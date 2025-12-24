import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid #eee', marginTop: '4rem', padding: '4rem 0' }}>
            <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>

                {/* Column 1: Quick Links */}
                <div>
                    <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>Quick Links</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/roadmap">Roadmap</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                        <li><Link to="/compete">Compete</Link></li>
                        <li><Link to="/counseling">Counseling</Link></li>
                    </ul>
                </div>

                {/* Column 2: Legal */}
                <div>
                    <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>Legal</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service">Terms of Service</Link></li>
                    </ul>
                    <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#888' }}>
                        © {new Date().getFullYear()} Life Science Engineering
                    </p>
                </div>

                {/* Column 3: Connect */}
                <div>
                    <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>Connect</h4>
                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                        <a href="https://www.linkedin.com/company/lselse/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}><Linkedin size={22} /></a>
                        <a href="https://x.com/teamlse123" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2' }}><Twitter size={22} /></a>
                        <a href="https://www.instagram.com/lifescienceengineering/" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F' }}><Instagram size={22} /></a>
                        <a href="mailto:team.lifescienceengineering@gmail.com" style={{ color: '#333' }}><Mail size={22} /></a>
                    </div>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', fontSize: '1.1rem' }}>Contact</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#666' }}>
                        <li>team.lifescienceengineering@gmail.com</li>
                        <li>HSR Layout, Bangalore</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
