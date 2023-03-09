import { Home } from ".";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe('index page', () => {
  it('should render the index page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(screen.getByText(/decidir /i)).toBeInTheDocument();


  });
});