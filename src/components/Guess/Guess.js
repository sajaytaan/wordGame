import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer }) {
  const guessArray = guesses.map((guess) => {
    return guess.split("");
  });

  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map((row, index) => {
        return (
          <p key={index} className='guess'>
            {range(5).map((colLetter, indx) => {
              const check = checkGuess(guesses[index], answer);

              return (
                <span
                  key={indx}
                  className={`cell ${
                    check ? check[indx]["status"] : ""
                  }`}
                >
                  {guessArray[index]
                    ? guessArray[index][colLetter]
                    : ""}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
