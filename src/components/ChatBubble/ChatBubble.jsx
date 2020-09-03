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

  const singleTick = (
    <svg
      viewBox="299.631 228.479 10.196 9.135"
      width="10.196"
      height="9.135"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 10.91 3.316 L 10.432 2.944 C 10.274 2.821 10.046 2.85 9.922 3.007 L 4.566 9.88 C 4.448 10.036 4.219 10.052 4.082 9.912 L 1.892 7.77 C 1.748 7.63 1.517 7.632 1.376 7.775 L 0.953 8.208 C 0.813 8.352 0.816 8.582 0.959 8.722 L 4.214 11.907 C 4.351 12.046 4.581 12.031 4.698 11.874 L 10.97 3.826 C 11.093 3.668 11.064 3.44 10.907 3.316 L 10.91 3.316 Z"
        fill="rgba(0,0,0,.3)"
        transform="matrix(1, 0, 0, 1, 298.781403, 225.611252)"
      />
    </svg>
  );

  const doubleTick = (
    <svg
      viewBox="328.645 184.069 14.301 9.134"
      width="14.301"
      height="9.134"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
        fill="#4fc3f7"
        transform="matrix(1, 0, 0, 1, 327.79538, 181.20134)"
      />
    </svg>
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
        message.sender === 'aguscript'
          ? `bubble-container ${message.tail && 'tail-h'}`
          : `bubble-container bc-guest ${message.tail && 'tail-g'}`
      }
    >
      <div
        className={message.sender === 'aguscript' ? 'bubble' : 'bubble b-guest'}
      >
        {renderedMessage}
        <div className="time-with-seen">
          {message.time}
          {message.sender === 'guest' &&
            (message.seen ? doubleTick : singleTick)}
        </div>
      </div>
    </div>
  );
};
