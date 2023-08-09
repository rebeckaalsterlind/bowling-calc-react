import React, { createContext, useState } from "react";
export const ScoreContext = createContext();

export function ScoreProvider(props) {
  const [score, setScore] = useState("this is the score value");
  const updateScore = () => setScore((e) => e.target.value);
  return (
    <ScoreContext.Provider value={{ score, updateScore }}>
      {props.children}
    </ScoreContext.Provider>
  );
}
