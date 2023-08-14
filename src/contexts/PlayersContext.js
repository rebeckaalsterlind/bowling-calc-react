import React, { createContext, useEffect, useState } from "react";
import useToggleState from "../hooks/useToggleState";
import {
  CreatePlayer,
  GetActivePlayer,
  GetActiveRound,
  GetUpdatedScore,
} from "../helpers/helper";
export const PlayersContext = createContext();

export function PlayersProvider(props) {
  const [players, setPlayers] = useState([CreatePlayer()]);
  const [activePlayer, setActivePlayer] = useState(players[0]);
  const [activeRound, setActiveRound] = useState(players[0].rounds[0]);
  const [showAddPlayer, toggle] = useToggleState(true);

  const addPlayer = (name, hdcp) => {
    if (name) setPlayers([...players, CreatePlayer(name, hdcp)]);
    toggle();
  };

  const updateActivePlayer = (playerId, players) => {
    const player = GetActivePlayer(players, playerId);
    setActivePlayer(player);
  };

  const updateActiveRound = () => {
    const round = GetActiveRound(activePlayer);
    setActiveRound(round);
  };

  useEffect(() => {
    updateActiveRound();
  }, [activePlayer]);

  const updateScore = (score) => {
    const updatedPlayers = GetUpdatedScore(
      score,
      players,
      activePlayer,
      activeRound
    );
    setPlayers(updatedPlayers);
  };

  return (
    <PlayersContext.Provider
      value={{
        players,
        activePlayer,
        updateActivePlayer,
        activeRound,
        updateActiveRound,
        updateScore,
        addPlayer,
        showAddPlayer,
        toggle,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
}
