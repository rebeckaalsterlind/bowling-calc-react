import React, { useContext } from "react";
import "./PinBoard.css";
import Pin from "./Pin";
import { PlayersContext } from "../contexts/PlayersContext";

import { PinsContext } from "../contexts/PinsContext";
function PinBoard() {
  // const { addPlayer, showAddPlayer, toggle, initialPins } =
  useContext(PlayersContext);

  const { pins } = useContext(PinsContext);
  // const pins = Array.from({ length: 11 }, (_, i) => i);

  return (
    <div>
      {pins.map((pin: number) => (
        <Pin key={pin} value={pin} />
      ))}
    </div>
  );
}

export default PinBoard;
