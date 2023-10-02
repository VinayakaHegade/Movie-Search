import { render, screen } from "@testing-library/react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

test("renders ErrorMessage component", () => {
  render(<ErrorMessage errorMessage="Error message" />);
  const errorElement = screen.getByText(/Error message/i);
  expect(errorElement).toBeInTheDocument();
});
