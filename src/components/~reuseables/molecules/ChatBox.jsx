import React from 'react';
import { StyledForm } from '../styles/DashBoardStyles';
// import TextArea from '../atoms/TextArea';
import styled from 'styled-components';
import { forestGreen } from '../variables/colors';

const StyledInput = styled.input`
  color: white;
  font-weight: 500;
  background: transparent;
  border: 1px dotted ${forestGreen};
  color: white;
  outline: 0;
  padding: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

const ChatBox = ({ name, value, onChange }) => {
  return (
    <StyledForm>
      <button onClick={() => {localStorage.removeItem('key'); window.location.reload()}}>Logout</button>
      <StyledInput name="message" placeholder="Enter chat here" />
    </StyledForm>
  );
};

export default ChatBox;
