import React from 'react';
import { StyledForm } from '../styles/DashBoardStyles';
import TextArea from '../atoms/TextArea';

const ChatBox = ({ name, value, onChange }) => {
  return (
    <StyledForm>
      <TextArea name="message" />
    </StyledForm>
  );
};

export default ChatBox;
