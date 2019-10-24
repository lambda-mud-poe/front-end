import styled from 'styled-components';
import { white, slatePurple, forestGreen, red, dark } from '../variables';
import { valera_round } from '../variables/font-famiy';

export const MainContainer = styled.div`
  background: ${dark};
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .mid-section {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
  .btn-up {
    width: 20%;
  }

  .btn-down {
    width: 20%;
  }

  .btn-left {
    width: 20%;
  }

  .btn-right {
    width: 20%;
  }
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
  height: 500px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 3px solid ${forestGreen};
  overflow-y: scroll;

  h1 {
    font-weight: bold;
    font-family: ${valera_round};
    color: ${forestGreen};
    width: 100%;
    padding-bottom: 1rem;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: ${valera_round};
  }

  .single-room {
    margin: 1rem 0;
  }
  hr {
    border: 1px solid ${white};
    width: 100%;
  }
`;

export const Button = styled.div`
  font-size: 1rem;
  padding: 0.3em 1em;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background: ${forestGreen};
  white-space: nowrap;

  &:hover {
    color: white;
  }
`;
