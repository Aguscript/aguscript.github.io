import React from 'react';
import { Chat } from './components/Chat/Chat';
import styled from 'styled-components';

import phoneBG from './assets/phone.svg';

export const PortfolioApp = () => {
  return (
    <AppWrapper>
      <AppContainer>
        <Chat />
      </AppContainer>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;

  @media only screen and (min-width: 992px) {
    height: 980px;
    width: 1400px;
    margin: 0 auto;
    background-image: url(${phoneBG});
    background-repeat: no-repeat;
    background-attachment: local;
  }
`;
