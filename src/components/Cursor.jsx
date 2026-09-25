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
      const isClickable = 
        e.target.tagName?.toLowerCase() === 'a' || 
        e.target.tagName?.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList?.contains('glass-card') ||
        e.target.classList?.contains('bento-item');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-inner"
        animate={{ 
          x: mousePosition.x - 4, 
          y: mousePosition.y - 4,
          opacity: isHovering ? 0 : 1,
          rotate: 45 // Rotate to make it a diamond
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--accent-color)',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px var(--accent-color)'
        }}
      />
      <motion.div
        className="cursor-outer"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 135 : 45, // Spins when hovering
          backgroundColor: isHovering ? 'color-mix(in srgb, var(--accent-color) 20%, transparent)' : 'transparent',
          borderColor: isHovering ? 'transparent' : 'var(--text-secondary)'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
        style={{
          width: '32px',
          height: '32px',
          border: '1px solid',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
    </>
  );
};

export default Cursor;
