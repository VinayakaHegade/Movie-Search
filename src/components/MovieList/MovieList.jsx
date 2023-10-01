import PropTypes from "prop-types";
import { moviePropType } from "../../propTypes";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

const MovieList = ({ movies, error }) => {
  return (
    <main className={styles.movieListContainer}>
      {error ? (
        <p className={styles.error}>{error}</p>
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
