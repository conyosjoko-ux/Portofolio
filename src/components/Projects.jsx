import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Network Infrastructure Setup",
      description: "Relokasi dan pemasangan jalur Access Point di area Plaza, Gedung Kuliah, dan Pos Satpam untuk memperluas jangkauan jaringan.",
      tags: ["Networking", "Infrastructure", "Access Point"],
      file: "/docs/Draf Laporan Hasil Relokasi dan Jalur Access Point Plaza, GK dan Pos Satpam Selatan - ANDREAS JOAN RAMIEL.pdf",
      icon: "fa-network-wired"
    },
    {
      id: 2,
      title: "Faculty Website Management",
      description: "Pembaruan konten dan pemeliharaan website fakultas menggunakan sistem manajemen konten Drupal.",
      tags: ["Drupal", "CMS", "Web Maintenance"],
      file: "/docs/Draf Laporan Hasil Update WEB Fakultas (Drupal) - ANDREAS JOAN RAMIEL.pdf",
      icon: "fa-laptop-code"
    },
    {
      id: 3,
      title: "CBT System Preparation",
      description: "Dukungan teknis dan persiapan infrastruktur untuk pelaksanaan Computer Based Test (CBT) di lingkungan kampus UNY.",
      tags: ["CBT", "Technical Support", "Infrastructure"],
      file: "/docs/Draf Laporan Hasil Persiapan CBT Kampus UNY - ANDREAS JOAN RAMIEL.pdf",
      icon: "fa-server"
    },
    {
      id: 4,
      title: "Lab Computer Maintenance",
      description: "Instalasi perangkat lunak (Prolingo), pengujian sistem, dan troubleshooting masalah pada PC DELL di Laboratorium Komputer.",
      tags: ["Troubleshooting", "Hardware", "Software Install"],
      file: "/docs/Draf Laporan Hasil Install Prolingo dan Trouble Shoot PC DELL labkom - ANDREAS JOAN RAMIEL.pdf",
      icon: "fa-screwdriver-wrench"
    },
    {
      id: 5,
      title: "Floor Plan & Wayfinding Design",
      description: "Pembuatan desain layout denah ruangan dan papan penunjuk arah untuk menunjang kegiatan Uji Kompetensi.",
      tags: ["Graphic Design", "Layouting", "Wayfinding"],
      file: "/docs/Draf Laporan Hasil Membuat Desain Denah dan Penunjuk Arah Uji Kom - ANDREAS JOAN RAMIEL.pdf",
      icon: "fa-map-location-dot"
    },
    {
      id: 6,
      title: "System Config & User Management",
      description: "Konfigurasi user permission, penghapusan user non-admin, dan instalasi aplikasi Ujikom di Lab Komputer 1 dan 3.",
      tags: ["System Admin", "User Management", "Configuration"],
      file: "/docs/Draf Laporan Hasil Menginstal aplikasi Ujikom dan menghapus user non admin di labkom 1 dan 3 - ANDREAS JOAN RAMIEL.pdf",
      icon: "fa-users-gear"
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div className="bento-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="glass-card bento-item col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '36px', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ 
                  width: '44px', height: '44px', borderRadius: '10px', 
                  background: 'var(--bg-tertiary)', border: '1px solid var(--border-glass)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-primary)', fontSize: '1.2rem',
                }}>
                  <i className={`fas ${project.icon}`}></i>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-primary)', fontWeight: 600 }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1, fontSize: '0.95rem', lineHeight: 1.6 }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href={project.file} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-primary" 
                  style={{ flex: 1, padding: '10px 16px', fontSize: '0.85rem' }}
                >
                  <i className="fas fa-eye"></i> View
                </a>
                <a 
                  href={project.file} 
                  download
                  className="btn btn-outline" 
                  style={{ flex: 1, padding: '10px 16px', fontSize: '0.85rem' }}
                >
                  <i className="fas fa-download"></i> DL
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
