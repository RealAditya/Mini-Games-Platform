import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GameComponent.css';

const GameComponent = ({ renderGameUI }) => {
  const navigate = useNavigate();

  return (
    <div className="game-container">
      {renderGameUI()}
      <div className="game-buttons">
        <button onClick={() => navigate('/games')}>Back to Games</button>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    </div>
  );
};

export default GameComponent;
