import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.column}>
          <Link to="/" className={styles.brand}>
            PETPROJECT
          </Link>
          <p className={styles.text}>{t("footer.description")}</p>
        </div>
        <nav
          className={styles.columnLinks}
          aria-label={t("footer.navigationAriaLabel")}
        >
          <p className={styles.navigationTitle}>
            {t("footer.navigationTitle")}
          </p>

          <ul className={styles.links}>
            <li>
              <Link to="/about" className={styles.link}>
                {t("footer.about")}
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>
                {t("footer.compass")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.copyright}>
        <p className={styles.copyrightText}>
          © {currentYear}
        </p>
      </div>
    </footer>
  );
}
