import React, { createContext, useContext, useState } from "react";
import { PlayersContext } from "../contexts/PlayersContext";
import { GetPlayer, GetUpdatedScore } from "../helpers/helper";
export const ScoreContext = createContext();

export function ScoreProvider(props) {
  const { players, activePlayer } = useContext(PlayersContext);
  const [firstScore, setFirstScore] = useState(null);
  const [secondScore, setSecontScore] = useState(null);
  const [totals, setTotals] = useState(null);

  return <ScoreContext.Provider>{props.children}</ScoreContext.Provider>;
}
