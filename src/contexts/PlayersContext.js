import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import useToggleState from "../hooks/useToggleState";
export const PlayersContext = createContext();

export function PlayersProvider(props) {
  const [players, setPlayers] = useState([
    { name: "first player", id: uuid(), score: [] },
  ]);

  const [showAddPlayer, toggle] = useToggleState(true);

  const addPlayer = (name) => {
    if (name) {
      setPlayers([...players, { name: name, id: uuid(), score: [] }]);
    }
    toggle();
  };

  return (
    <PlayersContext.Provider
      value={{ players, addPlayer, showAddPlayer, toggle }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
}
