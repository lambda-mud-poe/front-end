import React from 'react';
import { Button, NavigationStyle } from '../styles/DashBoardStyles';

const Navigation = () => {
  return (
    <NavigationStyle>
      <Button className="btn btn-up">↑</Button>
      <div className="mid-section">
        <Button className="btn btn-left">←</Button>
        <Button className="btn btn-right">→</Button>
      </div>

      <Button className="btn btn-down">↓</Button>
    </NavigationStyle>
  );
};

export default Navigation;
