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
      paddingBottom: '120px'
    }}>
      <div style={{ maxWidth: '900px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: '32px' }}
        >
          <span className="section-subtitle">Professional Portfolio</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="title"
        >
          Andreas Joan Ramiel
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '2rem',
            fontWeight: 600,
            marginBottom: '32px',
            color: 'var(--text-secondary)'
          }}
        >
          <span>I am a </span>
          <span style={{ color: 'var(--text-primary)' }}>
            <TypeAnimation
              sequence={[
                'Network Engineer.',
                2000,
                'Cyber Security Enthusiast.',
                2000,
                'Tech Explorer.',
                2000,
                'Problem Solver.',
                2000
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
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '48px',
            maxWidth: '650px'
          }}
        >
          Mendedikasikan diri pada keandalan infrastruktur dan keamanan sistem di era digital. Membangun fondasi yang kuat untuk masa depan yang lebih aman.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}
        >
          <a href="#projects" className="btn btn-primary">
            <span>Discover My Work</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <a href="https://www.instagram.com/andrsjoanr" target="_blank" rel="noreferrer" className="btn btn-outline">
            <i className="fab fa-instagram"></i>
            <span>Let's Connect</span>
          </a>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
