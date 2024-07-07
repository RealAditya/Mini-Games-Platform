// src/components/GamesList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './GamesList.css';

const games = [
  { name: 'Snake Chase', path: '/snake-chase', img: '/assets/images/snake.png' },
  { name: 'Tic Tac Toe', path: '/tic-tac-toe', img: '/assets/images/tictactoe.jpg' },
  { name: 'Memory Game', path: '/memory-game', img: '/assets/images/memorygame.png' },
  // Add more games as needed
];

const GamesList = () => {
  return (
    <div className="games-list">
      {games.map((game, index) => (
        <div key={index} className="game-card">
          <Link to={game.path}>
            <img src={game.img} alt={game.name} className="game-image" />
            <h3>{game.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
