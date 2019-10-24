import React from 'react';
import styled from 'styled-components';
import { forestGreen, red } from '../variables/colors';
import { valera_round} from '../variables/font-famiy';

const StyledPlayers = styled.div`
  height: 200px;
  width: 50%;
  margin: 2px;
  border: 3px solid ${forestGreen};
  padding: 1rem;
  overflow-y: scroll;

  h4 {
    color: ${forestGreen};
    font-family: ${valera_round}
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
