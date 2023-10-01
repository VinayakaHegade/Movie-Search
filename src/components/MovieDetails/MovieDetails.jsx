import { useEffect, useRef } from "react";

import { moviePropType } from "../../propTypes";
import { formatMovieDetails } from "../../utils";
import styles from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
  const details = formatMovieDetails(movie);

  const movieDetailsRef = useRef(null);

  useEffect(() => {
    if (movieDetailsRef.current) {
      movieDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [movie]);

  return (
    <section className={styles.movieDetailsContainer} ref={movieDetailsRef}>
      <img
        src={details.img_src}
        className={styles.movieDetailsImage}
        alt={
          movie.title
            ? `Poster for ${movie.title}`
            : "Movie poster not available"
        }
      />
      <section className={styles.movieData}>
        <h4 className={styles.movieTitle}>
          Movie : {movie.title || "Title not available"}
        </h4>
        <p className={styles.movieDataItem}>
          Year : <span>{details.year}</span>
        </p>
        <p className={styles.movieDataItem}>
          Rating : <span>{details.rating}</span>
        </p>
        <p className={styles.movieDataItem}>
          Language : <span>{details.language}</span>
        </p>
        <p className={styles.movieDataItem}>
          Original title : <span>{details.original_title}</span>
        </p>
        <p className={styles.movieDataItem}>
          Overview : <span>{details.overview}</span>
        </p>
        <p className={styles.movieDataItem}>
          Genre : <span>{details.genres}</span>
        </p>
        <p className={styles.movieDataItem}>
          Release Date : <span>{details.release_date}</span>
        </p>
        <p className={styles.movieDataItem}>
          Popularity : <span>{details.popularity}</span>
        </p>
        <p className={styles.movieDataItem}>
          Adult : <span>{details.adult}</span>
        </p>
        <p className={styles.movieDataItem}>
          Votes : <span>{details.votes}</span>
        </p>
      </section>
    </section>
  );
};

MovieDetails.propTypes = {
  movie: moviePropType,
};

export default MovieDetails;
