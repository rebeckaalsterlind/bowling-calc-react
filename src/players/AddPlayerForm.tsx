import React, { useContext, useState } from "react";
import useInputState from "../hooks/useInputState";
import { PlayersContext } from "../contexts/PlayersContext";

function AddPlayerForm() {
  const [name, handleName, resetName] = useInputState("");
  const [hdcp, setHdcp] = useState(0);

  // const [hdcp, handleHdcp, resetHdcp] = useInputState(0);

  const { addPlayer, showAddPlayer, toggle } = useContext(PlayersContext);

  return (
    <article>
      {showAddPlayer ? (
        <button onClick={toggle}>Add new player</button>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addPlayer(name, hdcp);
            resetName();
          }}
        >
          <input
            type="text"
            placeholder={"Name"}
            value={name}
            onChange={handleName}
          />
          <input type="number" onChange={(e) => setHdcp(34)} />
          <button type="submit">Add</button>
        </form>
      )}
    </article>
  );
}

export default AddPlayerForm;
