import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/globals";
import { ThemesProvider } from "./context/themeContext";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemesProvider>
        <App />
        <GlobalStyles />
      </ThemesProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
