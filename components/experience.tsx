"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    date: "Jan 2025 — Dec 2025",
    title: "Head of Human Resource Development (PSDM)",
    org: "University Airlangga",
    role: "Leader",
    points: [
      "Led the Human Resource Division and coordinated organizational work programs.",
      "Planned member development activities, leadership training, and internal evaluations.",
      "Managed coordination among division members to improve teamwork and organizational performance.",
      "Collaborated with the executive board to support strategic organizational objectives.",
    ],
  },
  {
    date: "Apr 2024",
    title: "Inisialisasi HIMTI",
    org: "University Airlangga",
    role: "Program Coordinator",
    points: [
      "Led the planning and execution of the orientation program for new Informatics Engineering students.",
      "Coordinated multiple committees to ensure all activities were completed according to schedule.",
      "Managed event flow, task delegation, and communication between organizers and participants.",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">✦ Experience</span>
          <h2 className="section-title">Leadership &amp; Organizations</h2>
          <p className="section-subtitle">
            Organizational experiences that shaped my leadership and teamwork
            skills.
          </p>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {experiences.map((exp) => (
            <motion.div key={exp.title} className="timeline-item" variants={itemVariants}>
              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-org">{exp.org}</p>
              <p className="timeline-role">{exp.role}</p>
              <ul className="timeline-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
