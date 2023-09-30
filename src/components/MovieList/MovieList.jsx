import { moviePropType } from "../../propTypes";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";
import PropTypes from "prop-types";

const MovieList = ({ movies }) => {
  return (
    <main className={styles.movieListContainer}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(moviePropType).isRequired,
};

export default MovieList;
