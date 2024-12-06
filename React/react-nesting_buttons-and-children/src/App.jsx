import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>ONE</Button>
      <Button>TWO</Button>
      <Button>THREE</Button>
      <Button>FOUR</Button>
    </main>
  );
}
function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
