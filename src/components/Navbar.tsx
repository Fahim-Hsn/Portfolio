"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`${styles.navbar} glass-panel`}>
      <div className={styles.logo}>
        <Link href="/">
          <span className="text-gradient" style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '1.5rem' }}>
            FH.
          </span>
        </Link>
      </div>
      
      <ul className={styles.navLinks}>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#about">Experience</Link></li>
        <li>
          <Link href="/resume">
            View Resume
          </Link>
        </li>
      </ul>

      <div className={styles.socialLinks}>
        <Link href="https://github.com/Fahim-Hsn" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </Link>
        <Link href="https://www.linkedin.com/in/fahimhsn/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </Link>
        <Link href="mailto:fahimhsn24@gmail.com" className={styles.desktopMail}>
          <Mail size={20} />
        </Link>
        <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            <li><Link href="#skills" onClick={closeMenu}>Skills</Link></li>
            <li><Link href="#projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link href="#about" onClick={closeMenu}>Experience</Link></li>
            <li>
              <Link href="/resume" onClick={closeMenu} className={styles.mobileResumeBtn}>
                View Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
