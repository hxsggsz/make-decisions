import { NotFoundPage } from "./not-found";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe('index page', () => {
  it('should render the index page', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    )

    expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();


  });
});