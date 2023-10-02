import { useState } from "react";
import EmptyState from "./components/EmptyState/EmptyState";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieList from "./components/MovieList/MovieList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  return (
    <>
      <Header>
        <SearchBar
          updateMovies={setMovies}
          setError={setError}
          setMovie={setMovie}
        />
      </Header>
      {movie && <MovieDetails movie={movie} />}
      {movies.length === 0 && !error ? (
        <EmptyState />
      ) : (
        <MovieList movies={movies} error={error} setMovie={setMovie} />
      )}
    </>
  );
}

export default App;
