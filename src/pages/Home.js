import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm a Web Developer";
  const typingSpeed = 100;

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typeInterval);
    }, typingSpeed);
    return () => clearInterval(typeInterval);
  }, []);

  const background = darkMode 
    ? 'linear-gradient(135deg, #000000, #434343)'
    : 'linear-gradient(135deg, #f9f9f9, #e0e0e0)';
  const textColor = darkMode ? '#fff' : '#111';
  const subTextColor = darkMode ? '#ccc' : '#555';
  const cardBg = darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)';
  const btnBg = darkMode ? '#fff' : '#111';
  const btnColor = darkMode ? '#111' : '#fff';

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background,
        padding: '3rem',
        color: textColor,
        transition: 'all 0.5s'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          backgroundColor: cardBg,
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
        }}
      >
        {/* Image */}
        <img
          src="/111.jpg"
          alt="Rasid"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />

        {/* Text */}
        <div>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '10px' }}>
            Hi, Saya Mohmmad Rasid
          </h1>
          <h2 style={{
            fontSize: '1.8rem',
            color: subTextColor,
            fontWeight: '400',
            fontFamily: 'monospace',
            borderRight: `2px solid ${textColor}`,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: 'fit-content'
          }}>
            {typedText}
          </h2>
          <p style={{ marginTop: '20px', fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6' }}>
            I’m passionate about building modern, responsive web apps using React, Node.js, and clean UI design.
          </p>

          <div style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
            <button
              style={{
                background: btnBg,
                color: btnColor,
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onClick={() => alert('Thank you for your interest!')}
            >
              Hire Me
            </button>

            <a
              href="/CV_Rasid.pdf"
              download
              style={{
                background: btnBg,
                color: btnColor,
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Download CV
            </a>
          </div>

          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                marginTop: '20px',
                background: 'transparent',
                border: `2px solid ${textColor}`,
                color: textColor,
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
