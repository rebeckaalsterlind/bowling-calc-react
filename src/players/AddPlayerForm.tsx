import React, { useContext } from "react";
import useInputState from "../hooks/useInputState";
import { PlayersContext } from "../contexts/PlayersContext";

function AddPlayerForm() {
  const [value, handleChange, reset] = useInputState("");

  const { addPlayer, showAddPlayer, toggle } = useContext(PlayersContext);

  return (
    <>
      {showAddPlayer ? (
        <button onClick={toggle}>Add new player</button>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addPlayer(value);
            reset();
          }}
        >
          <input type="text" value={value} onChange={handleChange} />
          <button type="submit">Add</button>
        </form>
      )}
    </>
  );
}

export default AddPlayerForm;
