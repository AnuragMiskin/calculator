import { useReducer } from "react"
import { DigitButton } from "./DigitButton";
import "./styles.css"

export const ACTIONS={
  ADD_DIGIT:'add-digit',
  CLEAR:'clear',
  EVALUATE:'evaluate',
  DELETE_DIGIT:'delete-digit',
  CHOOSE_OPERATION:'choose-operation'
}

function reducer(state,{type,payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return{
        ...state,
        currentoperand:`${state.currentoperand || ""}${payload.digit}`
      }
  }
}

function App(){
  const [{currentoperand,previousoperand,operation},dispatch]=useReducer(reducer,{})
  return (
  <div className="calculator-grid">
    <div className="output">
      <div className="previous-operand">{previousoperand} {operation}</div>
      <div className="current-operand">{currentoperand}</div>
    </div>
    <button className="span-two">AC</button>
    <button>DEL</button>
    <button>%</button>
    <DigitButton digit="1" dispatch={dispatch}/> 
    <button>2</button>
    <button>3</button>
    <button>*</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>+</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>-</button>
    <button>.</button>
    <button>0</button>
    <button className="span-two">=</button>
  </div>
  )
}

export default App