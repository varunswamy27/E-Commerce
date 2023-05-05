

export const addToCart = (name, price, productImage, productId) => (dispatch, getState) => {
    var cartItem = {
        name,
        price,
        productImage,
        productId
    };
    dispatch({type: 'ADD_TO_CART', payload: cartItem});
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
}