export const outfitReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_OUTFIT':
      return [...state, {
        prodStyleId: action.outfit.prodStyleId,
        prodCategory: action.outfit.prodCategory,
        prodName: action.outfit.prodName,
        imageUrl: action.outfit.imageUrl,
        price: action.outfit.price,
        sale: action.outfit.sale
      }]
    case 'REMOVE_OUTFIT':
      return state.filter((outfit) => outfit.prodStyleId !== action.prodStyleId)
    default:
      return state
  }
}