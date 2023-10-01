import { moviePropType } from "../../propTypes";
import { extractYear, formatRating } from "../../utils";
import styles from "./MovieList.module.css";

const MovieCard = ({ movie }) => {
  const year = movie.release_date ? extractYear(movie.release_date) : "N/A";
  const rating = movie.vote_average ? formatRating(movie.vote_average) : "N/A";

  return (
    <section className={styles.movieCard}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "./image-not-found.png"
        }
        className={styles.movieCardImage}
        alt={movie.title || "Title not available"}
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
};

export default MovieCard;
