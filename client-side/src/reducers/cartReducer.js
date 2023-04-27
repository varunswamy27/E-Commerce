

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.types) {
        case "ADD_TO_CART":
            return { ...state, cartItems: [...state.cartItems, action.payload] }
        default:
            return state;
    }
}