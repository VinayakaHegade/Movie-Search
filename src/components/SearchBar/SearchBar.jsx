import PropTypes from "prop-types";
import { useState } from "react";
import useMovieData from "../../hooks/useMovieData";
import styles from "./SearchBar.module.css";

const SearchBar = ({ updateMovies, setError }) => {
  const [searchValue, setSearchValue] = useState("");
  useMovieData(searchValue, updateMovies, setError);

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <img
        src="./search-icon.svg"
        className={styles.searchIcon}
        alt="Icon for search"
      />
      <input
        value={searchValue}
        onChange={handleSearchInputChange}
        className={styles.searchInput}
        placeholder="Search Movie"
      />
    </div>
  );
};

SearchBar.propTypes = {
  updateMovies: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default SearchBar;
