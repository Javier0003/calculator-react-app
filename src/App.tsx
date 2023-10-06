import { useState } from "react"
import { Screen } from './components/screen'
import { Keyboard } from './components/keyboard'
import { Operators } from "./components/operators"

const cantStart = [",", "0", "+", "x", "/"]
const cantRepeat = ["÷", "x", "-", "+"]

function App() {
  const [state, setState] = useState<string>("")
  const addNumber = (e: string) => {
    if(state === "" && cantStart.includes(e)) return
    if(cantRepeat.includes(e) && state.slice(-1) === e) return
    if(e === "x"){
      setState(state + "*")
      return
    }
    if(e === "÷"){
      setState(state + "/")
      return
    }
    setState(state + e)
  }
  //last thing we are on is trying not to be able to repeat the operators
  return (
    <div style={{
      marginLeft: "40%",
      marginTop: "10%",
      border: "5px solid black",
      display: "flex",
      minWidth: "300px",
      width: "15%",
      flexWrap: "wrap",
      height: "400px",
      borderRadius: "27px"
    }}>
      <Screen 
      values={state}
      />
      <Keyboard 
      addNumber={addNumber} 
      />
      <Operators
      addNumber={addNumber} 
      /> 
    </div>
  )
}

export default App
