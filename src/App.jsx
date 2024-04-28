import { useReducer } from "react"
import { DigitButton } from "./DigitButton";
import { OperationButton } from "./OperationButton";
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
    <OperationButton operation="%" dispatch={dispatch}/>
    <DigitButton digit="1" dispatch={dispatch}/> 
    <DigitButton digit="2" dispatch={dispatch}/>     
    <DigitButton digit="3" dispatch={dispatch}/> 
    <OperationButton operation="*" dispatch={dispatch}/>
    <DigitButton digit="4" dispatch={dispatch}/> 
    <DigitButton digit="5" dispatch={dispatch}/> 
    <DigitButton digit="6" dispatch={dispatch}/> 
    <OperationButton operation="+" dispatch={dispatch}/>
    <DigitButton digit="7" dispatch={dispatch}/>     
    <DigitButton digit="8" dispatch={dispatch}/> 
    <DigitButton digit="9" dispatch={dispatch}/>     
    <OperationButton operation="-" dispatch={dispatch}/>
    <OperationButton operation="." dispatch={dispatch}/>
    <DigitButton digit="0" dispatch={dispatch}/> 
    <button className="span-two">=</button>
  </div>
  )
}

export default App