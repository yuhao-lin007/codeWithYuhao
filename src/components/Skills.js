import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaRocket,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiNextdotjs,
  SiScala,
  SiPhp,
  SiDjango,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, level: 85 },
        { name: "Java", icon: <FaCode />, level: 80 },
        { name: "JavaScript", icon: <FaJs />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript />, level: 80 },
        { name: "C", icon: <FaCode />, level: 75 },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
        { name: "React", icon: <FaReact />, level: 80 },
        { name: "PHP", icon: <SiPhp />, level: 70 },
        { name: "HTML/CSS", icon: <FaHtml5 />, level: 90 },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "SQL", icon: <FaDatabase />, level: 80 },
        { name: "Git", icon: <FaGitAlt />, level: 85 },
        { name: "VS Code", icon: <FaCode />, level: 90 },
        { name: "Figma", icon: <FaCode />, level: 75 },
      ],
    },
    {
      title: "AI & Frameworks",
      skills: [
        { name: "Django", icon: <SiDjango />, level: 70 },
        { name: "EasyOCR", icon: <FaCode />, level: 75 },
        { name: "Computer Vision", icon: <FaCode />, level: 75 },
        { name: "Scala", icon: <SiScala />, level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Skills & Technologies</h2>
          <p>My technical expertise and tools I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="skill-category"
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-item"
                  >
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="skill-progress"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="additional-skills"
        >
          <h3>Additional Skills & Knowledge</h3>
          <div className="skills-tags">
            {[
              "Stripe Integration",
              "PayPal API",
              "TailwindCSS",
              "Object-Oriented Design",
              "Database Management",
              "API Development",
              "Testing",
              "Code Review",
              "Software Development Methodologies",
              "Thread Synchronization",
              "Multi-threading",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="skill-tag"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
