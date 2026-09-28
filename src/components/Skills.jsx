import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Network Engineering', percent: 90, icon: 'fa-server' },
    { name: 'Cyber Security', percent: 85, icon: 'fa-shield-halved' },
    { name: 'IT Support', percent: 88, icon: 'fa-screwdriver-wrench' },
    { name: 'Web Development', percent: 85, icon: 'fa-code' },
    { name: 'Linux Administration', percent: 82, icon: 'fa-terminal' },
    { name: 'Graphic Design', percent: 80, icon: 'fa-pen-nib' },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-header center"
        >
          <span className="section-subtitle">Capabilities</span>
          <h2 className="section-title">Technical Modules</h2>
        </motion.div>

        <div className="bento-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card bento-item col-span-4"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '200px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'var(--bg-tertiary)', border: '1px solid var(--border-glass)',
                  color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem'
                }}>
                  <i className={`fas ${skill.icon}`}></i>
                </div>
                <span className="font-mono" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
                  {skill.percent}%
                </span>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', fontWeight: 600 }}>{skill.name}</h3>
                
                {/* Minimalist Progress Bar */}
                <div style={{ width: '100%', height: '4px', background: 'var(--border-glass)', borderRadius: '2px', overflow: 'hidden' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "circOut" }}
                    style={{ height: '100%', background: 'var(--text-primary)', borderRadius: '2px' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
