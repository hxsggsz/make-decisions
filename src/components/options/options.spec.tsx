import { Options } from "./options";
import UserEvent from "@testing-library/user-event"
import { render, screen, waitFor } from "@testing-library/react"

describe("Options", () => {
  it("renders the children", () => {
    const children = <div>Children</div>;
    render(<Options children={children} submit={() => {}} remove={() => {}} />);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
  
  it("renders an input when click on pencil", async () => {
    render(<Options children={"teste"} submit={() => {}} remove={() => {}}/>);

    UserEvent.click(screen.getByTestId("pencil"))
    await waitFor(() => expect(screen.getByTestId("input")).toBeInTheDocument());
  });
   
  it("calls submit when submit button is clicked", async () => {
    const submitMock = jest.fn();
    render(<Options children={"teste"} remove={() => {}} submit={submitMock} />);

    UserEvent.click(screen.getByTestId("pencil"))
    await waitFor(() => expect(screen.getByTestId(/submit/i)).toBeInTheDocument());
    UserEvent.click(screen.getByTestId(/submit/i));
    await waitFor(() => expect(submitMock).toHaveBeenCalled());
  });
  
  it("calls remove when X button is clicked", async () => {
    const removeMock = jest.fn();
    render(<Options children="teste" submit={() => {}} remove={removeMock} />);
      
    UserEvent.click(screen.getByTestId("pencil"))
    await waitFor(() => expect(screen.getByTestId(/close/i)).toBeInTheDocument());
    UserEvent.click(screen.getByTestId("close"));
    await waitFor(() => expect(removeMock).toHaveBeenCalled());
  });
})
