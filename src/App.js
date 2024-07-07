// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GamesList from './components/GamesList';
import TicTacToe from './components/TicTacToe';
import SnakeChase from './components/SnakeChase';
import MemoryGame from './components/MemoryGame';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar /> {/* Ensure Navbar is included here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesList />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/snake-chase" element={<SnakeChase />} />
          <Route path="/memory-game" element={<MemoryGame />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
