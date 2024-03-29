

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const alreadyExists = state.cartItems.find((item) => item.productId === action.payload.productId);
            if (alreadyExists) {
                return {
                    ...state, cartItems: state.cartItems.map(item => item.productId === action.payload.productId ? action.payload : item)
                }
            }
            else {
                return { ...state, cartItems: [...state.cartItems, action.payload] }
            }
        case 'DELETE_FROM_CART': 
        return{
            ...state, cartItems: state.cartItems.filter(item => item.productId !== action.payload.productId)
        }
        default:
            return state;
    }
}