import { useState } from "react";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import EmptyState from "./components/EmptyState/EmptyState"; // Import the EmptyState component

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  return (
    <>
      <Header>
        <SearchBar updateMovies={setMovies} setError={setError} setMovie={setMovie} />
      </Header>
      {movie && <MovieDetails movie={movie} />}
      {movies.length === 0 ? (
        <EmptyState />
      ) : (
        <MovieList movies={movies} error={error} setMovie={setMovie} />
      )}
    </>
  );
}

export default App;
