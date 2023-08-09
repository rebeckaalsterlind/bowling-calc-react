import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import useToggleState from "../hooks/useToggleState";
export const PlayersContext = createContext();

export function PlayersProvider(props) {
  const [players, setPlayers] = useState([
    { name: "first player", id: uuid(), hdcp: 0, score: [] },
  ]);

  const [activePlayer, setActivePlayer] = useState(players[0]);

  const updateActivePlayer = (selectedPlayer) => {
    setActivePlayer(selectedPlayer);
    console.log("activeplayer in func", activePlayer);
  };

  const [showAddPlayer, toggle] = useToggleState(true);

  const addPlayer = (name) => {
    if (name) {
      setPlayers([...players, { name: name, id: uuid(), hdcp: 0, score: [] }]);
    }
    toggle();
  };

  return (
    <PlayersContext.Provider
      value={{
        players,
        activePlayer,
        updateActivePlayer,
        addPlayer,
        showAddPlayer,
        toggle,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
}
