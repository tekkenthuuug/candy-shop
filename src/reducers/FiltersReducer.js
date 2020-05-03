const filtersReducer = (state, action) => {
  const newFilters = [...state];
  switch (action.type) {
    case "ADD_FILTER":
      return [...state, action.payload];
    case "REMOVE_FILTER":
      const index = newFilters.indexOf(action.payload);
      newFilters.splice(index, 1);
      return newFilters;
    default:
      throw new Error("Action type is not supported", `(${action.type})`);
  }
};

export default filtersReducer;
