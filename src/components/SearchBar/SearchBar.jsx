import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <img src="./search-icon.svg" className={styles.searchIcon} />
      <input
        value={searchQuery}
        onChange={handleSearchQueryChange}
        className={styles.searchInput}
        placeholder="Search Movie"
      />
    </div>
  );
};

export default SearchBar;
