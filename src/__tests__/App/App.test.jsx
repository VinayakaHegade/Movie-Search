//Integration test
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

test("renders EmptyState component when searchValue is empty", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Search Movie");
  fireEvent.change(inputElement, { target: { value: "" } });
  const paragraphElement = screen.getByText(
    "Enter a movie name in the search bar above and the results will be displayed here. Find your next favorite movie!"
  );
  expect(paragraphElement).toBeInTheDocument();
});

// test("should not render EmptyState component when searchValue is not empty", () => {
//   render(<App />);
//   const inputElement = screen.getByPlaceholderText("Search Movie");
//   fireEvent.change(inputElement, { target: { value: "jawaan" } });
//   const paragraphElement = screen.queryByText(
//     "Enter a movie name in the search bar above and the results will be displayed here. Find your next favorite movie!"
//   );
//   expect(paragraphElement).not.toBeInTheDocument();
// });
