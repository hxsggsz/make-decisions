import { render, screen } from "@testing-library/react";
import { Submit } from "./button-submit";

describe("Submit button component", () => {
  it("should render the component correctly", () => {
    render(<Submit isLoading={false}/>);
    expect(screen.getByTestId("paper-plane")).toBeInTheDocument();
  });

  it("should render the loading component", () => {
    render(<Submit isLoading={true}/>);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
