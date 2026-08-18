import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') ||
          e.target.closest('button') ||
          e.target.classList.contains('glass-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--accent-color)',
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px var(--accent-color)',
        }}
      />
      {/* Outline */}
      <motion.div
        className="cursor-outline"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.5 }}
        style={{
          width: '40px',
          height: '40px',
          border: '1px solid var(--accent-color)',
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default Cursor;
