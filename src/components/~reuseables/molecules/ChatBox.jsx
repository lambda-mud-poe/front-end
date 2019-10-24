import React from 'react';
import { StyledForm } from '../styles/DashBoardStyles';
import TextArea from '../atoms/TextArea';
import styled from 'styled-components';
import { forestGreen } from '../variables/colors';

const StyledInput = styled.input`
  /* background: transparent; */
  /* border: 5px solid ${forestGreen}; */
  color: white;
  font-weight: 500;
  background: transparent;
  border: none;
  color: white;
  outline: 0;
  padding: 1rem;
  width: 100%;

  &:focus {
      border: none !important;

  }
`;

const ChatBox = ({ name, value, onChange }) => {
  return (
    <StyledForm>
        <button>Logout</button>
      <StyledInput name="message" placeholder="Enter chat here" />
    </StyledForm>
  );
};

export default ChatBox;
