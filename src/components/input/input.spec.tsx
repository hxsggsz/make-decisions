import { Input } from "./input";
import UserEvent from "@testing-library/user-event"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import React from 'react';

describe('Button component', () => {
  it('should render the component correctly', () => {
    render(<Input />)
    const input = screen.getByLabelText("Ensira uma opção:")

    expect(input).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
  it('should check when the input is in focus', async () => {
    render(<Input />)
    const input = screen.getByRole('textbox', { name: /ensira uma opção:/i })

    expect(input).not.toHaveFocus();
    expect(input).toHaveStyle({
      border: "0.2rem solid #423a4f",
      background: "#c9b3e6"
    });

    UserEvent.click(input)
    fireEvent.focus(input)

    await waitFor(() => expect(screen.getByRole('textbox', { name: /ensira uma opção:/i })).toHaveFocus())
    expect(input).toHaveStyle({
      border: "0.4rem solid",
      background: "#d9d9d9"
    });
  });
});