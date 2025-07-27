import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description:
        "Expertise in Next.js, TypeScript, React, and modern web technologies with focus on e-commerce solutions.",
    },
    {
      icon: <FaLightbulb />,
      title: "AI & Machine Learning",
      description:
        "Experience with AI systems including Handwritten Text Recognition and computer vision applications.",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description:
        "Proven ability to work effectively in team environments through academic projects and professional experience.",
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description:
        "Passionate about creating innovative solutions and staying current with emerging technologies.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3>Who I Am</h3>
            <p>
              I'm a recent Computer Science graduate from University at Buffalo,
              School of Engineering and Applied Sciences, with a strong
              foundation in software development and a passion for creating
              innovative solutions.
            </p>
            <p>
              My academic journey has equipped me with expertise in full-stack
              development, AI systems, and e-commerce solutions. I've
              successfully built and deployed a comprehensive e-commerce
              platform and developed an AI Handwritten Recognition System,
              demonstrating my ability to work with cutting-edge technologies.
            </p>
            <p>
              I'm currently seeking opportunities to apply my skills in software
              development, where I can contribute to meaningful projects and
              continue growing as a developer in a professional environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-stats"
          >
            <div className="stat-item">
              <h4>4+</h4>
              <p>Years of Study</p>
            </div>
            <div className="stat-item">
              <h4>5+</h4>
              <p>Major Projects</p>
            </div>
            <div className="stat-item">
              <h4>8+</h4>
              <p>Programming Languages</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Project Completion</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="features-grid"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
