import React from 'react';
import { motion } from 'framer-motion';

const BackgroundOrbs = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          width: '50vw',
          height: '50vw',
          background: 'var(--accent-color)',
          top: '-20vh',
          left: '-10vw',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.15,
        }}
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          position: 'absolute',
          width: '40vw',
          height: '40vw',
          background: 'var(--accent-light)',
          bottom: '-10vh',
          right: '-10vw',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.15,
        }}
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        style={{
          position: 'absolute',
          width: '30vw',
          height: '30vw',
          background: '#ff0055',
          top: '30vh',
          left: '30vw',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.08,
        }}
      />
    </div>
  );
};

export default BackgroundOrbs;
