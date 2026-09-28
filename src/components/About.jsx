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
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-header center"
        >
          <span className="section-subtitle">System Overview</span>
          <h2 className="section-title">Architecture & Protocol</h2>
        </motion.div>

        <div className="bento-grid">
          {/* Main About Text - Spans 8 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card bento-item col-span-8"
            style={{ padding: '48px', gridRow: 'span 2' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)', boxShadow: '0 0 12px var(--accent-color)' }}></div>
              <span className="font-mono" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status: Operational</span>
            </div>
            
            <p style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '24px', lineHeight: 1.6, letterSpacing: '-0.01em' }}>
              Seorang profesional muda yang berdedikasi di bidang infrastruktur jaringan dan keamanan siber.
            </p>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Berasal dari <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>SMKN 2 Pengasih</strong>, saya mengintegrasikan pemahaman teknis mendalam dengan strategi pemecahan masalah yang analitis. Saat ini, fokus utama saya adalah mempersiapkan diri sebagai kandidat dalam ajang <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>LKS Cyber Security</strong>.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Lebih dari sekadar konfigurasi dan mitigasi ancaman, saya melihat teknologi melalui lensa holistik—menghubungkan antara desain jaringan yang efisien dan lapisan pertahanan yang tak tertembus.
            </p>
          </motion.div>

          {/* Highlight 1 - Spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card bento-item col-span-4"
            style={{ padding: '36px' }}
          >
            <div style={{
              width: '44px', height: '44px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-glass)',
              borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '24px', color: 'var(--text-primary)', fontSize: '1.2rem',
            }}>
              <i className="fas fa-network-wired"></i>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600 }}>Network Arch</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Merancang, mengimplementasikan, dan memelihara infrastruktur yang handal serta terukur.</p>
          </motion.div>

          {/* Highlight 2 - Spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card bento-item col-span-4"
            style={{ padding: '36px' }}
          >
            <div style={{
              width: '44px', height: '44px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-glass)',
              borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '24px', color: 'var(--text-primary)', fontSize: '1.2rem',
            }}>
              <i className="fas fa-shield-halved"></i>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600 }}>Cyber Defense</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>Fokus pada hardening sistem, analisis kerentanan, dan perlindungan aset digital secara komprehensif.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
