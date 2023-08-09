import React, { useContext } from "react";
import "./ScoreBoard.css";
import "../CssLib.css";

import ScoreCard from "./ScoreCard";
import { IPlayer } from "../types/players";
import { PlayersContext } from "../contexts/PlayersContext";

function ScoreBoard() {
  const { players } = useContext(PlayersContext);

  return (
    <article className={"scoreboard"}>
      {players.map((player: IPlayer) => (
        <>
          <div>
            {player.name} | Hdcp: {player.hdcp}
          </div>
          <ScoreCard player={player} key={player.id} />
        </>
      ))}
    </article>
  );
}

export default ScoreBoard;
