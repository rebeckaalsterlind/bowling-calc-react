import "./BowlingCalculator.css";
import PinBoard from "./pins/PinBoard";
import AddPlayerForm from "./players/AddPlayerForm";
import ScoreCard from "./scorecard/ScoreCard";
import { PlayersProvider } from "./contexts/PlayersContext";

function BowlingCalculator() {
  return (
    <>
      <PlayersProvider>
        <header>Bowling Calculator</header>
        <main
          style={{
            width: "full",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PinBoard />
          <AddPlayerForm />
          <ScoreCard />
        </main>
      </PlayersProvider>
    </>
  );
}

export default BowlingCalculator;
