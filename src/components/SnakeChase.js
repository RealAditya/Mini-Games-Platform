import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SnakeChase.css';

const SnakeChase = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [gameOver, setGameOver] = useState(false);
  const directionRef = useRef(direction);
  const snakeRef = useRef(snake);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newDirection = { ...directionRef.current };
      switch (e.key) {
        case 'ArrowUp':
          if (directionRef.current.y === 0) {
            newDirection.x = 0;
            newDirection.y = -1;
          }
          break;
        case 'ArrowDown':
          if (directionRef.current.y === 0) {
            newDirection.x = 0;
            newDirection.y = 1;
          }
          break;
        case 'ArrowLeft':
          if (directionRef.current.x === 0) {
            newDirection.x = -1;
            newDirection.y = 0;
          }
          break;
        case 'ArrowRight':
          if (directionRef.current.x === 0) {
            newDirection.x = 1;
            newDirection.y = 0;
          }
          break;
        default:
          return;
      }
      directionRef.current = newDirection;
      setDirection(newDirection);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameOver) return;

      const newSnake = [...snakeRef.current];
      const head = {
        x: newSnake[0].x + directionRef.current.x,
        y: newSnake[0].y + directionRef.current.y,
      };

      // Check collision with walls or self
      if (
        head.x < 0 ||
        head.x >= 20 ||
        head.y < 0 ||
        head.y >= 20 ||
        newSnake.some(segment => segment.x === head.x && segment.y === head.y)
      ) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(head);

      // Check collision with food
      if (head.x === food.x && head.y === food.y) {
        setFood({
          x: Math.floor(Math.random() * 20),
          y: Math.floor(Math.random() * 20),
        });
      } else {
        newSnake.pop();
      }

      snakeRef.current = newSnake;
      setSnake(newSnake);
    }, 200);

    return () => clearInterval(interval);
  }, [food, gameOver]);

  const handleStart = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 1, y: 0 });
    setFood({ x: 5, y: 5 });
    setGameOver(false);
    directionRef.current = { x: 1, y: 0 };
    snakeRef.current = [{ x: 10, y: 10 }];
  };

  return (
    <div className="snake-chase">
      <h1>Snake Chase</h1>
      {gameOver ? (
        <>
          <h2>Game Over</h2>
          <button onClick={handleStart}>Play Again</button>
          <Link to="/games">
            <button>Return to Games List</button>
          </Link>
        </>
      ) : (
        <>
          <div className="board">
            {Array.from({ length: 20 }).map((_, row) =>
              Array.from({ length: 20 }).map((_, col) => (
                <div
                  key={`${row}-${col}`}
                  className={`cell ${
                    snake.some(segment => segment.x === col && segment.y === row)
                      ? 'snake'
                      : ''
                  } ${food.x === col && food.y === row ? 'food' : ''}`}
                />
              ))
            )}
          </div>
          <button onClick={handleStart}>Start</button>
        </>
      )}
    </div>
  );
};

export default SnakeChase;
