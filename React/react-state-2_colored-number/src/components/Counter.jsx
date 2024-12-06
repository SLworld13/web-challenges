import { useState } from "react"; /* import usestate */
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCount] =
    useState(0); /* aktueller zustand .state. wird geändert mit .setState. */

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} /> {/* value von 0 auf count setzen. */}
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() =>
            setCount(count + 1)
          } /* event wenn klick dann macht setcount +1 bei count */
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
