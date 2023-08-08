import useInputState from "../hooks/useInputState";
interface Props {
  addPlayer: Function;
}
function AddPlayerForm({ addPlayer }: Props) {
  const [value, handleChange, reset] = useInputState("");
  return (
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
  );
}

export default AddPlayerForm;
