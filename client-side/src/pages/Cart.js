import React from 'react';
import styles from '../styles/pages/Cart.module.scss';
import CommanBanner from '../components/CommanBanner';
import { useState } from 'react';

const Cart = () => {

    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cartItems')));

    let totalPrice = 0;

    return (
        <div className={styles.cart_main}>
            <CommanBanner title="My Cart" />
            <div className={`${styles.cart}`}>
                <div className='container'>
                    {cartProducts === null ?
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
                                    </tr>

                                    {cartProducts?.map((item, id) => {
                                        const value = item.price;
                                        totalPrice = value + totalPrice
                                        return (
                                            <tr key={id}>
                                                <td className='text_sm'><img className={styles.cartimg} src="" alt="" /></td>
                                                <td className='text_sm'>{item.name}</td>
                                                <td className={`${styles.price} text_sm`}>₹{item.price}</td>
                                                <td><input type="number" /></td>
                                                <td className={`${styles.price} text_sm`}>₹80000</td>
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
                            <p className='text_xs'>₹20</p>
                        </div>
                        <div className={styles.amounts}>
                            <p className='text_xs'>Delivery</p>
                            <p className='text_xs'>₹0</p>
                        </div>
                        <div className={styles.amounts}>
                            <p className='text_xs'>Discount</p>
                            <p className='text_xs'>₹3</p>
                        </div>
                        <div className={styles.amounts}>
                            <p className='text_xs'>TOTAL</p>
                            <p className='text_xs'><span>₹{totalPrice}</span></p>
                        </div>
                    </div>
                    <div className={styles.btnBox}>
                    <button className={styles.checkoutBtn}>Proceed to Checkout</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart;