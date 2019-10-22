import React from 'react';
import styled from 'styled-components';
import { ScreenStyle } from '../styles/DashBoardStyles';


const GameScreen =({map})=>{
    return (
        <ScreenStyle>
        {map}
        </ScreenStyle>
    )
}

export default GameScreen;