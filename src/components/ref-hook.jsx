import { useRef } from "react";
export const RefHook = () => {
  const ref = useRef();
  return (
    <div>
      <h4 ref={ref}>Hello</h4>
      <input type="text" placeholder="helloo" />
      <button
        onClick={() => {
          console.log(ref.current);
        }}
      >
        Click Me
      </button>
    </div>
  );
};
