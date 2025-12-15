"use client";
import { useState } from "react";
import { apiFetch, setToken } from "../lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("Logging in...");
    try {
      const data = await apiFetch("/auth/login", { method: "POST", body: { email, password } });
      setToken(data.token);
      setMsg(`Logged in as ${data.role}.`);
    } catch (err) {
      setMsg(err.message);
    }
  }

  return (
    <div style={{ maxWidth: 520 }}>
      <h2>Login</h2>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 8 }}>
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: 12 }}>{msg}</p>
    </div>
  );
}
