import React, { useState, useEffect } from 'react';
import GameComponent from './GameComponent';
import './MemoryGame.css';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  // Initialize the game
  const initializeGame = () => {
    const initialCards = [
      { id: 1, img: '/assets/images/card1.jpg', flipped: false },
      { id: 2, img: '/assets/images/card2.jpg', flipped: false },
      { id: 3, img: '/assets/images/card3.jpeg', flipped: false },
      { id: 4, img: '/assets/images/card4.jpeg', flipped: false },
      { id: 5, img: '/assets/images/card5.jpeg', flipped: false },
      { id: 6, img: '/assets/images/card6.jpeg', flipped: false },
      { id: 7, img: '/assets/images/card1.jpg', flipped: false },
      { id: 8, img: '/assets/images/card2.jpg', flipped: false },
      { id: 9, img: '/assets/images/card3.jpeg', flipped: false },
      { id: 10, img: '/assets/images/card4.jpeg', flipped: false },
      { id: 11, img: '/assets/images/card5.jpeg', flipped: false },
      { id: 12, img: '/assets/images/card6.jpeg', flipped: false },
    ].sort(() => Math.random() - 0.5);
    setCards(initialCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setGameWon(false); // Reset gameWon to false when initializing the game
  };

  useEffect(() => {
    initializeGame();
  }, []);

  // Check if all pairs are matched to set gameWon
  useEffect(() => {
    if (matchedPairs === cards.length / 2 && matchedPairs !== 0) {
      setGameWon(true);
    }
  }, [matchedPairs, cards.length]);

  // Handle card click logic
  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || cards[index].flipped) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].img === cards[secondIndex].img) {
        setMatchedPairs(matchedPairs + 1);
        const newCards = cards.map((card, i) => (
          i === firstIndex || i === secondIndex ? { ...card, flipped: true } : card
        ));
        setCards(newCards);
      }
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  // Render game UI
  const renderGameUI = () => (
    <div className="memory-game">
      <div className="memory-cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`memory-card ${flippedCards.includes(index) || card.flipped ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {(flippedCards.includes(index) || card.flipped) && (
              <img src={card.img} alt={`card-${index}`} />
            )}
          </div>
        ))}
      </div>
      {gameWon && (
        <div className="memory-game-won">
          <h2>Congratulations! You've matched all pairs!</h2>
          <button onClick={initializeGame}>Play Again</button>
        </div>
      )}
    </div>
  );

  return (
    <GameComponent renderGameUI={renderGameUI} />
  );
};

export default MemoryGame;
