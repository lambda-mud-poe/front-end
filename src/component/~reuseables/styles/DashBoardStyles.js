import styled from "styled-components";
import { white, slatePurple, forestGreen, red } from "../variables";

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
  /* max-width: 957.86px; */
  width: 100%;
  min-height: 600px;
  padding: 2rem 0;
  display: flex;
  min-height: 100vh;
  border: 3px solid ${forestGreen};
`;
export const ControllArea = styled.div`
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const ScreenStyle = styled.div`
  height: 100%;
  width: 1000px;
  border: 3px solid ${forestGreen};
`;

export const ActionStyle = styled.div`
  display: flex;
  margin: 2px;
  width: 100%;
`;

export const ChatScreenStyle = styled.div`
  height: 200px;
  width: 70%;
  margin: 2px;
  border: 3px solid ${forestGreen};
`;

export const NavigationStyle = styled.div`
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

export const LogScreenStyles = styled.div`
  width: 500px;
  min-height: 600px;
  padding: 2rem 0;
  display: flex;
  height: 100%;
  margin: 2px;
  border: 3px solid ${forestGreen};
  flex-wrap: wrap;
`;

export const Button = styled.div`
font-size: 1rem;
         padding: 0.3em 1em;
         color: white;
         border: 1px solid transparent;
         border-radius: 5px;
         outline: none;
         background: ${red};
         white-space: nowrap;


         &:hover {
           color: white;
         }
`;
