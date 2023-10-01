import { useEffect } from "react";
import { fetchMovies } from "../api/api";
import useDebounce from "./useDebounce";

const useMovieData = (searchValue, updateMovies, setError) => {
  const debouncedSearchValue = useDebounce(searchValue, 300);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchMovies(debouncedSearchValue);
        if (movies.length === 0) {
          const errorMessage =
            debouncedSearchValue.length > 20
              ? `No movies found for your search.`
              : `No movies found for "${debouncedSearchValue}".`;
          setError(errorMessage);
        } else {
          setError(null);
          updateMovies(movies);
        }
      } catch (error) {
        setError(`Failed to fetch movie data. ${error.message}`);
      }
    };

    if (debouncedSearchValue) {
      fetchData();
    }
  }, [debouncedSearchValue, updateMovies, setError]);
};

export default useMovieData;
