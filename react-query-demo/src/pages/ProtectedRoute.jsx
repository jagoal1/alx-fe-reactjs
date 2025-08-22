import { Navigate, Outlet } from "react-router-dom";

// Fake auth (you could hook this up to real context/state)
const isAuthenticated = false; // change to true to simulate login

export default function ProtectedRoute() {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
