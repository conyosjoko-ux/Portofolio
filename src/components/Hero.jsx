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
      <div style={{ maxWidth: '900px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: '32px' }}
        >
          <span style={{
            padding: '8px 16px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-glass)',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            backdropFilter: 'blur(10px)'
          }}>Welcome to my universe</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="title"
        >
          Andreas Joan <br /> <span className="gradient-text">Ramiel</span>
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
          <a href="#experience" className="btn btn-primary">
            <span>Discover My Work</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <a href="https://www.instagram.com/andrsjoanr" target="_blank" rel="noreferrer" className="btn btn-outline">
            <i className="fab fa-instagram"></i>
            <span>Let's Connect</span>
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          fontWeight: 500,
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}
      >
        <div style={{
          width: '24px', height: '36px',
          border: '2px solid var(--text-secondary)',
          borderRadius: '12px', position: 'relative'
        }}>
          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              position: 'absolute',
              top: '6px', left: '50%',
              transform: 'translateX(-50%)',
              width: '4px', height: '4px',
              background: 'var(--accent-color)',
              borderRadius: '50%'
            }}
          />
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
