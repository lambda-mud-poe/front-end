import React from 'react';
import { Button, NavigationStyle } from '../styles/DashBoardStyles';

const Navigation = ({direction}) => {
  return (
    <NavigationStyle>
      <Button className="btn btn-up" onClick={direction} name='n'>↑</Button>
      <div className="mid-section">
        <Button className="btn btn-left" onClick={direction} name='w'>←</Button>
        <Button className="btn btn-right" onClick={direction} name='e'>→</Button>
      </div>

      <Button className="btn btn-down" onClick={direction} name='s'>↓</Button>
    </NavigationStyle>
  );
};

export default Navigation;
