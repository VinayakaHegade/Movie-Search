import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import useDebounce from "../../hooks/useDebounce";

const apiKey = import.meta.env.VITE_API_KEY;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchValue = useDebounce(searchQuery, 300);

  const url = `https://api.themoviedb.org/3/search/movie?query=${debouncedSearchValue}&api_key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    };

    if (debouncedSearchValue) {
      fetchData();
    }
  }, [debouncedSearchValue, url]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <img
        src="./search-icon.svg"
        className={styles.searchIcon}
        alt="Search Icon"
      />
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
