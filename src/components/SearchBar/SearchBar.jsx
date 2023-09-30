import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import styles from "./SearchBar.module.css";

const apiKey = import.meta.env.VITE_API_KEY;

const SearchBar = ({ setMovies }) => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${debouncedSearchValue}&api_key=${apiKey}`
        );
        const data = await response.json();
        console.log(data.results)
        setMovies(data?.results);
      } catch (error) {
        console.error("Failed to fetch movie data: ", error);
      }
    };

    if (debouncedSearchValue) {
      fetchMovieData();
    }
  }, [debouncedSearchValue, setMovies]);

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
  setMovies: PropTypes.func.isRequired,
};

export default SearchBar;
