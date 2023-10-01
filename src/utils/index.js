export function formatRating(rating) {
  // Check if the rating is a whole number
  if (Number.isInteger(rating)) {
    return rating.toString();
  }

  // If the rating is not a whole number, round it to one decimal place
  return rating.toFixed(1);
}

export function extractYear(dateString) {
  // Extract the year from the date string
  return dateString.split("-")[0];
}

export const mapGenreIdsToNames = (genreIds) => {
  return genreIds
    .map((id) => GENRES.find((genre) => genre.id === id)?.name)
    .filter(Boolean)
    .join(", ");
};

export const formatMovieDetails = (movie) => {
  const languageNames = new Intl.DisplayNames(["en"], { type: "language" });

  return {
    img_src: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : "./image-not-found.png",
    year: movie.release_date ? extractYear(movie.release_date) : "N/A",
    rating: movie.vote_average
      ? `${formatRating(movie.vote_average)} / 10`
      : "N/A",
    language: movie.original_language
      ? languageNames.of(movie.original_language)
      : "N/A",
    original_title: movie.original_title ? movie.original_title : "N/A",
    overview: movie.overview ? movie.overview : "N/A",
    genres: movie.genre_ids ? mapGenreIdsToNames(movie.genre_ids) : "N/A",
    release_date: movie.release_date ? movie.release_date : "N/A",
    popularity: movie.popularity ? formatRating(movie.popularity) : "N/A",
    adult: movie.adult === undefined ? "N/A" : movie.adult ? "Yes" : "No",
    votes: movie.vote_count ? movie.vote_count : "N/A",
  };
};

export const GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];
