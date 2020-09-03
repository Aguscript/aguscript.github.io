import React, { useState, useRef } from 'react';
import './Chat.css';
import { ChatBubble } from '../ChatBubble/ChatBubble';
import avatar from '../../assets/Avatar.jpg';
import defaultAvatar from '../../assets/defaultAvatar.png';

export const Chat = () => {
  const [messages, setMessages] = useState([
    {
      content: '¡Hola!',
      sender: 'aguscript',
      tail: true,
      time: new Date(Date.now()).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      content: 'Mi nombre es Agustín Rodriguez.',
      sender: 'aguscript',
      tail: false,
      time: new Date(Date.now()).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      content:
        'Soy Analista de Sistemas y actualmente curso el último año de Ingeniería en Sistemas.',
      sender: 'aguscript',
      tail: false,
      time: new Date(Date.now()).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      content:
        'Me apasiona la programación, sobre todo el desarrollo web y móvil. 💛',
      sender: 'aguscript',
      tail: false,
      time: new Date(Date.now()).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      content: 'Hago cositas en React y React Native. ⚛️',
      sender: 'aguscript',
      tail: false,
      time: new Date(Date.now()).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      content: '!redes',
      sender: 'aguscript',
      tail: false,
      time: new Date(Date.now()).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [replies, setReplies] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const lastRef = useRef(null);

  const scrollToBottom = () => {
    lastRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const renderNewMessage = () => {
    if (newMessage.trim().length === 0) {
      return;
    }

    setMessages((messages) => [
      ...messages,
      {
        content: newMessage,
        sender: 'guest',
        tail: replies >= 4 ? false : true,
        time: new Date(Date.now()).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        seen: replies >= 3 ? false : true,
      },
    ]);

    setNewMessage('');

    switch (replies) {
      case 0:
        setMessages((messages) => [
          ...messages,
          {
            content:
              'Este es un chat estático, así que no voy a recibir lo que escribas, mejor contactame por mis redes. :)',
            sender: 'aguscript',
            tail: true,
            time: new Date(Date.now()).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          },
        ]);
        setReplies((replies) => (replies += 1));
        break;
      case 1:
        setMessages((messages) => [
          ...messages,
          {
            content: '¿Usted no aprende, verdad? Un mensaje más y hay tabla.',
            sender: 'aguscript',
            tail: true,
            time: new Date(Date.now()).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          },
        ]);
        setReplies((replies) => (replies += 1));
        break;
      case 2:
        setMessages((messages) => [
          ...messages,
          {
            content: 'No tengo tiempo para esto, te vas bloqueado.',
            sender: 'aguscript',
            tail: true,
            time: new Date(Date.now()).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          },
        ]);
        setReplies((replies) => (replies += 1));
        setIsBlocked(true);
        break;
      default:
        setReplies((replies) => (replies += 1));
        break;
    }
  };

  return (
    <div className="chat-container">
      <div className="header">
        <span className="material-icons icons">arrow_back</span>
        <div className="photo-container">
          <img
            src={isBlocked ? defaultAvatar : avatar}
            alt="foto"
            width="100%"
          />
        </div>
        <div className="chat-name-container">
          <h4>Agustín Rodriguez</h4>
          {!isBlocked && <span>en línea</span>}
        </div>
        <span className="material-icons icons dots">more_vert</span>
      </div>

      <div className="messages-wrapper">
        <div className="messages-area">
          {messages.map((message, i) => (
            <ChatBubble
              message={message}
              key={i}
              scrollToBottom={scrollToBottom}
            />
          ))}
          <div ref={lastRef}></div>
        </div>
      </div>

      <div className="message-entry-area">
        <div className="message-container">
          <span className="material-icons icon-off">mood</span>
          <input
            type="text"
            id="new-message"
            placeholder="Escribe un mensaje"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                renderNewMessage();
              }
            }}
          />
        </div>

        <button id="send-button" onClick={renderNewMessage}>
          <span className="material-icons icons">send</span>
        </button>
      </div>
    </div>
  );
};
