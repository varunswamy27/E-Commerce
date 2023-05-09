

export const addToCart = (name, price, productImage, productId, quantity) => (dispatch, getState) => {
    var cartItem = {
        name,
        price,
        productImage,
        productId,
        quantity
    };
    if (cartItem.quantity > 10) {
        return alert(`You can only select 10 ${cartItem.name}`)
    }
    else {
        if (cartItem.quantity < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: cartItem });
            const cartItems = getState().cartReducer.cartItems;
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
        }
        else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem });
            localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
        }
    }
}

export const deleteFromCart = (product) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: product });
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}