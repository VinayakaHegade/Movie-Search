import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.appDetailsContainer}>
        <img
          src="./video-camera.png"
          className={styles.appLogo}
          alt="Logo of the Movie Search App"
        />
        <h1 className={styles.appName}>Movie Search App</h1>
      </div>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
