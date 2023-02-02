import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput from '../WordInput/WordInput';
import GuessResult from '../GuessResult/GuessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // state that hold sn array of word items
  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuesses(tentativeGuess) {
    // set current guesses and new tentative guess
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <WordInput handleSubmitGuesses={handleSubmitGuesses} />
    </>
  );
}

export default Game;
