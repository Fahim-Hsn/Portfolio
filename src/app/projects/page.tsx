import Link from 'next/link';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './page.module.css';

const ALL_PROJECTS = [
  {
    id: 1,
    title: "Real-Time GPS Tracking System",
    description: "A comprehensive high-performance web dashboard that integrates live GPS data via WebSockets for real-time fleet management. Includes historical route playback, geofencing alerts, and analytics.",
    tech: ["React", "Node.js", "WebSockets", "MongoDB", "Express", "Google Maps API"],
    github: "#",
    live: "#",
    image: "/gps_tracker.png",
  },
  {
    id: 2,
    title: "AquaMate - IoT Water Quality Monitor",
    description: "An end-to-end IoT solution utilizing ESP32 microcontrollers to monitor water quality metrics (pH, turbidity, temperature) and stream telemetry data to a scalable cloud-based analytics platform.",
    tech: ["ESP32", "C++", "Next.js", "MQTT", "PostgreSQL", "Prisma"],
    github: "#",
    live: "#",
    image: "/aqua_mate.png",
  },
  {
    id: 3,
    title: "NFC Smart Authentication Portal",
    description: "A highly secure, contactless authentication system integrating custom NFC hardware with a modern web administration portal for seamless access control and auditing.",
    tech: ["React Native", "Express", "PostgreSQL", "NFC", "Redis"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "E-Commerce Microservices Platform",
    description: "A scalable backend architecture built with Node.js and Docker, splitting standard e-commerce features into independent, highly available microservices.",
    tech: ["Node.js", "Docker", "RabbitMQ", "MongoDB", "Redis"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ProjectsPage() {
  return (
    <main className={styles.projectsPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.backBtn}>
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-gradient">All Projects</h1>
          <p>A comprehensive look at my work, architecture, and code.</p>
        </div>

        <div className={styles.projectsList}>
          {ALL_PROJECTS.map((project) => (
            <div key={project.id} className={`${styles.projectCard} glass-panel`}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImg} />
              </div>

              <div className={styles.projectInfo}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>

                <div className={styles.cardActions}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                    <FaGithub size={18} />
                    <span>View Source</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
