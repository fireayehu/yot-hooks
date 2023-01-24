import { useState, useEffect } from "react";

export const EffectHook = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("useEffect Called!!");
  }, [count, count2]);
  return (
    <div>
      <h2>{count}</h2>
      <h2>{count2}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Click Me 2
      </button>
    </div>
  );
};
