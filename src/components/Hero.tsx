"use client";

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Dynamic Background Elements */}
      <div className={styles.bgElements}>
        <motion.div 
          className={`${styles.orb} ${styles.orb1}`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={`${styles.orb} ${styles.orb2}`}
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.content}
        >
          <motion.h2 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm Fahim Hossain
          </motion.h2>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building <span className="text-gradient">Real-Time</span><br />
            <span className={styles.outlineText}>Systems</span> & Interactive<br />
            Web Experiences.
          </motion.h1>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Transforming complex ideas into functional realities. I specialize in seamless hardware-software integration, robust database architectures, and real-time data processing to deliver smart, scalable solutions.
          </motion.p>

          <motion.div 
            className={styles.ctaWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#projects" className={styles.primaryBtn}>
              Explore My Work
              <ArrowRight size={18} className={styles.btnIcon} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
