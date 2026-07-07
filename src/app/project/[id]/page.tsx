import Link from 'next/link';
import { ExternalLink, ArrowLeft, Briefcase, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

const PROJECTS = [
  {
    id: 1,
    title: "Real-Time GPS Tracking System",
    description: "A comprehensive high-performance web dashboard that integrates live GPS data via WebSockets for real-time fleet management. Includes historical route playback, geofencing alerts, and analytics.",
    tech: ["React", "Node.js", "WebSockets", "MongoDB", "Express", "Google Maps API"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
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
    github: "#",
    live: "#",
    image: "/gps_tracker.png",
  },
  {
    id: 3,
    title: "NFC Smart Authentication Portal",
    pitch: "A secure, contactless authentication system integrating custom NFC hardware with a modern web portal.",
    description: "A highly secure, contactless authentication system integrating custom NFC hardware with a modern web administration portal for seamless access control and auditing. Ideal for physical security compliance and quick user authentication.",
    achievements: [
      { title: "NFC Reader Integration", desc: "Connected and programmed embedded NFC readers to safely transmit encrypted cryptographic keys via contactless taps." },
      { title: "Real-time Auditing Portal", desc: "Created a modern administration dashboard to monitor scans, inspect entry logs, and update authorization states instantaneously." }
    ],
    tech: ["React Native", "Express", "PostgreSQL", "NFC", "Redis"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop"
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
