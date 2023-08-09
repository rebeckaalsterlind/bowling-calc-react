import React, { createContext, useState } from "react";
export const PinsContext = createContext();

export function PinsProvider(props) {
  const initialPins = Array.from({ length: 11 }, (_, i) => i);
  const [pins, setPins] = useState(initialPins);

  const updatePins = (knockedDown) => {
    const remainingPins = Array.from({ length: 11 - knockedDown }, (_, i) => i);
    setPins(remainingPins);
  };

  const resetPins = () => setPins(initialPins);

  return (
    <PinsContext.Provider value={{ pins, updatePins, resetPins }}>
      {props.children}
    </PinsContext.Provider>
  );
}
