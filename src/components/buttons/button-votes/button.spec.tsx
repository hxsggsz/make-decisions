import { ButtonVotes } from "./button-votes";
import { render, screen, waitFor } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

describe('Button vote component', () => {
  it('should render the component correctly', () => {
    render(<ButtonVotes id={""} votes={0} vote={() => { } } name="Vote aqui" />)
    expect(screen.getByText(/Vote aqui: 0/i)).toBeInTheDocument();
  });

  it('should call the function and disable the button', async () => {
    const mockVotes = jest.fn()
    render(<ButtonVotes id={""} votes={0} vote={mockVotes} name="Vote aqui" />)
    
    const btn = screen.getByRole('button', { name: /vote aqui: 0/i })
     
    UserEvent.click(btn)
    await waitFor (() => expect(mockVotes).toHaveBeenCalled());
    await waitFor(() => expect(btn).toBeDisabled())
    
  });
});