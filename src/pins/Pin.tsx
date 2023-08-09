import React, { useContext } from "react";
import { PinsContext } from "../contexts/PinsContext";

interface Props {
  value: number;
}
function Pin({ value }: Props) {
  const { updatePins } = useContext(PinsContext);
  return (
    <button
      onClick={() => {
        updatePins(value);
      }}
    >
      {value}
    </button>
  );
}

export default Pin;
