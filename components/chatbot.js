"use client";

import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer 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`, // Replace this
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        }),
      });

      const data = await response.json();
      console.log("API Response:", JSON.stringify(data, null, 2));

      if (!response.ok) {
        console.error("Error:", data?.error || data || "Unknown error occurred");
        return;
      }

      if (data.choices?.length > 0) {
        const botMessage = { text: data.choices[0].message.content, sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        console.error("No response choices available");
      }
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    setLoading(false);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen text-white ">
      <h1 className="text-2xl font-mono p-10 pt-40">have more questions?</h1>
      <div className="w-full max-w-2xl flex flex-col space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg h-[600px] overflow-hidden">
        <div className="flex-1 overflow-y-auto space-y-2 p-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[60%] break-words ${
                msg.sender === "user" 
                  ? "bg-blue-500 text-white self-end text-right" 
                  : "bg-gray-700 text-white self-start text-left"
              }`}
            >
              {msg.text.split("\n").map((line, i) => (
                <p key={i} className="whitespace-pre-wrap">{line}</p>
              ))}
            </div>
          ))}
          {loading && <div className="text-gray-400 self-start">Thinking...</div>}
        </div>

        <div className="flex items-center bg-gray-700 p-3 rounded-lg space-x-3">
          <input 
            type="text"
            className="flex-1 bg-transparent border-none text-white focus:outline-none p-2"
            placeholder="Ask me something about Eric..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={sendMessage}
            disabled={loading}
          >
            Send
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            onClick={clearMessages}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
