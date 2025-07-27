import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaGraduationCap,
} from "react-icons/fa";

const Experience = () => {
  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      institution:
        "University at Buffalo, School of Engineering and Applied Sciences",
      period: "August 2021 - May 2025",
      location: "Buffalo, NY",
      description:
        "Focused on software engineering, algorithms, and web development. Graduated with strong academic performance.",
      technologies: [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "SQL",
        "Git",
      ],
      achievements: [
        "Maintained strong academic performance throughout the program",
        "Completed multiple major projects including e-commerce platform and AI systems",
        "Developed expertise in full-stack development and modern web technologies",
      ],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A comprehensive e-commerce platform built with Next.js and TypeScript. Features secure authentication, Stripe/PayPal integration, and responsive UI with TailwindCSS.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "PayPal",
        "TailwindCSS",
      ],
      link: "https://nextshopadmin.com",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop&crop=center",
    },
    {
      title: "AI Handwritten Recognition System",
      description:
        "Developed a Handwritten Text Recognition (HTR) system using Python and EasyOCR with GUI interface for image processing and text recognition.",
      technologies: ["Python", "EasyOCR", "Computer Vision", "GUI"],
      link: "https://github.com/rzhang25/cse473project",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop&crop=center",
    },
    {
      title: "Decision-Making Blog Web Application",
      description:
        "A dynamic web application built with PHP and SQL, featuring backend database management and frontend user interface.",
      technologies: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/yuhao-lin007/decidophobia",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center",
    },
  ];

  const academicProjects = [
    {
      title: "Synchronization: Semaphores and Producer-Consumer Queues",
      description:
        "Developed concurrent queue (PCQueue) and custom semaphore library in C for thread-safe data sharing and synchronization.",
      technologies: ["C", "Multi-threading", "Thread Synchronization"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop&crop=center",
    },
    {
      title: "Rubik's Cube Game",
      description:
        "Designed a 3D game using arm assembly with character navigation and color-switching mechanics within a Rubik's Cube environment.",
      technologies: ["Assembly", "3D Graphics", "UART Communication"],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center",
    },
  ];

  const workExperience = [
    {
      title: "Student Assistant",
      company: "University at Buffalo, Department of Mathematics",
      period: "May 2024 - September 2024",
      location: "Buffalo, NY",
      description:
        "Provided excellent customer service and administrative support in a busy office environment.",
      achievements: [
        "Assisted students, faculty, and staff with administrative tasks",
        "Performed filing, copying, and data entry with accuracy and efficiency",
        "Effectively communicated with diverse groups of individuals",
      ],
    },
    {
      title: "Manager",
      company: "The Q Seafood Boil and Hotpot",
      period: "October 2023 - September 2024",
      location: "Buffalo, NY",
      description:
        "Coordinated staff schedules and monitored daily operations in a high-pressure restaurant environment.",
      achievements: [
        "Coordinated staff schedules to optimize coverage during peak hours",
        "Monitored daily operations to identify and address potential issues",
        "Exhibited leadership by strategically delegating tasks and ensuring team success",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Education & Experience</h2>
          <p>My academic background, projects, and professional experience</p>
        </motion.div>

        <div className="experience-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="experience-timeline"
          >
            <h3>Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="experience-item"
              >
                <div className="experience-header">
                  <div className="experience-title">
                    <h4>{edu.title}</h4>
                    <span className="company">{edu.institution}</span>
                  </div>
                  <div className="experience-meta">
                    <span className="period">
                      <FaCalendarAlt /> {edu.period}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt /> {edu.location}
                    </span>
                  </div>
                </div>
                <p className="experience-description">{edu.description}</p>
                <div className="experience-technologies">
                  {edu.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="experience-achievements">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <h3 style={{ marginTop: "3rem" }}>Work Experience</h3>
            {workExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="experience-item"
              >
                <div className="experience-header">
                  <div className="experience-title">
                    <h4>{exp.title}</h4>
                    <span className="company">{exp.company}</span>
                  </div>
                  <div className="experience-meta">
                    <span className="period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="projects-section"
          >
            <h3>Featured Projects</h3>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="project-card"
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Project <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 style={{ marginTop: "3rem" }}>Academic Projects</h3>
            <div className="projects-grid">
              {academicProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="project-card"
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Project <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
