const get = () => {
    return JSON.parse(localStorage.getItem("cart"));
}

const set = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
}

const addItem = (itemId) => {
  const newLocalStorageCart = get();
  if (newLocalStorageCart[itemId]) {
    newLocalStorageCart[itemId] += 1;
  } else {
    newLocalStorageCart[itemId] = 1;
  }
  set(newLocalStorageCart);
} 

const removeItem = (itemId) => {
  const newLocalStorageCart = get();
  delete newLocalStorageCart[itemId];
  set(newLocalStorageCart);
}

const setItemQuantity = (targetId, quantity) => {
  const newLocalStorageCart = get();
  newLocalStorageCart[targetId] = quantity;
  set(newLocalStorageCart)
}


export default {
  get,
  set,
  addItem,
  removeItem,
  setItemQuantity
}