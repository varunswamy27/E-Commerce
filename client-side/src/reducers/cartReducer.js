

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); 
            // console.log(state.cartItems, "Rec");
            return { ...state, cartItems: [...state.cartItems, action.payload] }
        default:
            return state;
    }
}