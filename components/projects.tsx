"use client";

import { motion } from "framer-motion";
import Simulator from "./simulator";

const projects = [
  {
    icon: "🏃‍♂️",
    name: "KitRun E-Commerce",
    role: "Full-Stack Web Developer",
    desc: "Developed a responsive e-commerce website for running gear. Implemented key features such as Login & Register, Admin Dashboard, Product CRUD operations, Shopping Cart, Checkout simulation, and User Management using local storage.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage", "Responsive Design"],
  },
  {
    icon: "🧠",
    name: "Image Classification App",
    role: "AI Engineer / Developer",
    desc: "Built a computer vision application utilizing CNN models (SqueezeNet, VGG19, and InceptionV3) to classify uploaded images, display prediction categories, and output probability scores via an interactive web interface.",
    tags: ["Python", "Streamlit", "TensorFlow", "PyTorch", "CNN Models"],
  },
  {
    icon: "📱",
    name: "iSeries — iPhone E-Commerce",
    role: "Front-End & Web Developer",
    desc: "Developed a responsive website displaying iPhone products from iPhone 6 to iPhone 16. Designed clean UI using HTML, CSS, and JavaScript. Built product catalog, product details, shopping cart, checkout simulation, and implemented role-based login system for Admin and Customer.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Auth System"],
  },
  {
    icon: "💳",
    name: "KasirQu — Mini Cashier App",
    role: "Mobile Developer",
    desc: "Developed a simple cashier application using Flutter and PocketBase. Created product management, transaction recording, and payment features. Integrated PocketBase as backend database with a clean and user-friendly mobile interface.",
    tags: ["Flutter", "PocketBase", "Mobile", "CRUD", "UI Design"],
  },
  {
    icon: "📊",
    name: "Mental Health Information System",
    role: "System Analyst & UI Designer",
    desc: "Designed Software Requirement Specification (SRS), Data Flow Diagram (DFD), Entity Relationship Diagram (ERD), Conceptual Data Model (CDM), and Physical Data Model (PDM). Conducted usability analysis and created interactive UI prototypes using Figma.",
    tags: ["Figma", "SRS", "ERD", "DFD", "UI/UX", "Prototyping"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">✦ Projects</span>
          <h2 className="section-title">Things I&apos;ve built</h2>
          <p className="section-subtitle">
            A selection of academic, personal, and AI projects that showcase my
            development skills.
          </p>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((p) => (
            <motion.div key={p.name} className="project-card" variants={cardVariants}>
              <div className="project-main">
                <div className="project-header-meta">
                  <div className="project-icon">{p.icon}</div>
                  <span className="project-role">{p.role}</span>
                </div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-action-btn">
                →
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Simulator />
        </motion.div>
      </div>
    </section>
  );
}
