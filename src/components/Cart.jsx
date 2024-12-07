import React, { useContext } from 'react';
import { CartContext } from './ContextReducer';
import styles from './Cart.module.css';


const Cart = () => {
    const { state, dispatch } = useContext(CartContext);

    const handleRemove = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    };

    const calculateTotal = () => {
        return state.cart.reduce((total, item) => total + item.price * item.count, 0);
    };
    return (
        <div className={styles.cart} >
            <div className={styles.sharecontainer} >
                <img className={styles.shareimg} src="/assets/share-2.png" alt="" />
                <p>Share this cart<br />with your friends</p>
                <button className={styles.copybtn} >Copy Link</button>
            </div>
            <div className={styles.mybasketcontainer} >
                <div className={styles.mybasket} >
                    <img className={styles.mybasketimg} src="/assets/Full Shopping Basket.png" alt="" />
                    <h1>My Basket</h1>
                </div>
                {state.cart.map((item) => (
                    <div className={styles.items} key={item.id} >
                        <button className={styles.itemcount} >{item.count}x</button>
                        <div className={styles.itemdetails} >
                            <h2 className={styles.itemprice} >₹{item.price}</h2>
                            <h3 className={styles.itemname} >{item.name}</h3>
                            <p className={styles.itemdescription} >{item.description}</p>
                        </div>
                        <img className={styles.itemdel} onClick={() => handleRemove(item.id)}  src="/assets/Remove.png" alt="" />
                    </div>
                ))}
                <div className={styles.pricebreakup} >
                    <div className={styles.pricebreakupdetails}>
                        <h1>Sub Total:</h1><p>₹{calculateTotal()}</p>
                    </div>
                    <div className={styles.pricebreakupdetails}>
                        <h1>Discounts:</h1><p>-₹3.00</p>
                    </div>
                    <div className={styles.pricebreakupdetails}>
                        <h1>Delivery Fee:</h1><p>₹3.00</p>
                    </div>
                </div>
                <button className={styles.totalpaybtn} >
                    <p>Total to pay</p>
                    <h1>₹{calculateTotal()}</h1>
                </button>
                <button className={styles.freeitembtn} >
                    <p>Choose your free item..</p>
                    <img src="/assets/Forwarddowngrey.png" alt="" />
                </button>
                <button className={styles.freeitembtn} >
                    <p>Apply Coupon Code here</p>
                    <img src="/assets/ForwardrightButton.png" alt="" />
                </button>
                <div className={styles.DelNCollcontainer} >
                    <div className={styles.Deliverybox} >
                        <img src="/assets/Delivery Scooter.png"  alt="" />
                        <h1>Delivery</h1>
                        <p>Starts at 17:50</p>
                    </div>
                    <div className={styles.Collectbox} >
                        <img src="/assets/New Store.png" alt="" />
                        <h1 style={{ opacity: "0.5" }} >Collection</h1>
                        <p style={{ opacity: "0.5" }} >Starts at 16:50</p>
                    </div>
                </div>
                <button className={styles.checkoutbtn} >
                    <img src="/assets/Forwardrightwhite.png" alt="" />
                    <h1>Checkout!</h1>
                </button>
            </div>
        </div>
    )
}

export default Cart;

