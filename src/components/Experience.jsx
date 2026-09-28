import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      date: '2026 - Upcoming',
      org: 'SMKN 2 Pengasih',
      title: 'LKS Cyber Security Contender',
      desc: 'Mempersiapkan diri secara intensif dalam bidang penetrasi jaringan, forensik digital, dan hardening sistem untuk kompetisi tingkat regional dan nasional.',
      span: 'col-span-12',
      featured: true
    },
    {
      date: '2025 - Past',
      org: 'UNY Wates',
      title: 'Network Engineering',
      desc: 'Instalasi, konfigurasi router/switch, dan pemeliharaan infrastruktur jaringan untuk memastikan uptime maksimal dan stabilitas operasional.',
      span: 'col-span-6',
      featured: false
    },
    {
      date: '2024 - Past',
      org: 'UNY Wates',
      title: 'IT Support',
      desc: 'Dukungan teknis menyeluruh, perbaikan perangkat keras, instalasi OS, serta penanganan masalah jaringan pada pengguna akhir.',
      span: 'col-span-6',
      featured: false
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-header center"
        >
          <span className="section-subtitle">Career Log</span>
          <h2 className="section-title">Execution History</h2>
        </motion.div>

        <div className="bento-grid">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card bento-item ${exp.span}`}
              style={{ padding: exp.featured ? '48px' : '40px', justifyContent: 'center' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <span className="font-mono" style={{
                  display: 'inline-block', padding: '6px 12px', background: 'var(--bg-tertiary)',
                  color: 'var(--text-secondary)', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600,
                  border: '1px solid var(--border-glass)', letterSpacing: '0.05em'
                }}> {exp.date}</span>
                
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-building" style={{ opacity: 0.5 }}></i> {exp.org}
                </span>
              </div>
              
              <h3 style={{ fontSize: exp.featured ? '1.8rem' : '1.4rem', marginBottom: '16px', fontWeight: 600, letterSpacing: '-0.02em' }}>{exp.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
