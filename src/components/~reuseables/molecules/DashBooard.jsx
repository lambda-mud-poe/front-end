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

const DashBoard = ({ data, rooms, action, location }) => {
  return (
    <MainContainer>
      <Container>
        <ControllArea>
          <GameScreen map={rooms} location={location} />
          <ActionArea logs={data} move={action} />
        </ControllArea>

        <LogScreen logs={data} />
        {/* <ChatBox /> */}
      </Container>
    </MainContainer>
  );
};

export default DashBoard;
