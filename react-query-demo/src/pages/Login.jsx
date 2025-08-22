import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Login Page</h1>
      <p>You must log in to view your profile.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}
