import React from 'react';

function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => {
        return (
          <p key={index} className="guess">
            {guess}
          </p>
        );
      })}
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
