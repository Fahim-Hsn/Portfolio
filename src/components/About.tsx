"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Trophy, Users } from "lucide-react";
import { useRef, useState } from "react";
import styles from "./About.module.css";

const TIMELINE = [
  {
    year: "2026",
    title: "BAIUST Transport NFC System",
    description:
      "Built and deployed an ESP32-based NFC smart authentication system for university transport, successfully managing daily check-ins for over 1,400+ students.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: "2025",
    title: "Lead Developer - Real-Time GPS Tracker",
    description:
      "Architected a live fleet tracking dashboard featuring real-time data streaming, anti-jitter filtering, advanced geofencing, and automated historical reporting.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    year: "2025",
    title: "Champion - Dataset & AI Model Challenge",
    description:
      "Finished 1st place in an intense 48-hour hackathon organized by BCC. Collaborated with a team to successfully build a custom dataset and train an AI model under high pressure.",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    year: "2025",
    title: "Software Eng. Intern & Project Coordinator",
    description:
      "Contributed to real-world projects at BAIUST Computer Club. Successfully coordinated a major technical initiative, providing hands-on mentorship to 17 development teams.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    year: "Expected 2027",
    title: "B.Sc. in Computer Science & Engineering",
    description:
      "3rd-year student at BAIUST (18th Batch). Specializing in hardware-software integration, embedded systems, and full-stack architecture.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.header}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gradient"
        >
          Experience & Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A brief look at my professional and academic timeline.
        </motion.p>
      </div>

      <div
        className={styles.treeContainer}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={
          {
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px`,
          } as React.CSSProperties
        }
      >
        {/* Central vertical trunk */}
        <div className={styles.centralLine} />

        {TIMELINE.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`${styles.treeBranch} ${isLeft ? styles.branchLeft : styles.branchRight}`}
            >
              {/* Connector line from trunk to the card */}
              <div className={styles.connectorLine} />

              {/* The icon sitting on the central line */}
              <div className={styles.timelineDot}>{item.icon}</div>

              <motion.div
                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={styles.timelineCard}
              >
                <div className={styles.cardBorder} />
                <div className={styles.cardContent}>
                  <span className={styles.year}>{item.year}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
