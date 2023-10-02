import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../../components/SearchBar/SearchBar";

test("renders SearchBar component", () => {
  const updateMovies = () => {};
  const setError = () => {};
  const setMovie = () => {};

  const { getByPlaceholderText } = render(
    <SearchBar
      updateMovies={updateMovies}
      setError={setError}
      setMovie={setMovie}
    />
  );

  const inputElement = getByPlaceholderText("Search Movie");
  expect(inputElement).toBeInTheDocument();
});

test("updates search value on input change", () => {
  const updateMovies = () => {};
  const setError = () => {};
  const setMovie = () => {}; 

  const { getByPlaceholderText } = render(
    <SearchBar
      updateMovies={updateMovies}
      setError={setError}
      setMovie={setMovie}
    />
  );

  const inputElement = getByPlaceholderText("Search Movie");
  fireEvent.change(inputElement, { target: { value: "Test" } });
  expect(inputElement.value).toBe("Test");
});
