import React, { useContext } from "react";
import "./ScoreCard.css";
import "../CssLib.css";
import { IPlayer } from "../types/players";
import { PlayersContext } from "../contexts/PlayersContext";
import Round from "./Round";
import Hdcp from "./Hdcp";
import MaxPossible from "./MaxPossible";
import { GetNumRounds } from "../helpers/helper";

interface Props {
  player: IPlayer;
}

function ScoreCard({ player }: Props) {
  const { players, updateActivePlayer } = useContext(PlayersContext);
  const roundNumbers: number[] = GetNumRounds(10, 1);
  return (
    <section
      className={`scorecard ${player.isActive ? "active-player" : ""}`}
      onClick={() => {
        updateActivePlayer(player.id, players);
      }}
    >
      {roundNumbers.map((num, index) => (
        <>
          <Round key={num} num={num} scores={player.rounds[index].scores} />
        </>
      ))}
      <Hdcp hdcpTotals={player.hdcpTotals} />
      <MaxPossible maxPossible={player.maxPossible} />
    </section>
  );
}

export default ScoreCard;
