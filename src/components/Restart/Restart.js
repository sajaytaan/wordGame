import React from "react";

const Restart = ({ setRestart }) => {
  return (
    <button onClick={() => setRestart(true)} className='button'>
      Restart
    </button>
  );
};

export default Restart;
