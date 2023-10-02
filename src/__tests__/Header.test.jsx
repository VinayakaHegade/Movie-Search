import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";

test("renders Header component with children", () => {
  render(
    <Header>
      <div>Test</div>
    </Header>
  );
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Header component with app name", () => {
  render(
    <Header>
      <div />
    </Header>
  );
  const appName = screen.getByText(/Movie Search App/i);
  expect(appName).toBeInTheDocument();
});
