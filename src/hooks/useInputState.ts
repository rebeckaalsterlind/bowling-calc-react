import { useState } from "react";

function useInputState(initialVal: string): any {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e: { target: { value: any } }) =>
    setValue(e.target.value);

  const reset = () => setValue("");
  return [value, handleChange, reset];
}

export default useInputState;
