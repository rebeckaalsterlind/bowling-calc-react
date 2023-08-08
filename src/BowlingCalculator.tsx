import * as React from "react";
import { useState } from "react";
import "./BowlingCalculator.css";
import PinBoard from "./pins/PinBoard";
import AddPlayerForm from "./players/AddPlayerForm";
import ScoreCard from "./scorecard/ScoreCard";
import { v4 as uuid } from "uuid";
import { IPlayer } from "./types/players";

function BowlingCalculator() {
  const [players, setPlayers] = useState<IPlayer[]>([
    { name: "first player", id: uuid(), score: [] },
  ]);

  const [showAddPlayer, setShowAddPlayer] = useState(true);

  const addPlayer = (name: string) => {
    setPlayers([...players, { name: name, id: uuid(), score: [] }]);
    setShowAddPlayer(true);
  };

  return (
    <>
      <header>Bowling Calculator</header>
      <main
        style={{
          width: "full",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PinBoard />
        {showAddPlayer ? (
          <button onClick={() => setShowAddPlayer(!showAddPlayer)}>
            Add player
          </button>
        ) : (
          <AddPlayerForm addPlayer={addPlayer} />
        )}
        <ScoreCard players={players} />
      </main>
    </>
  );
}

export default BowlingCalculator;
