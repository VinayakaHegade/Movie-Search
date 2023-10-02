import { render } from "@testing-library/react";
import EmptyState from "../../components/EmptyState/EmptyState";

test("renders EmptyState component", () => {
  const { getByText } = render(<EmptyState />);
  const emptyStateElement = getByText(/Enter a movie name/i);
  expect(emptyStateElement).toBeInTheDocument();
});
