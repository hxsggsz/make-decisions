import { Input } from "./input";
import UserEvent from "@testing-library/user-event"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

describe('Button component', () => {
  it('should render the component correctly', () => {
    render(<Input label="test"/>)
    const input = screen.getByLabelText("test")
 
    expect(input).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
  it('should check when the input is in focus', async () => {
    render(<Input label="test"/>)
    const input = screen.getByLabelText("test")

    expect(input).not.toHaveFocus();
    expect(input).toHaveStyle({
      border: "0.2rem solid #423a4f",
      background: "rgb(229, 228, 226)"
    });

    UserEvent.click(input)
    fireEvent.focus(input)
    await waitFor(() => expect(input).toHaveFocus())
    expect(input).toHaveStyle({
      border: "0.4rem solid",
      background: "#d9d9d9"
    });
  });
});