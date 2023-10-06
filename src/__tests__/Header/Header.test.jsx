import { render, screen } from "@testing-library/react";
import Header from "../../components/Header/Header";

test("renders Header component with children", () => {
  const ChildComponent = () => <div>Child Component</div>;

  render(
    <Header>
      <ChildComponent />
    </Header>
  );

  const childElement = screen.getByText(/Child Component/i);
  expect(childElement).toBeInTheDocument();
});

test("renders Header component with app name and logo", () => {
  render(<Header />);

  const appName = screen.getByRole("heading", { name: "Movie Search App" });
  const appLogo = screen.getByAltText("Logo of the Movie Search App");

  expect(appName).toBeInTheDocument();
  expect(appLogo).toBeInTheDocument();
});
