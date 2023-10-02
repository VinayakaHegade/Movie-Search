import { render } from "@testing-library/react";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

const mockMovie = {
  id: 1,
  title: "Movie 1",
  poster_path: "/movie1.jpg",
  release_date: "2022-01-01",
  vote_average: 7.5,
};

window.HTMLElement.prototype.scrollIntoView = () => {};

test("renders MovieDetails component", () => {
  const { getByText, getByAltText } = render(
    <MovieDetails movie={mockMovie} />
  );

  expect(getByText("Movie : Movie 1")).toBeInTheDocument();
  const yearElement = getByText("Year :");
  const yearValue = getByText("2022");

  expect(yearElement).toBeInTheDocument();
  expect(yearValue).toBeInTheDocument();

  const ratingElement = getByText("Rating :");
  const ratingValue = getByText("7.5 / 10");

  expect(ratingElement).toBeInTheDocument();
  expect(ratingValue).toBeInTheDocument();
  expect(getByAltText("Poster for Movie 1")).toBeInTheDocument();
});






