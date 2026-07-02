"use client";

import { motion } from "framer-motion";

const categories = [
  {
    icon: "🌐",
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "Laravel"],
  },
  {
    icon: "📱",
    name: "Mobile",
    skills: ["Flutter"],
  },
  {
    icon: "🗄️",
    name: "Backend & Database",
    skills: ["PHP", "MySQL", "PostgreSQL", "REST API", "PocketBase"],
  },
  {
    icon: "🎨",
    name: "Design & Tools",
    skills: ["Figma", "Git & GitHub", "Postman", "Microsoft Office"],
  },
  {
    icon: "🏆",
    name: "Certifications",
    skills: ["IBM Skill Cloud", "Cisco Netacad"],
  },
  {
    icon: "🤝",
    name: "Soft Skills",
    skills: [
      "Leadership",
      "Team Management",
      "Project Coordination",
      "Problem Solving",
      "Communication",
      "Critical Thinking",
      "Time Management",
      "Adaptability",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">✦ Skills</span>
          <h2 className="section-title">My toolkit</h2>
          <p className="section-subtitle">
            Technologies, tools, and soft skills I work with.
          </p>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.name} className="skill-category" variants={cardVariants}>
              <div className="skill-category-icon">{cat.icon}</div>
              <h3 className="skill-category-name">{cat.name}</h3>
              <div className="skill-list">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
