import * as React from "react";
import "./PinBoard.css";
import Pin from "./Pin";
function PinBoard() {
  const pins: number[] = Array.from({ length: 11 }, (_, i) => i);

  return (
    <div>
      {pins.map((pin) => (
        <Pin key={pin} value={pin} />
      ))}
    </div>
  );
}

export default PinBoard;
