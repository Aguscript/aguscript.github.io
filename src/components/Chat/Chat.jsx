import React, { useState } from 'react';
import './Chat.css'
import { ChatBubble } from '../ChatBubble/ChatBubble';

export const Chat = () => {
  const [messages, setMessages] = useState([
    {
      content: "Hola!",
      sender: "aguscript"
    },
    {
      content: "Mi nombre es Agustín Rodriguez.",
      sender: "aguscript"
    },
    {
      content: "Soy Analista de Sistemas y actualmente curso el último año de Ingeniería en Sistemas.",
      sender: "aguscript"
    },
    {
      content: "Me apasiona la programación, sobre todo el desarrollo web y móvil. 💛",
      sender: "aguscript"  
    },
    {
      content: "Hago cositas en React y React Native. ⚛️",
      sender: "aguscript"
    },
    {
      content: "!redes",
      sender: "aguscript"
    }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const renderNewMessage = () => {
    if (newMessage.trim().length === 0) {
      return;
    }

    setMessages(messages => [...messages, {
      content: newMessage,
      sender: "guest"
    }]);
  }

  return (
    <div className="chat-container">
      <div className="header">
        <span className="material-icons icons">arrow_back</span>
        <div className="photo-container">
          <img src="https://agus.app/images/Avatar.jpg" alt="foto" width="100%" />
        </div>
        <div className="chat-name-container">
          <h4>Agustín Rodriguez</h4>
        </div>
        <span className="material-icons icons">more_vert</span>
      </div>
      
      <div className="messages-wrapper">
        <div className="messages-area">
          {messages.map(message => (
            <ChatBubble message={message} />
          ))}
        </div>
      </div>
      
      <div className="message-entry-area">
        <div className="message-container">
          <span className="material-icons icon-off">mood</span>
          <input
            type="text"
            id="new-message"
            placeholder="Escribir mensaje"
            onChange={e => setNewMessage(e.target.value)}
          />
        </div>
        
        <button
          id="send-button"
          onClick={renderNewMessage}  
        >
          <span className="material-icons icons">send</span>
        </button>
      </div>
    </div>
  );
}
