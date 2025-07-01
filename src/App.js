import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
        {/* Sidebar */}
        <div style={{
          width: '250px',
          background: '#111',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 10px'
        }}>
          <img
            src="/111.jpg"
            alt="Profile"
            style={{ borderRadius: '50%', width: '100px', marginBottom: '10px' }}
          />
          <h2 style={{ margin: '10px 0' }}>My Portofolio</h2>
          
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <SocialIcon href="https://x.com/peee_657?t=n4eCATWe3NbVhdh0UlOtoQ&s=09" color="#1DA1F2">
              <FaTwitter size={20} />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/share/16bXd956ZY/" color="#1877F2">
              <FaFacebook size={20} />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/_rsiddd?igsh=OTNqNzlueGJ3aWxy" color="#E4405F">
              <FaInstagram size={20} />
            </SocialIcon>
            <SocialIcon href="https://heylink.me/Rasidd/" color="#0A66C2">
              <FaLinkedin size={20} />
            </SocialIcon>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <Link to="/" style={sidebarLinkStyle}>Home</Link>
            <Link to="/about" style={sidebarLinkStyle}>About</Link>
            <Link to="/portfolio" style={sidebarLinkStyle}>Portfolio</Link>
            <Link to="/contact" style={sidebarLinkStyle}>Contact</Link>
            <Link to="/blog" style={sidebarLinkStyle}>Blog</Link>
          </nav>

          <div style={{ marginTop: 'auto', fontSize: '0.8rem', textAlign: 'center' }}>
            <p>© Copyright iPortfolio</p>
            <p>Designed by BootstrapMade</p>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '40px', background: '#f9f9f9' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Link style sidebar
const sidebarLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '10px 15px',
  borderRadius: '8px',
  transition: 'background 0.3s',
};

// Komponen SocialIcon untuk hover animasi keren
const SocialIcon = ({ href, color, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: '#fff',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
    }}
    onMouseEnter={e => {
      e.target.style.transform = 'scale(1.3)';
      e.target.style.boxShadow = `0 0 10px ${color}`;
    }}
    onMouseLeave={e => {
      e.target.style.transform = 'scale(1)';
      e.target.style.boxShadow = 'none';
    }}
  >
    {children}
  </a>
);

export default App;
