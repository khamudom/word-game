import React, { useState } from 'react';

function WordInput({ handleSubmitGuesses, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert('Please enter exactly 5 characters');
      return;
    }
    // passing the the tentative guess value up
    handleSubmitGuesses(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        required
        disabled={gameStatus !== 'running'}
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        onChange={(event) => {
          const nextTentativeGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextTentativeGuess);
        }}
      />
    </form>
  );
}

export default WordInput;
