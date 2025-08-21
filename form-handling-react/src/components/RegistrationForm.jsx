import React, { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      if (!response.ok) throw new Error("Registration failed");
      const data = await response.json();
      setMessage(`User registered successfully! Token: ${data.token}`);
    } catch (error) {
      setMessage("Registration failed. Try again.");
    }
  };

  return (
    <div>
      <h2>Register (Controlled)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}         {/* ✅ literal value={username} */}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}            {/* ✅ literal value={email} */}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}         {/* ✅ literal value={password} */}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
