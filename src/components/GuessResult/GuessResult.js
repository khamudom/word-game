import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} />
      ))}
      {/* OPTION: If you are using the unique Id route */}
      {/* {guesses.map(({ value, id }) => {
        return (
          <p key={id} className="guess">
            {value}
          </p>
        );
      })} */}
    </div>
  );
}

export default GuessResult;
