import React from 'react';
import './ChatBubble.css'

export const ChatBubble = ({ message }) => {
  const redes = <div className="message">
    Podés encontrarme en: <br/>
    <a href="https://www.instagram.com/agusr98/" target="_blank" rel="noopener noreferrer">📷 Instagram</a><br/>
    <a href="https://www.twitter.com/aguscript" target="_blank" rel="noopener noreferrer">🐦 Twitter</a><br/>
    <a href="https://www.github.com/aguscript" target="_blank" rel="noopener noreferrer">💻 Github</a><br/>
    <a href="https://www.linkedin.com/in/aguscript" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a><br/>
  </div>;

  const renderedMessage = (
    message.content === "!redes" ? redes : (
      <div className="message">{message.content}</div>
    )
  );

  return (
    <div className="bubble-container">
      <div className="bubble">
        {renderedMessage}
        <div className="time">12:55</div>
      </div>
    </div>
  );
}