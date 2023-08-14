import React, { useContext, useEffect } from "react";
import "./ScoreBoard.css";
import "../CssLib.css";
import ScoreCard from "./ScoreCard";
import { IPlayer } from "../types/players";
import { PlayersContext } from "../contexts/PlayersContext";

function ScoreBoard() {
  const { players, activePlayer, activeRound } = useContext(PlayersContext);

  return (
    <article className={"scoreboard"}>
      <div>{activePlayer.name + activeRound.roundId}</div>
      {players.map((player: IPlayer, index: number) => (
        <>
          <div key={index}>
            {player.name} | Hdcp: {player.hdcp}
          </div>
          <ScoreCard player={player} key={player.id} />
        </>
      ))}
    </article>
  );
}

export default ScoreBoard;
