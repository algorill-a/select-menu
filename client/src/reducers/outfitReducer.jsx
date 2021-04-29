/* eslint-disable import/prefer-default-export */
export const outfitReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_OUTFIT':
      return action.value;
    case 'REMOVE_OUTFIT':
      return state.filter((outfit) => outfit.prodStyleId !== action.value);
    default:
      return state;
  }
};
