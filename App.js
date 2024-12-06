import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000'); // Replace with backend URL if deployed

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', message);
      setMessages((prevMessages) => [...prevMessages, `You: ${message}`]);
      setMessage('');
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
