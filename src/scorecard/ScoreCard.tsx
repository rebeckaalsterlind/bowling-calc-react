import React, { useContext } from "react";
import "./ScoreCard.css";
import "../CssLib.css";
import Rounds from "./Rounds";
import Hdcp from "./Hdcp";
import MaxPossible from "./MaxPossible";
import { IPlayer } from "../types/players";
import { PlayersContext } from "../contexts/PlayersContext";

function ScoreCard() {
  const { players } = useContext(PlayersContext);
  console.log("playsefse", players);
  const rounds: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section className={"scorecard-container"}>
      <header className={"scorecard-header"}>
        <div className={"scorecard-item"}>Player</div>
        {rounds.map((round) => (
          <div className={"scorecard-item"}>{round}</div>
        ))}
        <Hdcp />
        <MaxPossible />
      </header>
      {players.map((player: IPlayer) => (
        <Rounds player={player} rounds={rounds} key={player.id} />
      ))}
    </section>
  );
}

export default ScoreCard;
