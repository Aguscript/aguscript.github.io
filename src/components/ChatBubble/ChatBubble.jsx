import React, { useEffect } from 'react';
import './ChatBubble.css';

export const ChatBubble = ({ message, scrollToBottom }) => {
  useEffect(() => {
    scrollToBottom();
  });

  const redes = (
    <div className="message">
      Podés encontrarme en: <br />
      <a
        href="https://www.instagram.com/agusr98/"
        target="_blank"
        rel="noopener noreferrer"
      >
        📷 Instagram
      </a>
      <br />
      <a
        href="https://www.twitter.com/aguscript"
        target="_blank"
        rel="noopener noreferrer"
      >
        🐦 Twitter
      </a>
      <br />
      <a
        href="https://www.github.com/aguscript"
        target="_blank"
        rel="noopener noreferrer"
      >
        💻 Github
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/aguscript"
        target="_blank"
        rel="noopener noreferrer"
      >
        💼 LinkedIn
      </a>
      <br />
    </div>
  );

  const renderedMessage =
    message.content === '!redes' ? (
      redes
    ) : (
      <div className="message">{message.content}</div>
    );

  return (
    <div
      className={
        message.sender === 'aguscript' ? 'bubble-container' : 'bc-guest'
      }
    >
      <div
        className={message.sender === 'aguscript' ? 'bubble' : 'bubble b-guest'}
      >
        {renderedMessage}
        <div className="time">
          {new Date(Date.now()).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  );
};

/*TODO:
    Hecho) Hora en envío real
    Hecho) Agregar "en línea"
    Hecho) Agregar bloqueo al cuarto mensaje enviado
    -) Mejorar el renderizado de la burbuja de imagen
    -) Agregar ticks
    Hecho) Scroll to bottom
    -) Arreglar backgrounds
    Hecho) Media queries
*/
