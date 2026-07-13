"use client";

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

import { useState } from 'react';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 1,
    title: "BAIUST Transport Card Scanner - NFC",
    description: "An edge-computed NFC authentication system deployed to validate daily transit access for over 1,400 students via a custom-enclosed, localized hardware terminal.",
    tech: ["Microcontroller", "Captive portal", "MicroSD", "UART", "I2C", "SPI", "NFC", "SQLite", "Offline App", "3D Printing"],
    year: "May 2026",
    image: "/scanner.png",
    live: "https://baiust.arektatransport.com/"
  },
  {
    id: 2,
    title: "Real-Time GPS Tracker",
    description: "A low-latency, end-to-end asset monitoring solution that pairs custom PCB hardware with a real-time web dashboard.",
    tech: ["Microcontroller", "MQTT", "PCB Design", "GPS", "GSM", "React", "SQLite", "IoT"],
    year: "September 2025",
    image: "/gps_tracker.png",
    live: "https://baiust.arektatransport.com/"
  },
  {
    id: 3,
    title: "SmartPass Campus - RFID",
    description: "An end-to-end RFID access control ecosystem that bridges edge hardware with a full-stack web application via MQTT, delivering secure, real-time identity verification and centralized database management.",
    tech: ["Microcontroller", "RFID", "I2C", "MQTT", "JWT", "MongoDB", "Node.js"],
    year: "December 2024",
    image: "/rfid.png",
    live: "#"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    y: -15,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)",
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const handleToggleShow = () => {
    if (showAll) {
      setShowAll(false);
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setShowAll(true);
    }
  };

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="text-gradient">Featured Projects</h2>
          <p>Discover my recent work, where embedded systems meet modern web architectures.</p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`${styles.card} glass-panel`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImg} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.titleRow}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.projectYear}>{project.year}</span>
                </div>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardActions}>
                <Link href={`/project/${project.id}`} className={styles.readMoreBtn}>
                  Read More
                  <ExternalLink size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.seeMoreWrapper}>
          <button onClick={handleToggleShow} className={styles.seeMoreBtn}>
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      </div>
    </section>
  );
}
