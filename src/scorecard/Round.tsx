import * as React from "react";
import "./Round.css";

interface Props {
  num: number;
}

function Round({ num }: Props) {
  return (
    <div className={"scorecard-round"}>
      <header className={"scorecard-header"}>{num}</header>
      <div className={"score-box"}>
        <aside className={"corner-box"}></aside>
        <div className={"totals-box"}></div>
      </div>
    </div>
  );
}

export default Round;
