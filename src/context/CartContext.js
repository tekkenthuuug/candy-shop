import React, { useReducer } from "react";

const CartStateContext = React.createContext();
const CartDispacthContext = React.createContext();

const cartReducer = (prevState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM":
      return [...prevState, payload]
    case "REMOVE_ITEM":
      // @TODO
      break;
    default:
      throw new Error(`Unahdled action type: ${type}`)
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);
  return (
    <CartStateContext.Provider value={state}>
      <CartDispacthContext.Provider value={dispatch}>
        {children}
      </CartDispacthContext.Provider>
    </CartStateContext.Provider>
  ) 
}

const useCartState = () => {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCartState must be used within a CartProdiver")
  }
  return context;
}

const useCartDispatch = () => {
  const context = React.useContext(CartDispacthContext);
  if (context === undefined) {
    throw new Error("useCartDispatch must be used within a CartProdiver")
  }
  return context;
}


export { CartProvider, useCartState, useCartDispatch };