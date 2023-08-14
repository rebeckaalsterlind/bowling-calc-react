import React, { useContext } from "react";
import { PinsContext } from "../contexts/PinsContext";
import { ScoreContext } from "../contexts/ScoreContext";
import { PlayersContext } from "../contexts/PlayersContext";

interface Props {
  pin: number;
}

function Pin({ pin }: Props) {
  const { updatePins } = useContext(PinsContext);
  const { updateScore } = useContext(PlayersContext);

  return (
    <button
      onClick={() => {
        updatePins(pin);
        updateScore(pin);
      }}
    >
      {pin}
    </button>
  );
}

export default Pin;
