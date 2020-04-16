import React, { useReducer, useEffect } from 'react'

import "./NumberInput.scss";

const checkState = (initialState, min, max) => {
  return initialState < min ? min : initialState > max ? max : initialState;
}


const NumberInput = ({ initialState, setter, min, max }) => {
  const stateReducer = (prevState, { type, payload }) => {
    switch (type) {
      case "INCREMENT":
        return checkState(prevState + 1, min, max);
      case "DECREMENT":
        return checkState(prevState - 1, min, max);
      case "SET":
        if (!payload) {
          return;
        }
        return Number(payload);
      default: 
        return prevState;
    }
  }

  const handleIncorrectField = (e) => {
    const numberVal = Number(e.target.value);
    if (numberVal < 1) {
      e.target.value = 1;
      dispatch({ type: "SET", payload: 1 })
    }
  }

  const [state, dispatch] = useReducer(stateReducer, checkState(initialState, min, max));
  
  useEffect(() => {
    if (state) {
      setter(state);
    }
    // eslint-disable-next-line
  }, [state])

  return (
    <div className="number-input">
      <span onClick={() => dispatch({ type: "DECREMENT" })}>
        &#9664;
      </span>
      <input 
        type="number" 
        value={state || ""}
        onChange={(e) => dispatch({ type: "SET", payload: e.target.value })}
        onBlur={handleIncorrectField}
      />
      <span onClick={() => dispatch({ type: "INCREMENT" })}>
        &#9654; 
      </span>
    </div>
  )
}

export default NumberInput
