import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Profile from "./components/Profile";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

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

        {/* Protected Route with nested Profile */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile/*" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
