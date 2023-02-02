import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput from '../WordInput/WordInput';
import GuessResult from '../GuessResult/GuessResult';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import BannerWon from '../BannerWon/BannerWon';
import BannerLost from '../BannerLost/BannerLost';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // state that hold sn array of word items.
  const [guesses, setGuesses] = useState([]);

  // game status that tracks running \ win \ lost.
  const [gameStatus, setGameStatus] = useState('running');

  function handleSubmitGuesses(tentativeGuess) {
    // The guesses array is staled. I create a new guesses array.
    const nextGuesses = [...guesses, tentativeGuess];

    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      {gameStatus}
      <GuessResult guesses={guesses} answer={answer} />
      <WordInput
        handleSubmitGuesses={handleSubmitGuesses}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && <BannerWon numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <BannerLost answer={answer} />}
    </>
  );
}

export default Game;
