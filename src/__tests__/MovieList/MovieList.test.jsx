import { render } from "@testing-library/react";
import MovieList from "../../components/MovieList/MovieList";

const mockMovies = [
  {
    id: 1,
    title: "Movie 1",
    poster_path: "/movie1.jpg",
    release_date: "2022-01-01",
    vote_average: 7.5,
  },
  {
    id: 2,
    title: "Movie 2",
    poster_path: "/movie2.jpg",
    release_date: "2022-02-01",
    vote_average: 8.0,
  },
];

test("renders MovieList component", () => {
  const { getByText, getByAltText } = render(<MovieList movies={mockMovies} />);

  expect(getByText("Movie 1")).toBeInTheDocument();
  expect(getByText("Movie 2")).toBeInTheDocument();

  expect(getByAltText("Movie 1")).toBeInTheDocument();
  expect(getByAltText("Movie 2")).toBeInTheDocument();
});
