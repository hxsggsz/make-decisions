import { Navbar } from "./navbar";
import UserEvent from "@testing-library/user-event"
import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";

describe('Navbar component', () => {
  it('should render the component Navbar correctly', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>)
    expect(screen.getByTestId("menu")).toBeInTheDocument();
  });

  it('should open and close menu', async () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>)

    const menu = screen.getByTestId('menu');

    UserEvent.click(menu);
    await waitFor(() => expect(screen.getByTestId("close")).toBeInTheDocument());
    UserEvent.click(screen.getByTestId("close"));
    await waitFor(() => expect(screen.queryByTestId("close")).not.toBeInTheDocument());
  });
});