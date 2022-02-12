// import to set the state
import { useState } from "react";

function FirstComponent() {
  // state for the counter
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h2 className="h2">First Component</h2>
      <h3>
        {count === 0
          ? "Don't you dare to click me !"
          : `How dare you click me ${count} time${count > 1 ? "s" : ""} !`}
      </h3>
      <p>
        <button className="btn" onClick={addCount}>
          Dare-to-click
        </button>
      </p>
      <p>
        <button className="btn" onClick={resetCount}>
          Forget-me-not
        </button>
      </p>
    </div>
  );
}

export default FirstComponent;
