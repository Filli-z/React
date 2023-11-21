import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      chacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryCLient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
createRoot(container).render(<App />);
