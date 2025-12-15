export default function Home() {
  return (
    <div style={{ maxWidth: 720 }}>
      <h1 style={{ marginTop: 0 }}>kirklubesit.com — Command Cockpit</h1>
      <p>Connected to the shared Autokirk API.</p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="/login">Login</a>
        <a href="/chat">Chat</a>
        <a href="/subscribe">Subscribe</a>
        <a href="/admin">Admin</a>
      </div>

      <hr style={{ margin: "16px 0" }} />
      <p style={{ opacity: 0.8 }}>Security standard: no privileged keys in frontend.</p>
    </div>
  );
}
