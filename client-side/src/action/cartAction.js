

export const addToCart = (name, price) => (dispatch,getState) => {
    var cartItem = {
        name,
        price
    };
    dispatch({type: 'ADD_TO_CART', payload: cartItem});
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
}