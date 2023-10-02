import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../../components/MovieList/MovieCard";

const mockMovie = {
  id: 1,
  title: "Movie 1",
  poster_path: "/movie1.jpg",
  release_date: "2022-01-01",
  vote_average: 7.5,
};

test("renders MovieCard component", () => {
  render(<MovieCard movie={mockMovie} />);
  const titleElement = screen.getByText("Movie 1");
  const altTextElement = screen.getByAltText("Movie 1");

  expect(titleElement).toBeTruthy();
  expect(altTextElement).toBeTruthy();
});

test("clicking on MovieCard invokes setMovie function", () => {
  const setMovie = () => {};
  render(<MovieCard movie={mockMovie} setMovie={setMovie} />);
  const movieCard = screen.getByRole("button");

  fireEvent.click(movieCard);
});
