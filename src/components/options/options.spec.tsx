/* eslint-disable @typescript-eslint/no-empty-function */
import { Options } from "./options";
import UserEvent from "@testing-library/user-event"
import { render, screen, waitFor } from "@testing-library/react"

describe("Options", () => {
  it("renders the children", () => {
    render(<Options submit={() => { } } remove={() => { } } text="Children" />);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
  
  it("renders an input when click on pencil", async () => {
    render(<Options submit={() => { } } remove={() => { } } text="Children" />);

    UserEvent.click(screen.getByTestId("pencil"))
    await waitFor(() => expect(screen.getByTestId("input")).toBeInTheDocument());
  });
   
  it("calls submit when submit button is clicked", async () => {
    const submitMock = jest.fn();
    render(<Options remove={() => { } } submit={submitMock} text="Children" />);

    UserEvent.click(screen.getByTestId("pencil"))
    await waitFor(() => expect(screen.getByTestId(/submit/i)).toBeInTheDocument());
    UserEvent.click(screen.getByTestId(/submit/i));
    await waitFor(() => expect(submitMock).toHaveBeenCalled());
  });
  
  it("calls remove when X button is clicked", async () => {
    const removeMock = jest.fn();
    render(<Options submit={() => { } } remove={removeMock} text="Children" />);
      
    UserEvent.click(screen.getByTestId("pencil"))
    await waitFor(() => expect(screen.getByTestId(/close/i)).toBeInTheDocument());
    UserEvent.click(screen.getByTestId("close"));
    await waitFor(() => expect(removeMock).toHaveBeenCalled());
  });
})
