import { render, screen } from "@testing-library/react"
import { Heading } from "./heading";

describe('Button component', () => {
  it('should render the component correctly', () => {
    render(<Heading>teste</Heading>);
    expect(screen.getByText(/teste/i)).toBeInTheDocument();
  });

  it('should check if the component change the size', () => {
    render(<Heading size="md">teste</Heading>);

    const button = screen.getByText(/teste/i);

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ fontSize: "md" });
  });
});