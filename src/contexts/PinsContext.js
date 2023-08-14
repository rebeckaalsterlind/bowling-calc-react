import React, { createContext, useState } from "react";
import { GetNumRounds as GetPins } from "../helpers/helper";
export const PinsContext = createContext();

export function PinsProvider(props) {
  const initialPins = GetPins(11, 0);
  const [pins, setPins] = useState(initialPins);
  const [remainingPins, setRemainingPins] = [useState(initialPins)];

  const updatePins = (knockedDown) => {
    const remainingPins = GetPins(11 - knockedDown, 0);
    setPins(remainingPins);
  };

  const resetPins = () => setPins(initialPins);

  return (
    <PinsContext.Provider value={{ pins, updatePins, resetPins }}>
      {props.children}
    </PinsContext.Provider>
  );
}
