import { moviePropType } from "../../propTypes";
import { formatRating, extractYear } from "../../utils";
import styles from "./MovieList.module.css";

const MovieCard = ({ movie }) => {
  const year = extractYear(movie.release_date);
  const rating = formatRating(movie.vote_average);

  return (
    <section className={styles.movieCard}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className={styles.movieCardImage}
        alt={movie.title}
      />
      <div className={styles.movieCardDetails}>
        <h4 className={styles.movieTitle}>{movie.title}</h4>
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
