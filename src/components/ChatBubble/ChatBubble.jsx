import React from 'react';
import './ChatBubble.css';

export const ChatBubble = ({ message }) => {
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

  const tabla = (
    <div className="message">
      ¿Usted no aprende verdad? Un mensaje más y hay tabla.
    </div>
  );

  const renderedMessage =
    message.content === '!redes' ? (
      redes
    ) : message.content === '!tabla' ? (
      tabla
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
        <div className="time">12:55</div>
      </div>
    </div>
  );
};

/*TODO:
    -) Hora en envío real
    -) Agregar "en línea"
    -) Agregar bloqueo al cuarto mensaje enviado
    -) Mejorar el renderizado de la burbuja de imagen
    -) Agregar ticks
    -) Scroll to bottom
    -) Arreglar backgrounds
    -) Media queries
*/
