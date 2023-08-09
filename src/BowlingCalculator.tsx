import "./BowlingCalculator.css";
import PinBoard from "./pins/PinBoard";
import AddPlayerForm from "./players/AddPlayerForm";
import ScoreCard from "./scorecard/ScoreCard";
import { PlayersProvider } from "./contexts/PlayersContext";
import { PinsProvider } from "./contexts/PinsContext";
function BowlingCalculator() {
  return (
    <>
      <PlayersProvider>
        <PinsProvider>
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
        </PinsProvider>
      </PlayersProvider>
    </>
  );
}

export default BowlingCalculator;
