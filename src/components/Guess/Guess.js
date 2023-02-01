import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className="guess">
      {/* Split the letter into individual letters and then map them */}
      {range(5).map((num) => (
        <span className="cell" key={num}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
