import styles from "./Navigation.module.css";
import classNames from "classnames";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  const changeLanguage = (language: "en" | "ru") => {
    void i18n.changeLanguage(language);
  };

  return (
    <nav className={styles.wrapper} aria-label={t("navigation.ariaLabel")}>
      <NavLink to="/" className={styles.title}>
        PETPROJECT
      </NavLink>
      <div className={styles.navLinks}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            classNames(styles.navLink, { [styles.active]: isActive })
          }
        >
          {t("navigation.home")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            classNames(styles.navLink, { [styles.active]: isActive })
          }
        >
          {t("navigation.about")}
        </NavLink>
      </div>
      <div
        className={styles.languageSwitcher}
        aria-label={t("navigation.languageSwitcher")}
      >
        <button
          type="button"
          className={classNames(styles.languageButton, {
            [styles.languageButtonActive]: currentLanguage === "en",
          })}
          onClick={() => changeLanguage("en")}
          aria-label={t("navigation.english")}
          aria-pressed={currentLanguage === "en"}
        >
          EN
        </button>
        <button
          type="button"
          className={classNames(styles.languageButton, {
            [styles.languageButtonActive]: currentLanguage === "ru",
          })}
          onClick={() => changeLanguage("ru")}
          aria-label={t("navigation.russian")}
          aria-pressed={currentLanguage === "ru"}
        >
          RU
        </button>
      </div>
    </nav>
  );
}
