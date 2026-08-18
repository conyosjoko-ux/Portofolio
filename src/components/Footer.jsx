import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ padding: '40px 24px 80px' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card footer-mobile"
          style={{ padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.8rem', fontWeight: 800 }}>
            AJR<span style={{ color: 'var(--accent-color)' }}>.</span>
          </div>
          
          <div style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            &copy; 2026 Andreas Joan Ramiel. <span className="gradient-text">Crafted with elegance.</span>
          </div>
          
          <div>
            <motion.a 
              href="https://www.instagram.com/andrsjoanr" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -5, rotate: 10, backgroundColor: 'var(--accent-color)', color: '#000' }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px',
                background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', borderRadius: '50%',
                color: 'var(--text-primary)', fontSize: '1.2rem', textDecoration: 'none'
              }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .footer-mobile { flex-direction: column !important; gap: 24px !important; text-align: center !important; padding: 32px 24px !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
