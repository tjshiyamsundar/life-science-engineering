import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <div className="container section">
            <Helmet>
                <title>Privacy Policy | Life Science Engineering</title>
                <meta name="description" content="Privacy Policy for Life Science Engineering platform." />
            </Helmet>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1rem' }}>🔐 Privacy Policy</h1>
                <p className="text-subtle" style={{ marginBottom: '2rem' }}>Effective Date: December 2025</p>

                <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
                    Welcome to <strong>Life Science Engineering</strong> ("we", "our", "us"). Your trust matters to us, and we are committed to handling your information responsibly while delivering high-quality career guidance, mentorship, resources, competitions, and placement-related services across Life Science, Pharma, and Biotech domains.
                </p>
                <p style={{ marginBottom: '2rem' }}>By using our website and services, you agree to the practices described in this Privacy Policy.</p>

                <section style={{ marginBottom: '2rem' }}>
                    <h3>1. Information We Collect</h3>
                    <p style={{ marginBottom: '1rem' }}>To provide seamless and personalized services, we may collect:</p>
                    <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>a) Personal Information</h4>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Mobile number</li>
                        <li>Educational and professional details</li>
                        <li>Career preferences</li>
                        <li>Resume/CV and documents voluntarily submitted</li>
                        <li>Payment-related details (processed securely via third-party gateways)</li>
                    </ul>
                    <h4 style={{ marginBottom: '0.5rem' }}>b) Non-Personal Information</h4>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>Device and browser information</li>
                        <li>IP address</li>
                        <li>Website usage data</li>
                        <li>Cookies and analytics information</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3>2. Purpose of Data Collection</h3>
                    <p>We collect and use information solely to:</p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>Deliver counseling, mentorship, placement, and educational services</li>
                        <li>Manage bookings, competitions, and platform access</li>
                        <li>Communicate service updates, reminders, and important notices</li>
                        <li>Improve platform quality, user experience, and offerings</li>
                        <li>Maintain internal records and compliance</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>We always aim to use your data in a <strong>lawful, transparent, and beneficial manner</strong>.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3>3. Data Sharing & Disclosure</h3>
                    <p>We <strong>do not sell or trade</strong> personal data.</p>
                    <p style={{ marginTop: '1rem' }}>Information may be shared only when necessary with:</p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>Verified mentors and industry experts (strictly for service delivery)</li>
                        <li>Trusted technology and payment partners</li>
                        <li>Legal or regulatory authorities if required by law</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>All partners are expected to maintain confidentiality.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3>4. Data Security & Responsibility</h3>
                    <p>We implement reasonable and industry-standard safeguards to protect your information.</p>
                    <p style={{ marginTop: '1rem' }}>However, users acknowledge that:</p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>No online platform can guarantee absolute security</li>
                        <li>Life Science Engineering shall not be held responsible for events beyond reasonable control, including cyber incidents, third-party breaches, or technical failures</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3>5. Cookies & Tracking</h3>
                    <p>We use cookies to enhance performance and user experience. Disabling cookies may limit certain platform features.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3>6. User Rights & Communication</h3>
                    <p>You may:</p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>Request access or correction of your data</li>
                        <li>Opt out of promotional communication</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>Service-related communication is essential and <strong>cannot be fully opted out of</strong>.</p>
                    <p style={{ marginTop: '1rem' }}>Requests can be sent to <strong>team.lifescienceengineering@gmail.com</strong></p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3>7. External Links</h3>
                    <p>Our platform may contain third-party links. We are not responsible for the privacy practices, content, or policies of external websites.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3>8. Age Restriction</h3>
                    <p>Our services are intended for individuals <strong>18 years and above</strong> only.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3>9. Policy Updates</h3>
                    <p>We may update this Privacy Policy at any time. Continued use of the platform indicates acceptance of the revised policy.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3>10. Contact</h3>
                    <p>📧 <strong>team.lifescienceengineering@gmail.com</strong></p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
