export const selectedCategoriesReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECT":
      const value = action.payload;
      if (value === undefined) {
        state = [];
      } else if (state.includes(value)) {
        state = state.filter((c) => c !== value);
      } else {
        state = [...state, value];
      }
    return state

    default:
      return state;
  }
};
