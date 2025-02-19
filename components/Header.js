import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <Image 
            src="/descope-logo-dark.png" 
            alt="Descope Logo" 
            width={120}
            height={60}
            className={styles.logo}
          />
          <h1 className={styles.title}>Netlify Example</h1>
        </div>
        <nav className={styles.nav}>
          <a 
            href="https://docs.descope.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            Descope Docs
          </a>
          <a 
            href="https://github.com/descope-sample-apps/descope-netlify-template" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
