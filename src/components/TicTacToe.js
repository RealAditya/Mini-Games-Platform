import React, { useState } from 'react';
import GameComponent from './GameComponent'; // Adjust import path as necessary
import './TicTacToe.css'; // Import game-specific CSS

const INITIAL_STATE = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  isTie: false,
};

const TicTacToe = () => {
  const [gameState, setGameState] = useState(INITIAL_STATE);

  const handleClick = (index) => {
    if (gameState.winner || gameState.squares[index]) {
      return;
    }

    const newSquares = [...gameState.squares];
    newSquares[index] = gameState.xIsNext ? 'X' : 'O';

    const winner = calculateWinner(newSquares);
    const isTie = !newSquares.includes(null) && !winner;

    setGameState({
      squares: newSquares,
      xIsNext: !gameState.xIsNext,
      winner: winner,
      isTie: isTie,
    });
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const renderStatus = () => {
    if (gameState.winner) {
      return `Winner: ${gameState.winner}`;
    } else if (gameState.isTie) {
      return "It's a Tie!";
    } else {
      return `Next Player: ${gameState.xIsNext ? 'X' : 'O'}`;
    }
  };

  const renderSquare = (index) => (
    <button className="cell" onClick={() => handleClick(index)}>
      {gameState.squares[index]}
    </button>
  );

  const renderGameUI = () => (
    <div className="tic-tac-toe">
      <div className="status">{renderStatus()}</div>
      <div className="board">
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {Array.from({ length: 3 }).map((_, colIndex) => (
              <div key={colIndex} className="board-col">
                {renderSquare(rowIndex * 3 + colIndex)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <center>
      <GameComponent
        gameName="Tic Tac Toe"
        gamePath="/tic-tac-toe"
        initialGameState={INITIAL_STATE}
        renderGameUI={renderGameUI}
      />
    </center>
  );
};

export default TicTacToe;
