import React, { useContext } from "react";
import "./PinBoard.css";
import Pin from "./Pin";
import { PinsContext } from "../contexts/PinsContext";
function PinBoard() {
  const { pins } = useContext(PinsContext);

  return (
    <article>
      {pins.map((pin: number) => (
        <Pin key={pin} value={pin} />
      ))}
    </article>
  );
}

export default PinBoard;
