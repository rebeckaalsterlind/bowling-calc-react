import "./BowlingCalculator.css";
import PinBoard from "./pins/PinBoard";
import AddPlayerForm from "./players/AddPlayerForm";
import ScoreBoard from "./scorecard/ScoreBoard";
import { PlayersProvider } from "./contexts/PlayersContext";
import { PinsProvider } from "./contexts/PinsContext";
import { ScoreProvider } from "./contexts/ScoreContext";
function BowlingCalculator() {
  return (
    <>
      <PlayersProvider>
        <PinsProvider>
          <ScoreProvider>
            {" "}
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
              <ScoreBoard />
            </main>
          </ScoreProvider>
        </PinsProvider>
      </PlayersProvider>
    </>
  );
}

export default BowlingCalculator;
