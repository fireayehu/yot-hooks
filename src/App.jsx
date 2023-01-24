import { ContextHook } from "./components/context-hook";
import { EffectHook } from "./components/effect-hook";
import { RefHook } from "./components/ref-hook";
import { StateHook } from "./components/state-hook";

const Flex = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {props.children}
    </div>
  );
};

const App = () => {
  return <RefHook />;
};

export default App;
