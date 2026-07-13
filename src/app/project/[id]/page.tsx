import Link from 'next/link';
import { ExternalLink, ArrowLeft, Briefcase, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

const PROJECTS = [
  {
    id: 1,
    title: "BAIUST Transport Card Scanner - NFC",
    pitch: "An edge-computed NFC authentication system deployed to validate daily transit access for over 1,400 students via a custom-enclosed, localized hardware terminal.",
    description: "Campus transport infrastructure often suffers from boarding bottlenecks due to slow, manual authentication methods. To solve this, this project introduces a standalone authentication terminal featuring an integrated NFC module for instantaneous student ID validation. The system operates completely decoupled from the cloud, utilizing an offline mobile application and a localized SQLite database to log transit records instantly. A high-level design (HLD) orchestrates the firmware architecture, incorporating a local captive portal for administrative data extraction and device configuration, all housed within a rugged, custom-designed 3D enclosure.",
    achievements: [
      { title: "Offline Storage Optimization", desc: "Designed a localized database architecture using an optimized SQLite instance on the edge terminal, achieving sub-second card verification latency and reliable transaction logging without relying on active cloud connectivity." },
      { title: "Firmware & Network Engineering", desc: "Programmed a secure, standalone captive portal hosted directly on the microcontroller chip, streamlining offline device configuration, system diagnostics, and local administrative data synchronization." },
      { title: "Ergonomic & Structural Design", desc: "Modeled and fabricated a custom 3D-printed enclosure tailored for high-traffic environments, ensuring component structural integrity, proper heat dissipation, and optimal NFC antenna placement for fast user interaction." },
      { title: "High-Throughput Production Deployment", desc: "Successfully deployed the physical terminal infrastructure to seamlessly process over 1,400+ student transactions daily, maintaining 100% operational uptime during peak campus transit hours." }
    ],
    tech: ["Microcontroller", "Captive portal", "MicroSD", "UART", "I2C", "SPI", "NFC", "SQLite", "Offline App", "3D Printing"],
    github: "https://github.com/Fahim-Hsn",
    live: "https://baiust.arektatransport.com/",
    image: "/scanner.png",
  },
  {
    id: 2,
    title: "Real-Time GPS Tracker",
    pitch: "A low-latency, end-to-end asset monitoring solution that pairs custom PCB hardware with a real-time web dashboard.",
    description: "To address the need for cost-effective and autonomous fleet management, this project realizes a complete IoT ecosystem from hardware-level execution to frontend data visualization. The system architecture utilizes a dedicated microcontroller integrated with GPS and GSM modules on a custom-designed PCB to acquire geo-coordinates and transmit them via cellular networks. On the software side, a robust High-Level Design (HLD) orchestrates data ingestion into an optimized SQLite database, driving a responsive React dashboard that renders real-time asset paths seamlessly.",
    achievements: [
      { title: "Hardware & PCB Architecture", desc: "Engineered and routed a custom PCB integrating a core microcontroller chip with GPS and GSM modules, successfully stabilizing cellular telemetry and power distribution for continuous field operation." },
      { title: "Telemetry Data Pipeline", desc: "Formulated a reliable high-level design (HLD) to manage the data lifecycle, ensuring raw NMEA location strings are parsed efficiently at the edge before transmission via GSM networks." },
      { title: "Full-Stack Integration & Storage", desc: "Implemented a lightweight backend using an optimized SQLite database to handle rapid location write-logs, fueling a live React dashboard that delivers real-time coordinate rendering with minimal stream latency." }
    ],
    tech: ["Microcontroller", "MQTT", "PCB Design", "GPS", "GSM", "React", "SQLite", "IoT"],
    github: "https://github.com/Fahim-Hsn",
    live: "https://baiust.arektatransport.com/",
    image: "/gps_tracker.png",
  },
  {
    id: 3,
    title: "SmartPass Campus - RFID",
    pitch: "An end-to-end RFID access control ecosystem that bridges edge hardware with a full-stack web application via MQTT, delivering secure, real-time identity verification and centralized database management.",
    description: "Developed as a comprehensive web technology and database management sessional initiative, this project modernizes campus access by integrating physical hardware with cloud-based administrative services. A dedicated microcontroller reads RFID tags via the I2C protocol and transmits instantaneous scan telemetry to a centralized backend using lightweight MQTT messaging. The system features a custom-built, secure web dashboard utilizing JWT authentication, allowing administrators to execute seamless CRUD operations against a MongoDB database. The entire hardware array was protected within a custom enclosure, and the software lifecycle was driven by structured Agile and Waterfall methodologies in a collaborative team environment.",
    achievements: [
      { title: "Hardware Interfacing & Telemetry", desc: "Engineered the physical access terminal by interfacing a microcontroller with an RFID module via I2C, transmitting low-latency scan data to the backend infrastructure using MQTT protocols." },
      { title: "Full-Stack Web Security", desc: "Architected an administrative web portal secured by JWT authentication, ensuring that administrative access and sensitive student access logs were heavily protected against unauthorized entry." },
      { title: "Database Management & API Design", desc: "Implemented robust backend architecture to handle comprehensive CRUD (Create, Read, Update, Delete) operations, utilizing MongoDB to efficiently index and query daily access logs and user credentials." },
      { title: "Structured Team Delivery", desc: "Managed the end-to-end project lifecycle within a collaborative team setting, applying a hybrid of Agile and Waterfall methodologies to align hardware deployment, custom enclosure fabrication, and software milestones." }
    ],
    tech: ["Microcontroller", "RFID", "I2C", "MQTT", "JWT", "MongoDB", "Node.js"],
    github: "#",
    live: "#",
    image: "/rfid.png",
  },
  {
    id: 4,
    title: "E-Commerce Microservices Platform",
    pitch: "A scalable backend architecture built with Node.js and Docker, separating features into highly available microservices.",
    description: "A scalable backend architecture built with Node.js and Docker, splitting standard e-commerce features into independent, highly available microservices. Employs modern message queues for service communication and databases for quick retrieval.",
    achievements: [
      { title: "Microservice Orchestration", desc: "Containerized separate services using Docker Compose, decoupling authentication, catalog search, cart actions, and checkout processes." },
      { title: "Asynchronous Message Queues", desc: "Used RabbitMQ to handle task queues and process long-running jobs like invoice generation and email notifications asynchronously." }
    ],
    tech: ["Node.js", "Docker", "RabbitMQ", "MongoDB", "Redis"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
  }
];

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECTS.find(p => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.projectPage}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Link href="/#projects" className={styles.backBtn}>
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>

        <article className={`${styles.card} glass-panel`}>
          <div className={styles.imageContainer}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{project.title}</h1>

            {/* The Pitch Callout */}
            <div className={styles.pitchBlock}>
              <p className={styles.pitchText}>{project.pitch}</p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.description}>{project.description}</p>
            </div>

            {project.achievements && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Key Technical Achievements</h2>
                <div className={styles.achievementsList}>
                  {project.achievements.map((ach, i) => (
                    <div key={i} className={styles.achievementCard}>
                      <div className={styles.achievementBadge}>
                        <span>{i + 1}</span>
                      </div>
                      <div className={styles.achievementContent}>
                        <h3 className={styles.achievementTitle}>{ach.title}</h3>
                        <p className={styles.achievementDesc}>{ach.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project Details Footer */}
          <div className={styles.projectFooter}>
            <div className={styles.footerGrid}>

              <div className={styles.footerGroup}>
                <div className={styles.groupHeader}>
                  <Briefcase size={16} className={styles.groupIcon} />
                  <span className={styles.footerLabel}>Role</span>
                </div>
                <span className={styles.footerValue}>Lead Engineer</span>
              </div>

              <div className={styles.footerGroup}>
                <div className={styles.groupHeader}>
                  <Cpu size={16} className={styles.groupIcon} />
                  <span className={styles.footerLabel}>Technologies</span>
                </div>
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.footerActions}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                  <FaGithub size={18} />
                  Source Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>

            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
