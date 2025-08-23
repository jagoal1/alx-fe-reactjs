import { BrowserRouter, Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import Home from "../../react-router-advanced/src/components/home";
import Blog from "../../react-router-advanced/src/components/blog";
import BlogPost from "../../react-router-advanced/src/components/BlogPost";
import Profile from "../../react-router-advanced/src/components/Profile";
import Login from "../../react-router-advanced/src/components/Login";
import NotFound from "../../react-router-advanced/src/components/NotFound";

// Fake authentication
const isAuthenticated = false;

function ProtectedRoute() {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/blog" style={{ marginRight: 12 }}>Blog</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected Profile route with nested routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile/*" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
