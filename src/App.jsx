import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Placement from './pages/Placement';
import Resources from './pages/Resources';
import Roadmap from './pages/Roadmap';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Compete from './pages/Compete';
import Contact from './pages/Contact';
import Counseling from './pages/Counseling';
import BookingConfirmation from './pages/BookingConfirmation';
import Payment from './pages/Payment';
import RoleDetail from './pages/RoleDetail';
import Admin from './pages/Admin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/roadmap/:roleId" element={<RoleDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/compete" element={<Compete />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/counseling" element={<Counseling />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
