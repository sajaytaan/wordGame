import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Input({ guesses, setGuesses, hasMatch, lose }) {
  const [userGuessRef, setUserGuessRef] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const nextGuesses = [...guesses, userGuessRef];
    setGuesses(nextGuesses);
    setUserGuessRef("");
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='guess-input-wrapper'
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        pattern='[A-Z]{5}'
        value={userGuessRef}
        disabled={hasMatch || lose}
        autoComplete='off'
        onChange={(e) => {
          setUserGuessRef(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Input;
