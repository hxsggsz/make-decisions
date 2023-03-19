import { fireEvent, screen } from "@testing-library/react"
import { todoComponent } from "../utils/mocks/hooks-mocks";

describe('Todo page', () => {
  it('should render the Todo page correctly', () => {
    todoComponent()
    expect(screen.getByLabelText(/Ensira uma opção/i)).toBeInTheDocument();
  });
  
  it('should get a validation empty error', async () => {
    todoComponent()
    //Inside this component dont have any text so i use test-id
    const submit = screen.getByTestId("submit");
    fireEvent.submit(submit)
    // alternative to waitFor
    expect(await screen.findByText(/Campo em branco!/i)).toBeInTheDocument();
  });

  it('should get a validation min length error', async () => {
    todoComponent()
  
    const input = screen.getByRole('textbox', { name: /ensira uma opção:/i })
    const submit = screen.getByTestId("submit");

    fireEvent.input(input, {target: { value: "test"}})
    fireEvent.submit(submit)

    expect(input).toHaveValue("test")
    expect(await screen.findByText(/Minimo de caracteres atingido/i)).toBeInTheDocument();
  });

  it('should get a validation max length error', async () => {
    todoComponent()
  
    const input = screen.getByRole('textbox', { name: /ensira uma opção:/i })
    const submit = screen.getByTestId("submit");

    fireEvent.input(input, {target: { value: "a".repeat(257)}})
    fireEvent.submit(submit)

    expect(input).toHaveValue("a".repeat(257));
    expect(await screen.findByText(/Máximo de caracteres atingido/i)).toBeInTheDocument();
  });
});