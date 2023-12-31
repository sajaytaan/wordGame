import React from "react";
import Input from "../Input";
// import GuessList from "../GuessList";
import Guess from "../Guess";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Lose from "../Banners/Lose";
import Win from "../Banners/Win";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Restart from "../Restart";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [restart, setRestart] = React.useState(false);

  const hasMatch =
    guesses.filter(function (guess) {
      return guess === answer;
    }).length > 0;

  if (restart) {
    window.location.reload();
  }

  const lose = NUM_OF_GUESSES_ALLOWED === guesses.length && !hasMatch;

  return (
    <>
      {hasMatch && <Win guesses={guesses} />}
      {lose && <Lose answer={answer} />}
      {(hasMatch || lose) && <Restart setRestart={setRestart} />}

      <Guess guesses={guesses} answer={answer} />
      <Input
        guesses={guesses}
        setGuesses={setGuesses}
        hasMatch={hasMatch}
        lose={lose}
      />
    </>
  );
}

export default Game;
