export default function Child(props) {
  const sendData = () => {
    props.toParent("This message from child component to parent component");
  };
  return (
    <p>
      Child component: {props.fromParent}{" "}
      <button onClick={sendData}>Send</button>
    </p>
  );
}
