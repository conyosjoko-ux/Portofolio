import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      date: '2026 - Upcoming',
      org: 'SMKN 2 Pengasih',
      title: 'LKS Cyber Security Contender',
      desc: 'Mempersiapkan diri secara intensif dalam bidang penetrasi jaringan, forensik digital, dan hardening sistem untuk kompetisi LKS tingkat regional/nasional.',
      span: 'col-span-12',
      featured: true
    },
    {
      date: '2025 - Past',
      org: 'UNY Wates',
      title: 'Network Engineering',
      desc: 'Instalasi, konfigurasi router/switch, dan pemeliharaan infrastruktur jaringan kampus untuk memastikan uptime maksimal dan latensi minimal.',
      span: 'col-span-6',
      featured: false
    },
    {
      date: '2024 - Past',
      org: 'UNY Wates',
      title: 'IT Support',
      desc: 'Dukungan teknis menyeluruh, mulai dari perbaikan perangkat keras, instalasi OS, hingga penanganan masalah jaringan pengguna akhir.',
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
          transition={{ duration: 0.6 }}
          className="section-header center"
        >
          <span className="section-subtitle">02. PROFESSIONAL JOURNEY</span>
          <h2 className="section-title">Execution <span className="gradient-text">Logs</span></h2>
        </motion.div>

        <div className="bento-grid">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`glass-card bento-item ${exp.span}`}
              style={{ padding: exp.featured ? '48px' : '40px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <span className="font-mono" style={{
                  display: 'inline-block', padding: '6px 12px', background: 'rgba(0, 240, 255, 0.05)',
                  color: 'var(--accent-color)', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600,
                  border: '1px solid rgba(0, 240, 255, 0.2)'
                }}>> {exp.date}</span>
                
                <span style={{ color: 'var(--text-secondary)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-building"></i> {exp.org}
                </span>
              </div>
              
              <h3 style={{ fontSize: exp.featured ? '2rem' : '1.5rem', marginBottom: '16px' }}>{exp.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0 }}>{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
