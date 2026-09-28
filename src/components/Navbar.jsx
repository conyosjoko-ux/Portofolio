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
    { name: 'Projects', href: '#projects' },
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
        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }}>
            <rect width="32" height="32" rx="8" fill="url(#logo_grad)" />
            <path d="M16 8L9 22H12.5L16 15L19.5 22H23L16 8Z" fill="white" />
            <circle cx="16" cy="18.5" r="1.5" fill="white" />
            <defs>
              <linearGradient id="logo_grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F46E5" />
                <stop offset="0.5" stopColor="#9333EA" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
          AJR<span style={{ color: 'var(--text-tertiary)' }}>.</span>
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
            <button 
              onClick={toggleTheme} 
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'var(--bg-tertiary)', border: '1px solid var(--border-glass)',
                color: 'var(--text-primary)', cursor: 'pointer', transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--border-glass)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-tertiary)'; }}
              aria-label="Toggle Theme"
            >
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} style={{ fontSize: '1rem' }}></i>
            </button>
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
