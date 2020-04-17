import React, { useReducer, useEffect } from "react";

import fetchJSON from "../utils/fetchJSON";
import localCart from "../utils/localCart";

import cartReducer from "../reducers/CartReducer";

import { API_BASE_URL } from "../utils/constants";

const CartStateContext = React.createContext();
const CartDispacthContext = React.createContext();

const CartProvider = ({ children }) => {
  // Cart is a hashset { itemId : { ...itemProperties, quantity: number } }
  const [state, dispatch] = useReducer(cartReducer, {});

  useEffect(() => {
    if (!localCart.get()) {
      localCart.set({});
    }
    const localStorageCart = localCart.get();
    const itemsIds = Object.keys(localStorageCart);
    if (itemsIds.length) {
      fetchJSON(`${API_BASE_URL}/items/${itemsIds.join(",")}`, { method: "get" }).then(data => {
        const items = data.result.reduce((acc, item) => {
          item.quantity = localStorageCart[item.id];
          acc[item.id] = item;
          return acc;
        }, {})
        dispatch({ type: "SET_ITEMS", payload: items });
      })
    }
    // eslint-disable-next-line
  }, [])

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