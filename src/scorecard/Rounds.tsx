import Round from "./Round";
import { IPlayer } from "../types/players";
import "./Rounds.css";
interface Props {
  player: IPlayer;
  rounds: number[];
}
function Rounds({ player, rounds }: Props) {
  return (
    <div className={"player-card"}>
      <div className={"scorecard-item"}>{player.name}</div>
      {rounds.map((round) => (
        <Round key={round} />
      ))}
      <div className={"scorecard-item"}></div>
      <div className={"scorecard-item"}></div>
    </div>
  );
}

export default Rounds;
