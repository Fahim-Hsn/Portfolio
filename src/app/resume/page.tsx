import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';
import styles from './page.module.css';

export default function ResumePage() {
  return (
    <main className={styles.resumePage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.backBtn}>
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className={styles.titleWrapper}>
            <h1 className="text-gradient">My Resume</h1>
            <a href="/resume.pdf" download className={styles.downloadBtn}>
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </div>

        <div className={styles.pdfWrapper}>
          <div className={`${styles.pdfContainer} glass-panel`}>
            <object 
              data="/resume.pdf#view=FitH" 
              type="application/pdf" 
              className={styles.pdfViewer}
            >
              <div className={styles.fallback}>
                <p>It appears you don't have a PDF plugin for this browser.</p>
                <a href="/resume.pdf" download className={styles.fallbackBtn}>
                  Click here to download the PDF file.
                </a>
              </div>
            </object>
          </div>
        </div>
      </div>
    </main>
  );
}
