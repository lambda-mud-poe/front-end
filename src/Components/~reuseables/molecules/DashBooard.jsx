import React from "react";
import {
  MainContainer,
  Container,
  ControllArea,
  ActionsArea,
  Navigation,
  ChatBox,
  StyledForm,
  LogScreen
} from "../styles/DashBoardStyles";
import TextArea from "../atoms/TextArea";
import GameScreen from "../atoms/GameScreen";

const DashBoard = () => {
  return (
    <MainContainer>
      <Container>
        <ControllArea>
          <GameScreen/>
          <ActionsArea>
            <ChatBox>Chat output</ChatBox>
            <Navigation>Directions</Navigation>
          </ActionsArea>
          <StyledForm>
            <TextArea name="message" />
          </StyledForm>
        </ControllArea>
        <LogScreen>Log Screen</LogScreen>
      </Container>
    </MainContainer>
  );
};

export default DashBoard;
