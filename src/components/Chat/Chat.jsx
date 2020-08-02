import React from 'react';
import './Chat.css'
import { ChatBubble } from '../ChatBubble';

export const Chat = () => {
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
      
      <div className="messages-area">
        <ChatBubble message="Hola!" tail={true} />
        <ChatBubble message="Mi nombre es Agustín Rodriguez." />
        <ChatBubble message="Soy Analista de Sistemas y actualmente curso
                              el último año de Ingeniería en Sistemas." />
        <ChatBubble message="Me apasiona la programación, sobre todo el desarrollo web y móvil. 💛" />
        <ChatBubble message="Hago cositas en React y React Native. ⚛️" />
        <ChatBubble message="!redes" />
      </div>
      
      <div className="message-entry-area">
        <div className="message-container">
          <span className="material-icons icon-off">mood</span>
          <input type="text" id="new-message" placeholder="Escribir mensaje" />
        </div>
        
        <button id="send-button">
          <span className="material-icons icons">send</span>
        </button>
      </div>
    </div>
  );
}
