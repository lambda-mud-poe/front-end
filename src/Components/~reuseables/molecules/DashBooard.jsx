import React from "react";
import {
  MainContainer,
  Container,
  ControllArea
} from "../styles/DashBoardStyles";
import GameScreen from "../atoms/GameScreen";
import ActionArea from "./ActionsArea";
import LogScreen from "../atoms/LogScreen";
import ChatBox from "./ChatBox";

const DashBoard = ({ data }) => {
  return (
    <MainContainer>
      <Container>
        <ControllArea>
          <GameScreen />
          <ActionArea />
          <ChatBox />
        </ControllArea>
        <LogScreen logs={data}/>
      </Container>
    </MainContainer>
  );
};

export default DashBoard;
