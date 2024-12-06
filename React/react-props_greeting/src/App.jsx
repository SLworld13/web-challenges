import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Lars" />
      <Greeting name="Niklas" />
      <Greeting name="Max" />
    </div>
  );
}

function Greeting({ name }) {
  return <h1> {name === "Niklas" ? "Hello, Coach!" : `Hello, ${name} ?`}</h1>;
}
