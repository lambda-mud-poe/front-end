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

const DashBoard = () => {
  return (
    <MainContainer>
      <Container>
        <ControllArea>
          <GameScreen/>
          <ActionArea/>
          <ChatBox/>
        </ControllArea>
        <LogScreen/>
      </Container>
    </MainContainer>
  );
};

export default DashBoard;
