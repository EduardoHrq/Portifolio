import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./GlobalStyle"
import { Router } from "./Router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <>

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </QueryClientProvider>

      <GlobalStyle/>
    </>
  )
}

export default App
