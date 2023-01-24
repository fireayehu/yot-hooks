import { useState } from "react";

export const StateHook = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    firstName: "Abebe",
    lastName: "Kebede",
  });
  return (
    <div>
      <h2>{count}</h2>
      <p>{user.lastName}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};
