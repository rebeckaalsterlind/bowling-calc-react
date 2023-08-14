interface Props {
  maxPossible: number;
}

function MaxPossible({ maxPossible }: Props) {
  return (
    <div className={"scorecard-round"}>
      <header className={"scorecard-header totals"}>Max Possible</header>
      <div className={"scorcard-content"}>{maxPossible}</div>
    </div>
  );
}

export default MaxPossible;
