"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "../lib/api";

export default function Admin() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiFetch("/admin/stats").then(setData).catch((e) => setErr(e.message));
  }, []);

  return (
    <div style={{ maxWidth: 720 }}>
      <h2>Admin</h2>
      {err && <p>{err}</p>}
      {data ? (
        <pre style={{ border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        !err && <p>Loading…</p>
      )}
    </div>
  );
}
