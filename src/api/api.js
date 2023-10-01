const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchMovies(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
  );
  const data = await response.json();
  return data.results;
}
