import React from 'react';
import styled from 'styled-components';
import { forestGreen } from '../variables/colors';

const StyledPlayers = styled.div`
  height: 200px;
  width: 50%;
  margin: 2px;
  border: 3px solid ${forestGreen};
  padding: 1rem;
  overflow-y: scroll;

  h4 {
    color: red;
  }
`;

export default function Players({ players }) {
  return (
    <StyledPlayers>
      <h4>Other Players</h4>
      {players.map((player, i) => {
        return (
          <div>
            <p key={i}>- {player}</p>
          </div>
        );
      })}
    </StyledPlayers>
  );
}

Players.defaultProps = {
  players: []
};
