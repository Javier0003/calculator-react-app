import { useState } from "react";
import { Screen } from "./components/screen";
import { Keyboard } from "./components/keyboard";
import { Operators } from "./components/operators";
import styles from "./styles/main.module.css";

const cantStart = [",", "0", "+", "x", "/", "÷"];
const cantRepeat = ["÷", "+"];

function App() {
  const [state, setState] = useState<string>("");
  const [hiddenState, setHiddenState] = useState<string>("");
  const [justCalculated, setJustCalculated] = useState<boolean>(false);
  const addNumber = (e: string) => {
    if (justCalculated === true) {
      setHiddenState("");
      setState("");
      setJustCalculated(false);
    }

    if (state === "" && cantStart.includes(e)) return;
    setHiddenState(hiddenState + e);
    setState(state + e);
  };

  const addOperator = (e: string) => {
    if (state === "" && cantStart.includes(e)) return;
    if (cantRepeat.includes(e) && state.slice(-1) === e) return;
    if (state.slice(-1) === "x" && state.slice(-2) === "x") return;

    if (e === "x") {
      setHiddenState(state + "*");
    }

    if (e === "÷") {
      setHiddenState(state + "/");
    }

    if (e !== "÷" && e !== "x") {
      setHiddenState(hiddenState + e);
    }

    setState(state + e);
  };

  const removeNumber = () => {
    setState(state.slice(0, -1));
    setHiddenState(hiddenState.slice(0, -1));
  };

  const solve = () => {
    setJustCalculated(true);
    setState(eval(hiddenState).toString());
    setHiddenState(eval(hiddenState).toString());
  };

  //last thing we are on is trying not to be able to repeat the operators
  return (
    <div className={styles.container}>
      <Screen values={state} />
      <Keyboard addNumber={addNumber} />
      <Operators
        addOperator={addOperator}
        solve={solve}
        removeNumber={removeNumber}
        addNumber={addNumber}
      />
    </div>
  );
}

export default App;
