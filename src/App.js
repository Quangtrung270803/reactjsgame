import React, { useState } from 'react';
import './App.css';

function App() {

  const [scoreA, setScoreA] = useState(1);
  const [scoreB, setScoreB] = useState(1);
  const [message, setMessage] = useState('');


  const increaseScore = () => {
    const random = Math.random() < 0.5 ? 'A' : 'B';
    if (random === 'A') {
      setScoreA(scoreA + 1);
    } else {
      setScoreB(scoreB + 1);
    }
    updateMessage(scoreA + (random === 'A' ? 1 : 0), scoreB + (random === 'B' ? 1 : 0));
  };


  const updateMessage = (newScoreA, newScoreB) => {
    if (newScoreA > newScoreB) {
      setMessage('A Win');
    } else if (newScoreB > newScoreA) {
      setMessage('B Win');
    } else {
      setMessage('Same Point');
    }
  };


  const resetGame = () => {
    setScoreA(1);
    setScoreB(1);
    setMessage('');
  };

  const renderSquares = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <div key={index} className="square"></div>
    ));
  };

  return (
    <div className="App">
      <h1>Current state of the game: {message}</h1>
      <div className="character">
        <h2>Character A</h2>
        <div className="squares-row">
          {renderSquares(scoreA)}
        </div>
      </div>
      <div className="character">
        <h2>Character B</h2>
        <div className="squares-row">
          {renderSquares(scoreB)}
        </div>
      </div>
      <div className="button_top">
      <button onClick={increaseScore}>Race</button>
      {(scoreA > 1 || scoreB > 1) && <button onClick={resetGame}>Reset</button>}

      </div>
      
    </div>
  );
}

export default App;
