// src/Login.jsx
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "./firebase";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Try to sign in first
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (err) {
      // If sign-in fails, try to register
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        onLogin();
      } catch (e) {
        setError("Login/Register failed. Try again.");
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h2>Campus Copilot Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px auto" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto" }}
      />
      <button onClick={handleLogin}>Login / Register</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
