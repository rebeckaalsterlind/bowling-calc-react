import { useState } from "react";

function useToggleState(initialVal: boolean = false): any {
  const [state, setState] = useState(initialVal);
  const toggleState = () => setState(!state);

  return [state, toggleState];
}

export default useToggleState;
