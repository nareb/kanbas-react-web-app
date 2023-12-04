import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || "An error occurred during signup.");
      } else {
        setError("An error occurred during signup.");
      }
    }
};

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <div>{error}</div>}
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button onClick={signup} className="btn btn-primary">
        Register
      </button>
    </div>
); }
export default Signup;