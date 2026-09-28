import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ padding: '60px 24px 40px', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '16px', height: '16px', background: 'var(--text-primary)', borderRadius: '4px' }}></div>
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
