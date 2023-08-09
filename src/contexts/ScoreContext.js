import React, { createContext, useState } from "react";
export const ScoreContext = createContext();

export function ScoreProvider(props) {
  const [score, setScore] = useState({
    firstRoll: null,
    secondRoll: null,
    total: null,
  });
  const updateScore = (val) => {
    console.log("update score", val);
  };
  return (
    <ScoreContext.Provider value={{ score, updateScore }}>
      {props.children}
    </ScoreContext.Provider>
  );
}
