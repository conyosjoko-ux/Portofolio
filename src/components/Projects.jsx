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
      color: "#3b82f6", // Blue 500
      icon: "fa-network-wired"
    },
    {
      id: 2,
      title: "Faculty Website Management",
      description: "Pembaruan konten dan pemeliharaan website fakultas menggunakan sistem manajemen konten Drupal.",
      tags: ["Drupal", "CMS", "Web Maintenance"],
      file: "/docs/Draf Laporan Hasil Update WEB Fakultas (Drupal) - ANDREAS JOAN RAMIEL.pdf",
      color: "#10b981", // Emerald 500
      icon: "fa-laptop-code"
    },
    {
      id: 3,
      title: "CBT System Preparation",
      description: "Dukungan teknis dan persiapan infrastruktur untuk pelaksanaan Computer Based Test (CBT) di lingkungan kampus UNY.",
      tags: ["CBT", "Technical Support", "Infrastructure"],
      file: "/docs/Draf Laporan Hasil Persiapan CBT Kampus UNY - ANDREAS JOAN RAMIEL.pdf",
      color: "#8b5cf6", // Violet 500
      icon: "fa-server"
    },
    {
      id: 4,
      title: "Lab Computer Maintenance",
      description: "Instalasi perangkat lunak (Prolingo), pengujian sistem, dan troubleshooting masalah pada PC DELL di Laboratorium Komputer.",
      tags: ["Troubleshooting", "Hardware", "Software Install"],
      file: "/docs/Draf Laporan Hasil Install Prolingo dan Trouble Shoot PC DELL labkom - ANDREAS JOAN RAMIEL.pdf",
      color: "#f59e0b", // Amber 500
      icon: "fa-screwdriver-wrench"
    },
    {
      id: 5,
      title: "Floor Plan & Wayfinding Design",
      description: "Pembuatan desain layout denah ruangan dan papan penunjuk arah untuk menunjang kegiatan Uji Kompetensi.",
      tags: ["Graphic Design", "Layouting", "Wayfinding"],
      file: "/docs/Draf Laporan Hasil Membuat Desain Denah dan Penunjuk Arah Uji Kom - ANDREAS JOAN RAMIEL.pdf",
      color: "#f43f5e", // Rose 500
      icon: "fa-map-location-dot"
    },
    {
      id: 6,
      title: "System Config & User Management",
      description: "Konfigurasi user permission, penghapusan user non-admin, dan instalasi aplikasi Ujikom di Lab Komputer 1 dan 3.",
      tags: ["System Admin", "User Management", "Configuration"],
      file: "/docs/Draf Laporan Hasil Menginstal aplikasi Ujikom dan menghapus user non admin di labkom 1 dan 3 - ANDREAS JOAN RAMIEL.pdf",
      color: "#0ea5e9", // Sky 500
      icon: "fa-users-gear"
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Portofolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="glass-card bento-item col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: '12px', 
                  background: `linear-gradient(135deg, ${project.color}33, transparent)`,
                  border: `1px solid ${project.color}66`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: project.color, fontSize: '1.5rem',
                  boxShadow: `0 4px 15px ${project.color}22`
                }}>
                  <i className={`fas ${project.icon}`}></i>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-primary)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono" style={{ 
                    fontSize: '0.75rem', padding: '4px 10px', 
                    background: 'var(--bg-secondary)', borderRadius: '4px',
                    color: 'var(--text-secondary)'
                  }}>
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
                  style={{ flex: 1, padding: '10px 16px', fontSize: '0.9rem' }}
                >
                  <i className="fas fa-eye"></i> View
                </a>
                <a 
                  href={project.file} 
                  download
                  className="btn btn-outline" 
                  style={{ flex: 1, padding: '10px 16px', fontSize: '0.9rem' }}
                >
                  <i className="fas fa-download"></i> Download
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
