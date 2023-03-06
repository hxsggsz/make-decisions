import { Button } from "./button";
import { render, screen } from "@testing-library/react"

describe('Button component', () => {
  it('should render the component correctly', () => {
    render(<Button isLoading={false}>teste</Button>)
    expect(screen.getByText(/teste/i)).toBeInTheDocument();
  });

  it('should render the loading component', () => {
    render(<Button isLoading={true}>teste</Button>)
    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });
});