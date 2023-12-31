import React from "react";

function Win({ guesses }) {
  const numOfTry = guesses.length;
  return (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfTry} {numOfTry > 1 ? "guesses" : "guess"}
        </strong>
        .
      </p>
    </div>
  );
}

export default Win;
