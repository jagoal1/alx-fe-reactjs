import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./PostsComponent.jsx";

// ✅ move QueryClient here
const queryClient = new QueryClient();

function Home() {
  return (
    <div style={{ padding: 16 }}>
      <h1>React Query Demo</h1>
      <p>Navigate to Posts to fetch and cache data.</p>
      <Link to="/posts">Go to Posts</Link>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <nav style={{ padding: 12, borderBottom: "1px solid #eee" }}>
          <Link to="/" style={{ marginRight: 12 }}>Home</Link>
          <Link to="/posts">Posts</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsComponent />} />
        </Routes>

        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
