import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '16px 0' : '24px 0',
        background: scrolled ? 'var(--bg-glass-hover)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-1px' }}>
          AJR<span style={{ color: 'var(--accent-color)' }}>.</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: '32px',
            margin: 0,
            padding: 0
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ display: 'inline-block', height: '30px', position: 'relative', width: '56px', cursor: 'pointer' }}>
              <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} style={{ display: 'none' }} />
              <div style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-glass)',
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                borderRadius: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 8px',
                transition: '0.4s'
              }}>
                <i className="fas fa-sun" style={{ color: '#f39c12', fontSize: '11px', zIndex: 1 }}></i>
                <i className="fas fa-moon" style={{ color: '#f1c40f', fontSize: '11px', zIndex: 1 }}></i>
                <div style={{
                  backgroundColor: 'var(--text-primary)',
                  position: 'absolute',
                  height: '22px', width: '22px',
                  left: theme === 'light' ? '28px' : '4px',
                  bottom: '3px',
                  borderRadius: '50%',
                  transition: '0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  zIndex: 2,
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }} />
              </div>
            </label>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
