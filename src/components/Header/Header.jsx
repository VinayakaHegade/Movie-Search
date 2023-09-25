import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.appDetailsContainer}>
        <img src="./video-camera.png" className={styles.appLogo}></img>
        <h1 className={styles.appName}>Movie Search App</h1>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
