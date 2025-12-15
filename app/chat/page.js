"use client";
import { useState } from "react";
import { apiFetch } from "../lib/api";

export default function Chat() {
  const [input, setInput] = useState("");
  const [out, setOut] = useState("");
  const [conversationId, setConversationId] = useState(null);

  async function send() {
    setOut("Thinking...");
    try {
      const data = await apiFetch("/v1/chat", { method: "POST", body: { input, conversationId } });
      setConversationId(data.conversationId);
      setOut(data.output || "");
    } catch (e) {
      setOut(e.message);
    }
  }

  return (
    <div style={{ maxWidth: 720 }}>
      <h2>Chat</h2>
      <div style={{ display: "flex", gap: 8 }}>
        <input style={{ flex: 1 }} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." />
        <button onClick={send}>Send</button>
      </div>
      <pre style={{ marginTop: 12, whiteSpace: "pre-wrap", border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
        {out}
      </pre>
      <p style={{ opacity: 0.7 }}>Conversation: {conversationId || "new"}</p>
    </div>
  );
}
