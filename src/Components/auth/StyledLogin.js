import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: 'Press Start 2P', cursive;
    width: 100%;
    text-align: center;
    font-size: 5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid red;
  height: 50vh;
  align-items: center;
  justify-content: center;

  h4 {
    font-family: 'Press Start 2P', cursive;
  }

  input {
    width: 50%;
    padding: 1rem;
    margin: 1rem;
    outline: none;
    border: none;
  }

  button {
    
  }
`;

export { FormContainer, Form };
