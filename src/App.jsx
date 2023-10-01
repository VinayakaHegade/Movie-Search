import { useState } from "react";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  return (
    <>
      <Header>
        <SearchBar updateMovies={setMovies} setError={setError} />
      </Header>
      <MovieList movies={movies} error={error} />
    </>
  );
}

export default App;
