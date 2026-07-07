"use client";

import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, handle form submission here
    alert("Message sent! (Demo)");
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gradient">Let's Connect</h2>
          <p>Ready to build something amazing? Drop a message.</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={`${styles.formContainer} glass-panel`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required placeholder="John Doe" />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required placeholder="john@example.com" />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} required placeholder="Hello..."></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <Send size={18} className={styles.btnIcon} />
              </button>
            </form>
          </motion.div>

          <motion.div 
            className={styles.socialInfo}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3>Find me online</h3>
            <p>I'm always open to discussing product design work or partnership opportunities.</p>
            
            <div className={styles.socialLinks}>
              <a href="https://github.com/Fahim-Hsn" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/fahimhsn/" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:fahimhsn24@gmail.com" className={styles.socialBtn}>
                <Mail size={24} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Fahim Hossain. All rights reserved.</p>
      </div>
    </section>
  );
}
