import localCart from "../utils/localCart";

const cartReducer = (prevState, action) => {
  const { type, payload } = action;
  const prevStateCopy = {...prevState};
  switch (type) {
    case "ADD_ITEM":
      if (prevState[payload.id]) {
        prevStateCopy[payload.id]["quantity"] += 1;
      } else {
        prevStateCopy[payload.id] = payload;
        prevStateCopy[payload.id]["quantity"] = 1;
      }
      localCart.addItem(payload.id);
      return prevStateCopy;
      
    case "REMOVE_ITEM":
      localCart.removeItem(payload);
      delete prevStateCopy[payload];
      return prevStateCopy;

    case "SET_ITEM_QUANTITY":
      prevStateCopy[payload["target"]].quantity = payload["newQuantity"];
      localCart.setItemQuantity(payload["target"], payload["newQuantity"]);
      return prevStateCopy;

    case "SET_ITEMS":
      return payload;

    case "CLEAR_CART":
      localCart.set({});
      return {};

    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

export default cartReducer;