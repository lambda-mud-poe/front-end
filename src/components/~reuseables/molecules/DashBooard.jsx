import React from 'react';
import {
  MainContainer,
  Container,
  ControllArea
} from '../styles/DashBoardStyles';
import GameScreen from '../atoms/GameScreen';
import ActionArea from './ActionsArea';
import LogScreen from '../atoms/LogScreen';
import ChatBox from './ChatBox';

const DashBoard = ({ data, rooms, action }) => {
  return (
    <MainContainer>
      <Container>
        <ControllArea>
          <GameScreen map={rooms} />
          <ActionArea logs={data} move={action} />
          <ChatBox />
        </ControllArea>
        <LogScreen logs={data} />
      </Container>
    </MainContainer>
  );
};

export default DashBoard;
