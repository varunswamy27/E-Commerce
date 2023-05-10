import React from 'react';
import styles from '../styles/pages/Cart.module.scss';
import CommanBanner from '../components/CommanBanner';
import { AiOutlineMinusSquare, AiOutlinePlusSquare, AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/Footer';
import { addToCart, deleteFromCart } from "../action/cartAction";

const Cart = () => {

    const dispatch = useDispatch();

    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems;
    let totalPrice = cartItems.reduce((x, item) => x + item.price * item.quantity, 0);
    console.log(totalPrice);

    let deliveryPrice = 100;


    return (
        <div className={styles.cart_main}>
            <CommanBanner title="My Cart" />
            <div className={`${styles.cart}`}>
                <div className='container'>
                    {cartItems?.length === 0 || null ?
                        <p className='section_spacing empty text_lg'>Your<span><AiOutlineShoppingCart />Cart</span> is Empty</p>
                        :
                        <>
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

                                        {cartItems?.map((item, id) => {
                                            return (
                                                <tr key={id}>
                                                    <td className='text_sm'><img className={styles.cartimg} src={item.productImage} alt="" /></td>
                                                    <td className='text_sm'>{item.name}</td>
                                                    <td className={`${styles.price} text_sm`}>₹{item.price}</td>
                                                    <td>
                                                        <div className={styles.quantity}>
                                                            <AiOutlineMinusSquare
                                                                className={styles.icon}
                                                                onClick={() => { dispatch(addToCart(item.name, item.price, item.productImage, item.productId, item.quantity - 1)) }}
                                                            />
                                                            <span className='text_sm'>{item.quantity}</span>
                                                            <AiOutlinePlusSquare
                                                                className={styles.icon}
                                                                onClick={() => { dispatch(addToCart(item.name, item.price, item.productImage, item.productId, item.quantity + 1)) }}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className={`${styles.price} text_sm`}>₹{item.price * item.quantity}</td>
                                                    <td className='removeItem' onClick={() => dispatch(deleteFromCart(item))}>✖</td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.checkout}>
                                <p className={`${styles.title} text_reg`}>Cart Totals</p>
                                <div className={styles.amounts}>
                                    <p className='text_xs'>Subtotal</p>
                                    <p className='text_xs'>₹{totalPrice}</p>
                                </div>
                                <div className={styles.amounts}>
                                    <p className='text_xs'>Delivery</p>
                                    <p className='text_xs'>₹{totalPrice < 5000 ? deliveryPrice : 0}</p>
                                </div>
                                <div className={styles.amounts}>
                                    <p className='text_xs'>Discount</p>
                                    <p className='text_xs'>₹0</p>
                                </div>
                                <div className={styles.amounts}>
                                    <p className='text_xs'>TOTAL</p>
                                    <p className='text_xs'><span>₹{totalPrice < 5000 ? totalPrice + deliveryPrice : totalPrice}</span></p>
                                </div>
                            </div>
                            <div className={styles.btnBox}>
                                <button className={styles.checkoutBtn}>Proceed to Checkout</button>
                            </div>
                        </>
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart;