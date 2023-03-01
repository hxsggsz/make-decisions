import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClientProvider, QueryClient } from 'react-query'
import { GlobalStyles } from './styles/globals'
import { ThemeProvider } from 'styled-components'
import { Dark } from './styles/themes/themes'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Dark}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
