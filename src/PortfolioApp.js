import React from 'react';
import { Chat } from './components/Chat/Chat';
import styled from 'styled-components';

import noteBG from './assets/note.svg';

export const PortfolioApp = () => {
  return (
    <AppContainer>
      <Chat />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  /* background-color: #f9d29d;
  background-image: linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%); */
  background-image: url(${noteBG});
  background-repeat: no-repeat;
  background-size: 100vw;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    align-items: flex-start;
    height: 91vh;
  }
`;