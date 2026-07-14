import { Link } from "react-router";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.column}>
          <Link to="/" className={styles.brand}>
            PETPROJECT
          </Link>
          <p className={styles.text}>
            PetProject
          </p>
        </div>
        <nav className={styles.columnLinks} aria-label="Footer navigation">
          <p className={styles.navigationTitle}>NAVIGATE</p>

          <ul className={styles.links}>
            <li>
              <Link to="/about" className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>
                Compass
              </Link>
            </li>
          </ul>
        </nav>

    
      </div>

      <div className={styles.copyright}>
        <p className={styles.copyrightText}>
          © 2026
        </p>
      </div>
    </footer>
  );
}
