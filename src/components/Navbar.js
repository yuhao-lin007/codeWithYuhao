import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="nav-container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="nav-logo"
          onClick={() => scrollToSection("hero")}
        >
          <span>YL</span>
        </motion.div>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <motion.a
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection("about")}
          >
            About
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </motion.a>
        </div>

        <div className="nav-actions">
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </motion.button>
          )}
          <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
