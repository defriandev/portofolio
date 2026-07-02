"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const info = [
  { label: "University", value: "Universitas Airlangga" },
  { label: "Major", value: "Informatics Engineering" },
  { label: "GPA", value: "3.00 / 4.00" },
  { label: "Expected Grad", value: "Aug 2027" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">✦ About Me</span>
          <h2 className="section-title">Get to know me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-photo-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/profile.png"
              alt="Defrian Bagus Dewanta Putra"
              width={280}
              height={280}
              className="about-photo"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="about-text">
              I&apos;m an Informatics Engineering student at Universitas
              Airlangga, Surabaya. Experienced in developing academic and
              personal projects using <strong>Laravel, Flutter, HTML, CSS,
              JavaScript, PHP, and MySQL</strong>. Passionate about building
              user-friendly applications, solving problems through technology,
              and continuously improving technical and teamwork skills.
            </p>
            <p className="about-text">
              Selected as the 2023 Class Vice Representative to manage
              student-faculty communications while successfully developing
              comprehensive tech projects, spanning microservices backend,
              full-stack web/mobile apps with AI integration, cloud computing,
              cybersecurity implementation, and rigorous QA testing.
            </p>

            <div className="about-info-grid">
              {info.map((item) => (
                <div key={item.label} className="about-info-item">
                  <span className="about-info-label">{item.label}</span>
                  <span className="about-info-value">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
