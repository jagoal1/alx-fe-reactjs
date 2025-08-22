import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // data is “fresh” for 60s (no refetch on remount/focus within this window)
      staleTime: 60 * 1000,
      // how long inactive cache stays in memory
      gcTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false, // smoother UX
      retry: 2,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
