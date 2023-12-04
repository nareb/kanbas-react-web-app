import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      setLoading(true);
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message || "An error occurred during signup.");
    } finally {
      setLoading(false);
    }
};

  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button onClick={signup} disabled={loading}>
        {loading ? "Signing Up..." : "Signup"}
        Signup
      </button>
    </div>
); }
export default SignUp;