import React from 'react';
import Banner from '../Banner/Banner';

function BannerWon({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> You got it in
        <strong>
          {' '}
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
      </p>
    </Banner>
  );
}

export default BannerWon;
