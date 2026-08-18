import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header center"
        >
          <span className="section-subtitle">01. INTRODUCTION</span>
          <h2 className="section-title">System <span className="gradient-text">Overview</span></h2>
        </motion.div>

        <div className="bento-grid">
          {/* Main About Text - Spans 8 cols */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="glass-card bento-item col-span-8"
            style={{ padding: '48px', gridRow: 'span 2' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-light)', boxShadow: '0 0 10px var(--accent-light)' }}></div>
              <span className="font-mono" style={{ color: 'var(--accent-light)' }}>Status: Active</span>
            </div>
            
            <p style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '24px', lineHeight: 1.5 }}>
              Saya adalah seorang profesional muda yang bersemangat di bidang infrastruktur jaringan dan keamanan siber.
            </p>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Berasal dari <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>SMKN 2 Pengasih</strong>, saya memadukan pemahaman teknis yang mendalam dengan pendekatan inovatif untuk memecahkan masalah. Saat ini, saya sedang fokus mempersiapkan diri sebagai representasi sekolah dalam ajang bergengsi <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>LKS Cyber Security</strong>.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Selain jaringan dan keamanan, saya juga memiliki ketertarikan kuat dalam pengembangan web dan desain grafis, memungkinkan saya untuk melihat teknologi dari berbagai perspektif yang holistik.
            </p>
          </motion.div>

          {/* Highlight 1 - Spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card bento-item col-span-4"
            style={{ padding: '32px' }}
          >
            <div style={{
              width: '48px', height: '48px',
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid var(--accent-color)',
              borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '20px', color: 'var(--accent-color)', fontSize: '1.2rem',
            }}>
              <i className="fas fa-network-wired"></i>
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Network Arch</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>Merancang dan memelihara infrastruktur andal & terukur.</p>
          </motion.div>

          {/* Highlight 2 - Spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="glass-card bento-item col-span-4"
            style={{ padding: '32px' }}
          >
            <div style={{
              width: '48px', height: '48px',
              background: 'rgba(57, 255, 20, 0.1)',
              border: '1px solid var(--accent-light)',
              borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '20px', color: 'var(--accent-light)', fontSize: '1.2rem',
            }}>
              <i className="fas fa-shield-halved"></i>
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Cyber Defense</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>Kandidat elit LKS Cyber Security & System Hardening.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
