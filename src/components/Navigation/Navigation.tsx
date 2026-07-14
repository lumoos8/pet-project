import styles from "./Navigation.module.css";
import classNames from "classnames";
import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav className={styles.wrapper}>
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
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            classNames(styles.navLink, { [styles.active]: isActive })
          }
        >
          About
        </NavLink>
      </div>

      {/* <Link to="/concerts/salt-lake-city">Concerts</Link> */}
    </nav>
  );
}
