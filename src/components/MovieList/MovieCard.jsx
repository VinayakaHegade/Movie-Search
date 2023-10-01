import PropTypes from "prop-types";
import { moviePropType } from "../../propTypes";
import { extractYear, formatRating } from "../../utils";
import styles from "./MovieList.module.css";

const MovieCard = ({ movie, setMovie }) => {
  const year = movie.release_date ? extractYear(movie.release_date) : "N/A";
  const rating = movie.vote_average ? formatRating(movie.vote_average) : "N/A";

  const handleClick = () => {
    setMovie(movie);
  };

  return (
    <section
      className={styles.movieCard}
      onClick={handleClick}
      role="button"
      aria-label="Select this movie"
    >
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "./image-not-found.png"
        }
        className={styles.movieCardImage}
        alt={movie.title || "Movie poster not available"}
      />
      <div className={styles.movieCardDetails}>
        <h4 className={styles.movieTitle}>
          {movie.title || "Title not available"}
        </h4>
        <div className={styles.movieData}>
          <p className={styles.movieDataItem}>Year : {year}</p>
          <p className={styles.movieDataItem}>Rating : {rating} / 10</p>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  movie: moviePropType.isRequired,
  setMovie: PropTypes.func.isRequired,
};

export default MovieCard;
