import React from 'react';
import styled from 'styled-components';

export const ChatBubble = ({ message, tail }) => {
  const redes = <>
    Podés encontrarme en: <br/>
    <NetLink href="https://www.instagram.com/agusr98/" target="_blank" rel="noopener noreferrer">📷 Instagram</NetLink><br/>
    <NetLink href="https://twitter.com/aguserc" target="_blank" rel="noopener noreferrer">🐦 Twitter</NetLink><br/>
    <NetLink href="https://twitter.com/aguserc" target="_blank" rel="noopener noreferrer">💻 Github</NetLink><br/>
    <NetLink href="https://twitter.com/aguserc" target="_blank" rel="noopener noreferrer">💼 LinkedIn</NetLink><br/>
  </>;
  const renderedMessage = message === '!redes' ? redes : message ;

  return (
    <BubbleContainer>
      <Bubble tail={tail}>
        <Message>{renderedMessage}</Message>
        <Time>12:55</Time>
      </Bubble>
    </BubbleContainer>
  );
}

const BubbleContainer = styled.div`
  display: inline-flex;
  max-width: 80%;
  margin-bottom: 1px;
  padding: 0 3px 3px 20px;
  overflow: hidden;
`;

const Bubble = styled.div`
  display: inline-flex;
  position: relative;
  padding: 7px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.1);

  &:after {
    content: "";
    position: absolute;
    top: -9px;
    left: -4px;
    width: 18px;
    height: 18px;
    transform: rotate(45deg);
    border-bottom-left-radius: 3px;
    background-color: #fff;
    visibility: ${props => props.tail ? "visible" : "hidden"};
  }
`;

const Message = styled.div`
  font-size: 15px;
  word-break: break-word;
`;

const Time = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 13px;
  color: rgba(0,0,0,.5);
  margin-left: 10px;
`;

const NetLink = styled.a`
  color: #008a7a;
  font-weight: 400;
  text-decoration: none;
`;