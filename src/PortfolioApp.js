import React from 'react';
import { Chat } from './components/Chat/Chat';
import './PortfolioApp.css';

export const PortfolioApp = () => {
  return (
    <div className="AppWrapper">
      <div className="AppContainer">
        <Chat />
      </div>
    </div>
  );
};
