import * as React from "react";

interface Props {
  toggleAddPlayer: Function;
}

function AddPlayer({ toggleAddPlayer }: Props) {
  return (
    <button type="submit" onClick={() => toggleAddPlayer}>
      Add new player
    </button>
  );
}

export default AddPlayer;
