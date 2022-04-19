export default function Button({ count, setCount }) {
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>{count}</button>;
}
