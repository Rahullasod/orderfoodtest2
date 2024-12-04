import React from 'react'
import styles from './ProductCard.module.css';

const ProductCard = (props) => {
    const handleAddToCart = () =>{
        
    };

    return (
    <>
        <div className={styles.PCcontainer} >
            <div className={styles.PCdetails} >
                <h3>{props.foodName}</h3>
                <p>{props.foodDescription}</p>
                <h1>₹ {props.foodPrice}</h1>
            </div>
            <div 
            className={styles.PCimgbox}
            style={{ backgroundImage: `url(${props.foodImage})` }}
            >
                <div className={styles.AddToCart} >
                    <img onClick={handleAddToCart} className={styles.AddToCartimg} src="assets/add to cart.png" alt="Add to Cart" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard