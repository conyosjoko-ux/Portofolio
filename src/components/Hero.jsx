import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      paddingTop: '80px',
      paddingBottom: '120px',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        opacity: 0.5,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '900px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px', position: 'relative' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '40px' }}
        >
          <span className="section-subtitle">Systems & Security</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="section-title"
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 5rem)', 
            marginBottom: '16px',
            textShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}
        >
          Andreas Joan Ramiel
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontWeight: 500,
            marginBottom: '32px',
            color: 'var(--text-secondary)'
          }}
        >
          <span>I am a </span>
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
            <TypeAnimation
              sequence={[
                'Network Engineer.',
                2500,
                'Cyber Security Specialist.',
                2500,
                'System Administrator.',
                2500,
                'Tech Enthusiast.',
                2500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            marginBottom: '56px',
            maxWidth: '600px',
            lineHeight: 1.7
          }}
        >
          Mendedikasikan diri pada keandalan infrastruktur dan keamanan sistem di era digital. Membangun fondasi yang solid, aman, dan terukur.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn btn-primary" style={{ padding: '14px 32px' }}>
            <span>Explore Projects</span>
            <i className="fas fa-arrow-down" style={{ fontSize: '0.9em' }}></i>
          </a>
          <a href="https://www.instagram.com/andrsjoanr" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '14px 32px' }}>
            <i className="fab fa-instagram"></i>
            <span>Let's Connect</span>
          </a>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
