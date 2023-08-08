import * as React from "react";

interface Props {
  value: number;
}
function Pin({ value }: Props) {
  return <button>{value}</button>;
}

export default Pin;
