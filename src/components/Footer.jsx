import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ padding: '60px 24px 40px', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }}>
              <rect width="32" height="32" rx="8" fill="url(#logo_grad_footer)" />
              <path d="M16 8L9 22H12.5L16 15L19.5 22H23L16 8Z" fill="white" />
              <circle cx="16" cy="18.5" r="1.5" fill="white" />
              <defs>
                <linearGradient id="logo_grad_footer" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4F46E5" />
                  <stop offset="0.5" stopColor="#9333EA" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              AJR<span style={{ color: 'var(--text-tertiary)' }}>.</span>
            </div>
          </div>
          
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
            &copy; {new Date().getFullYear()} Andreas Joan Ramiel. Crafted with elegance.
          </div>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <motion.a 
              href="https://www.instagram.com/andrsjoanr" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -2 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px',
                background: 'var(--bg-tertiary)', border: '1px solid var(--border-glass)', borderRadius: '10px',
                color: 'var(--text-primary)', fontSize: '1.1rem', textDecoration: 'none', transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--border-highlight)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-tertiary)'; }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
