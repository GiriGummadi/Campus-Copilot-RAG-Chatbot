import { useState } from "react";
import { auth } from "./firebase";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const user = auth.currentUser;
    const newUserMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, newUserMsg]);
    setLoading(true);

    try {
      const res = await axios.post(
        "https://<YOUR_AGENT_API_ENDPOINT>",  // 🔁 REPLACE THIS
        {
          prompt: input,
        },
        {
          headers: {
            // You can optionally add this if your endpoint requires it
            // Authorization: `Bearer ${await user.getIdToken()}`
          },
        }
      );

      const botReply = {
        role: "assistant",
        content: res?.data?.answer || "No answer found.",
      };

      setMessages((prev) => [...prev, botReply]);
      setInput("");
    } catch (err) {
      console.error("Error fetching response:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error fetching response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", marginTop: "4rem" }}>
      <h2>🎓 Campus Copilot Chat</h2>
      <div
        style={{
          height: "400px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
          backgroundColor: "#f8f8f8",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              marginBottom: "0.75rem",
            }}
          >
            <strong>{msg.role === "user" ? "You" : "Copilot"}:</strong>{" "}
            {msg.content}
          </div>
        ))}
        {loading && <p><em>Thinking...</em></p>}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        style={{ width: "80%", marginTop: "1rem", padding: "0.5rem" }}
        placeholder="Ask me anything..."
      />
      <button onClick={sendMessage} style={{ marginLeft: "1rem" }}>
        Send
      </button>
    </div>
  );
}
