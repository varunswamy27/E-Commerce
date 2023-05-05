import React, { useEffect } from 'react';
import styles from '../styles/pages/Cart.module.scss';
import CommanBanner from '../components/CommanBanner';
import { useState } from 'react';
import Footer from '../components/Footer';

const Cart = () => {

    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cartItems')));
    const [removedItem, setRemovedItem] = useState();
    const [quanPrice, setQuanPrice] = useState(0);
    const [trValues, setTrValues] = useState([]);

    let totalPrice = 0;
    let deliveryPrice = 50;
    let quantityPrice = 0;

    const demo = (event) => {
        // const tdValues = Array.from(event.currentTarget.parentNode.children).map(td => td.textContent);
        // setTrValues(tdValues);
    }

    useEffect(() => {
        setCartProducts(JSON.parse(localStorage.getItem('cartItems')));
    }, [removedItem])

    const removeCart = (item) => {
        setRemovedItem(cartProducts.findIndex(el => el.productId == item.productId))
        if (removedItem !== -1) {
            cartProducts.splice(removedItem, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartProducts));
        }
        // const productIndex = cartProducts.findIndex(el => el.productId == item.productId);
        // if (productIndex !== -1) {
        //     cartProducts.splice(productIndex, 1);
        //     localStorage.setItem('cartItems', JSON.stringify(cartProducts));
        // }
    }

    console.log(cartProducts)


    return (
        <div className={styles.cart_main}>
            <CommanBanner title="My Cart" />
            <div className={`${styles.cart}`}>
                <div className='container'>
                    {cartProducts?.length === 0 || null ?
                        <p>Your Cart is Empty</p>
                        :
                        <div className='section_spacing'>

                            <table>
                                <tbody>
                                    <tr className='text_sm'>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>

                                    {cartProducts?.map((item, id) => {
                                        const value = item.price;
                                        totalPrice = value + totalPrice
                                        return (
                                            <tr key={id} onClick={(e) => { demo(item) }}>
                                                <td className='text_sm'><img className={styles.cartimg} src={item.productImage} alt="" /></td>
                                                <td className='text_sm'>{item.name}</td>
                                                <td className={`${styles.price} text_sm`}>₹{item.price}</td>
                                                <td>
                                                    <select onChange={(e) => { setQuanPrice(e.target.value) }} name="" id="">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </td>
                                                <td className={`${styles.price} text_sm`}>₹{totalPrice * quanPrice}</td>
                                                <td onClick={(e) => removeCart(item)}>✖</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    }
                    <div className={styles.checkout}>
                        <p className={`${styles.title} text_reg`}>Cart Totals</p>
                        <div className={styles.amounts}>
                            <p className='text_xs'>Subtotal</p>
                            <p className='text_xs'>₹{totalPrice}</p>
                        </div>
                        <div className={styles.amounts}>
                            <p className='text_xs'>Delivery</p>
                            <p className='text_xs'>₹{deliveryPrice}</p>
                        </div>
                        <div className={styles.amounts}>
                            <p className='text_xs'>Discount</p>
                            <p className='text_xs'>₹0</p>
                        </div>
                        <div className={styles.amounts}>
                            <p className='text_xs'>TOTAL</p>
                            <p className='text_xs'><span>₹{totalPrice + deliveryPrice}</span></p>
                        </div>
                    </div>
                    <div className={styles.btnBox}>
                        <button className={styles.checkoutBtn}>Proceed to Checkout</button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart;