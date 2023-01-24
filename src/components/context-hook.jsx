import { useContext } from "react";
import { CounterContext } from "../context/counter-context";
import { UserContext } from "../context/user-context";
export const ContextHook = () => {
  const { count, setCount } = useContext(CounterContext);
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.firstName}</h1>
      <h2>{count}</h2>
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
