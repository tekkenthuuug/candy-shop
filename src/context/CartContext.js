import React, { useReducer, useEffect } from "react";

import fetchJSON from "../utils/fetchJSON";
import { API_BASE_URL } from "../utils/constants";

const CartStateContext = React.createContext();
const CartDispacthContext = React.createContext();

const addItemToStorageCart = (itemId) => {
  const newLocalStorageCart = JSON.parse(localStorage.getItem("cart"));
  if (newLocalStorageCart[itemId]) {
    newLocalStorageCart[itemId] += 1;
  } else {
    newLocalStorageCart[itemId] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(newLocalStorageCart));
} 

const cartReducer = (prevState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":
      const prevStateCopy = {...prevState};
      if (prevState[payload.id]) {
        prevStateCopy[payload.id]["quantity"] += 1;
      } else {
        prevStateCopy[payload.id] = payload;
        prevStateCopy[payload.id]["quantity"] = 1;
      }
      addItemToStorageCart(payload.id);
      return prevStateCopy;
    case "REMOVE_ITEM":
      // @TODO
      break;
    case "SET_ITEMS":
      return payload;
    case "CLEAR_CART":
      localStorage.setItem("cart", "{}");
      return {};
    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

const CartProvider = ({ children }) => {
  // Cart is a hashset { itemId : { ...itemProperties, quantity: number } }
  const [state, dispatch] = useReducer(cartReducer, {});

  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "{}");
    }
    const localStorageCart = JSON.parse(localStorage.getItem("cart"));
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