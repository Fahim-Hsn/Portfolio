"use client";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Database, Layout, Server, Cpu, Globe,
  Boxes, Layers, Network, Terminal, Shield, Zap,
  MonitorSmartphone, HardDrive, Wrench, Settings
} from 'lucide-react';
import styles from './SkillsGalaxy.module.css';

const SKILL_TREE = [
  {
    id: "iot",
    title: "Hardware & IoT",
    icon: <Cpu className="w-6 h-6" />,
    skills: [
      { name: "ESP32 & Raspberry Pi", description: "Microcontroller & Single Board", icon: <Cpu className="w-5 h-5" /> },
      { name: "IoT & Automation", description: "Connected Devices", icon: <Network className="w-5 h-5" /> },
      { name: "C & C++", description: "Embedded Systems", icon: <Code2 className="w-5 h-5" /> },
      { name: "MQTT & WebSockets", description: "Real-time", icon: <Zap className="w-5 h-5" /> },
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: <MonitorSmartphone className="w-6 h-6" />,
    skills: [
      { name: "React", description: "UI Library", icon: <Layout className="w-5 h-5" /> },
      { name: "Next.js", description: "React Framework", icon: <Globe className="w-5 h-5" /> },
      { name: "TypeScript", description: "Type Safety", icon: <Code2 className="w-5 h-5" /> },
    ]
  },
  {
    id: "backend",
    title: "Backend & DB",
    icon: <HardDrive className="w-6 h-6" />,
    skills: [
      { name: "Node.js", description: "JS Runtime", icon: <Server className="w-5 h-5" /> },
      { name: "Express", description: "Web Framework", icon: <Terminal className="w-5 h-5" /> },
      { name: "MongoDB", description: "NoSQL DB", icon: <Database className="w-5 h-5" /> },
      { name: "SQLite", description: "Relational DB", icon: <Layers className="w-5 h-5" /> },
    ]
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Docker", description: "Containers", icon: <Boxes className="w-5 h-5" /> },
      { name: "PlatformIO", description: "IoT IDE", icon: <Settings className="w-5 h-5" /> },
      { name: "Vercel", description: "Deployment", icon: <Shield className="w-5 h-5" /> },
    ]
  }
];

export default function SkillsTree() {
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
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.header}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gradient"
        >
          Skill Tree
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The architecture of my technical expertise.
        </motion.p>
      </div>

      <div
        className={styles.treeContainer}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties}
      >
        {/* Central vertical line */}
        <div className={styles.centralLine} />

        {SKILL_TREE.map((category, catIndex) => {
          const isLeft = catIndex % 2 === 0;

          return (
            <div
              key={category.id}
              className={`${styles.treeBranch} ${isLeft ? styles.branchLeft : styles.branchRight}`}
            >
              {/* Connector from central line to category */}
              <div className={styles.connectorLine} />

              <motion.div
                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={styles.categoryNode}
              >
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h3>{category.title}</h3>
              </motion.div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + (skillIndex * 0.1) }}
                    className={styles.skillCard}
                  >
                    <div className={styles.cardBorder} />
                    <div className={styles.cardContent}>
                      <div className={styles.iconWrapper}>
                        {skill.icon}
                      </div>
                      <div className={styles.textWrapper}>
                        <h4>{skill.name}</h4>
                        <p>{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
