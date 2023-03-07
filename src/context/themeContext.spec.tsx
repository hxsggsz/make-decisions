import UserEvent from "@testing-library/user-event";
import { ThemeContext, ThemesProvider } from "./themeContext";
import { render, screen, waitFor } from "@testing-library/react";

describe('Theme Context', () => {
  it('should change the theme', async () => {
    render(
      <ThemesProvider>
        <ThemeContext.Consumer>
          {({ colors, setColors }) => (
            <>
              <h1>{colors}</h1>
              <button onClick={() => setColors("dark")}>mudar cor</button>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemesProvider>
    )

    expect(screen.getByText(/light/i)).toBeInTheDocument();

    UserEvent.click(screen.getByRole("button", { name: /mudar cor/i }))

    await waitFor(() => expect(screen.getByText(/dark/i)).toBeInTheDocument());
  });
});