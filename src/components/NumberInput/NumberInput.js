import React, { useReducer, useEffect } from 'react'

import "./NumberInput.scss";

const checkState = (initialState, min, max) => {
  return initialState < min ? min : initialState > max ? max : initialState;
}


const NumberInput = ({ initialState, setter, min = 1, max = 50 }) => {
  const stateReducer = (prevState, { type, payload }) => {
    switch (type) {
      case "INCREMENT":
        return checkState(prevState + 1, min, max);
      case "DECREMENT":
        return checkState(prevState - 1, min, max);
      case "SET":
        return checkState(Number(payload), min, max);
      default: 
        return prevState;
    }
  }

  const [state, dispatch] = useReducer(stateReducer, checkState(initialState, min, max));
  
  useEffect(() => {
    if (state) {
      setter(state);
    }
    // eslint-disable-next-line
  }, [state])

  useEffect(() => {
    dispatch({ type: "SET", payload: initialState })
    // eslint-disable-next-line
  }, [initialState])

  return (
    <div className="number-input">
      <span onClick={() => dispatch({ type: "DECREMENT" })}>
        &#9664;
      </span>
      <input 
        type="number" 
        value={state || initialState}
        onChange={(e) => dispatch({ type: "SET", payload: e.target.value })}
      />
      <span onClick={() => dispatch({ type: "INCREMENT" })}>
        &#9654; 
      </span>
    </div>
  )
}

export default React.memo(NumberInput);
