import styled from "styled-components";
import { white, slatePurple, forestGreen } from "../variables";

export const MainContainer = styled.div`
  background: ${slatePurple};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${white};
`;

export const Container = styled.div`
  max-width: 957.86px;
  min-height: 600px;
  padding: 2rem 0;
  display: flex;
  height: 100%;
  border: 3px solid ${forestGreen};
`;
export const ControllArea = styled.div`
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const Screen = styled.div`
  height: 400px;
  width: 700px;
  border: 3px solid ${forestGreen};
`;

export const ActionsArea = styled.div`
  display: flex;
  margin: 2px;
  width: 700px;
`;

export const ChatBox = styled.div`
  height: 200px;
  width: 50%;
  margin: 2px;
  border: 3px solid ${forestGreen};
`;

export const Navigation = styled.div`
  height: 200px;
  width: 50%;
  margin: 2px;
  border: 3px solid ${forestGreen};
`;

export const StyledForm = styled.div`
  display: block;
  width: 100%;
  margin-top: 2rem;
  input:focus,
  textarea:focus {
    outline: none !important;
    border: 5px solid ${forestGreen};
    box-shadow: 0 0 10px #719ece;
  }
`;

export const LogScreen = styled.div`
  width: 300px;
  min-height: 600px;
  padding: 2rem 0;
  display: flex;
  height: 100%;
  margin: 2px;
  border: 3px solid ${forestGreen};
`;
