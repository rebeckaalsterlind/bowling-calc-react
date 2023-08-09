import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import useToggleState from "../hooks/useToggleState";
export const PinsContext = createContext();

export function PinsProvider(props) {
  const initialPins = Array.from({ length: 11 }, (_, i) => i);
  const [pins, setPins] = useState(initialPins);
  const updatePins = (knockedDown) => {
    const remainingPins = Array.from({ length: 11 - knockedDown }, (_, i) => i);
    setPins(remainingPins);
  };
  return (
    <PinsContext.Provider value={{ pins, updatePins }}>
      {props.children}
    </PinsContext.Provider>
  );
}
