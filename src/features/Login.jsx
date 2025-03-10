"use client"

import { useState } from "react";
import { useLoginMutation } from "../service/leads";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ username, password }).unwrap();
      localStorage.setItem("token", response.token);
      navigate("/board");
    } catch (err) {
      // Error is handled by the useLoginMutation hook
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" disabled={isLoading} className="login-button btn btn-success">
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p className="error-message">{error.data?.message || "An error occurred. Please try again."}</p>}
      </div>
    </div>
  );
};

export default Login;
