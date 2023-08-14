import * as React from "react";
import "./Round.css";
import { IPlayer, IScore } from "../types/players";

interface Props {
  num: number;
  scores: IScore;
}

function Round({ num, scores }: Props) {
  return (
    <div className={"scorecard-round"}>
      <header className={"scorecard-header"}>{num}</header>
      <div className={"score-box"}>
        <div className={"score-box-top"}>
          <div className={"first-score"}>{scores.firstRoll}</div>
          <aside className={"second-score"}>{scores.secondRoll}</aside>
        </div>
        <div className={"totals"}>{scores.total}</div>
      </div>
    </div>
  );
}

export default Round;
