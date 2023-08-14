import "./Hdcp.css";

interface Props {
  hdcpTotals: number;
}

function Hdcp({ hdcpTotals }: Props) {
  return (
    <div className={"scorecard-round"}>
      <header className={"scorecard-header totals"}>Hdcp</header>
      <div className={"scorcard-content"}>{hdcpTotals}</div>
    </div>
  );
}

export default Hdcp;
