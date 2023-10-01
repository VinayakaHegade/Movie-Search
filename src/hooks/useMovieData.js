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
          setError(
            "No movies found for your search. Please try again with a different query."
          );
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
