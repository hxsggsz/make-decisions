import { render, screen } from "@testing-library/react";
import { Submit } from "./button-submit";

describe("Submit button component", () => {
  it("should render the component correctly", () => {
    render(<Submit isLoading={false}>teste</Submit>);
    expect(screen.getByText(/teste/i)).toBeInTheDocument();
  });

  it("should render the loading component", () => {
    render(<Submit isLoading={true}>teste</Submit>);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
