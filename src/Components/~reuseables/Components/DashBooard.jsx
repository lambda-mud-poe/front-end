import React from "react";
import {
  MainContainer,
  Container,
  ControllArea,
  Screen,
  ActionsArea,
  Navigation,
  ChatBox,
  StyledForm,
  LogScreen
} from "../atoms/DashBoardStyles";
import TextArea from "../atoms/TextArea";

const DashBoard = () => {
  return (
    <MainContainer>
      <Container>
        <ControllArea>
          <Screen>Screen Area</Screen>
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
