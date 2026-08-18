import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Network Engineering', percent: 90, icon: 'fa-server', color: 'var(--accent-color)' },
    { name: 'Cyber Security', percent: 85, icon: 'fa-shield-halved', color: 'var(--accent-light)' },
    { name: 'IT Support', percent: 88, icon: 'fa-screwdriver-wrench', color: 'var(--accent-color)' },
    { name: 'Web Development', percent: 85, icon: 'fa-code', color: 'var(--accent-light)' },
    { name: 'App Coding', percent: 75, icon: 'fa-laptop-code', color: 'var(--accent-color)' },
    { name: 'Graphic Design', percent: 80, icon: 'fa-pen-nib', color: 'var(--accent-light)' },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header center"
        >
          <span className="section-subtitle">03. EXPERTISE</span>
          <h2 className="section-title">Technical <span className="gradient-text">Modules</span></h2>
        </motion.div>

        <div className="bento-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: skill.color }}
              className="glass-card bento-item col-span-4"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '8px',
                  background: `color-mix(in srgb, ${skill.color} 15%, transparent)`,
                  color: skill.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  <i className={`fas ${skill.icon}`}></i>
                </div>
                <span className="font-mono" style={{ color: skill.color, fontSize: '1.2rem', fontWeight: 700 }}>
                  {skill.percent}%
                </span>
              </div>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>{skill.name}</h3>
              
              {/* Terminal Progress Bar */}
              <div style={{ width: '100%', height: '6px', background: 'var(--border-glass)', borderRadius: '4px', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  style={{ height: '100%', background: skill.color, borderRadius: '4px' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
