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
    expect(button).toHaveStyle({ color: "rgb(83, 73, 99);" });
  });
  
  it('should check if the component have the correct color', () => {
    render(<Heading variant={true}>teste</Heading>);

    const Title = screen.getByText(/teste/i);

    expect(Title).toBeInTheDocument();
    expect(Title).toHaveStyle({ color: "#d6d6d6;" });
  });
});