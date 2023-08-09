import React, { useContext } from "react";
import "./ScoreCard.css";
import "../CssLib.css";
import { IPlayer } from "../types/players";
import { PlayersContext } from "../contexts/PlayersContext";
import Round from "./Round";
import Hdcp from "./Hdcp";
import MaxPossible from "./MaxPossible";
interface Props {
  player: IPlayer;
}
function ScoreCard({ player }: Props) {
  const roundNumbers: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  const { activePlayer, updateActivePlayer } = useContext(PlayersContext);
  const isActive = (playerId: string) => playerId === activePlayer.id;

  return (
    <section
      className={`scorecard ${isActive(player.id) ? "active-player" : ""}`}
      onClick={updateActivePlayer(player)}
    >
      {roundNumbers.map((num) => (
        <>
          <Round key={num} num={num} />
        </>
      ))}
      <Hdcp />
      <MaxPossible />
    </section>
  );
}

export default ScoreCard;
