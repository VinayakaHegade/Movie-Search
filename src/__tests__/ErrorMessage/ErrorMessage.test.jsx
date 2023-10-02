import { render } from "@testing-library/react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

test("renders ErrorMessage component", () => {
  const { getByText } = render(<ErrorMessage errorMessage="Error message" />);
  const errorMessage = getByText("Error message");

  expect(errorMessage).toBeInTheDocument();
});

test("renders action message when provided", () => {
  const { getByText } = render(
    <ErrorMessage
      errorMessage="No movies found"
      actionMessage="Try a different search term"
    />
  );

  expect(getByText("Try a different search term")).toBeInTheDocument();
});
