import { useState } from "react"
import Header from "./components/Header/Header"
import MovieList from "./components/MovieList/MovieList"
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  const [movies, setMovies] = useState([])
  return (
    <>
      <Header>
        <SearchBar setMovies={setMovies} />
      </Header>
      <MovieList movies={movies} />
    </>
  )
}

export default App
