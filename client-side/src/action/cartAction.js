

export const addToCart = (item, quantity, price) => {
    cartItem = {
        name: item.name,
        _id: item._id,
        image: item.image,
        price: item.price,
        quantity: quantity,
    }

}