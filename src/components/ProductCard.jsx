import React from 'react'
import styles from './ProductCard.module.css';

const ProductCard = ({ foodName, foodPrice, foodImage, foodDescription, onAddToCart }) => {
    return (
    <>
        <div className={styles.PCcontainer} >
            <div className={styles.PCdetails} >
                <h3>{foodName}</h3>
                <p>{foodDescription}</p>
                <h1>₹ {foodPrice}</h1>
            </div>
            <div 
            className={styles.PCimgbox}
            style={{ backgroundImage: `url(${foodImage})` }}
            >
                <div className={styles.AddToCart} >
                    <img className={styles.AddToCartimg} onClick={onAddToCart} src="assets/add to cart.png" alt="Add to Cart" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard









