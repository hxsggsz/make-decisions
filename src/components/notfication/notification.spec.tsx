import { render, screen } from "@testing-library/react"
import { Notification } from "./notification";

describe('Notification component', () => {
  it('should render the component Notification correctly', () => {
    render(<Notification content="teste" />)

    expect(screen.getByText("teste")).toBeInTheDocument();
  });
});