import PropTypes from "prop-types";
import { moviePropType } from "../../propTypes";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

const MovieList = ({ movies, error }) => {
  return (
    <main className={styles.movieListContainer}>
      {error ? (
        <ErrorMessage
          errorMessage={error}
          actionMessage="Please try again with a different query."
        />
      ) : (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </main>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(moviePropType).isRequired,
  error: PropTypes.string,
};

export default MovieList;
