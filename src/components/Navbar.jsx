import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar} >
      <div className={styles.navcart} >
        <p className={styles.promocode} > 🌟 &nbsp; Get 5% Off your first order, <span style={{ color: "#FC8A06", fontWeight: "700" }} >Promo: ORDER5</span></p>
        <span className={styles.address} >
          <img className={styles.location} src="/assets/location.png" alt="" />
          <p>Regent Street, A4, A4201, London</p>
          <p style={{ color: "#FC8A06" }} >Change Location</p>
        </span>
        <div className={styles.cart} >
          {(localStorage.getItem("authToken")) ? (
            <span className={styles.basket}>
              <img className={styles.basketpng} src="/assets/Full Shopping Basket.png" alt="Shopping Basket" />
              <h1>My Cart</h1>
            </span>
          ) : ""}

          <span className={styles.emptytab} ></span>
          <span className={styles.forward} > <img className={styles.forwardpng} src="/assets/Forward Button.png" alt="" /> </span>
        </div>
      </div>
      <div className={styles.navmenu} >
        <img className={styles.logoimg} src="/assets/LOGO 1.png" alt="orderfood " />
        <div className={styles.menustab}>
          <Link to="/" className={styles.menu}>Home</Link>
          <Link to="/menu" className={styles.menu}>Browse Menu</Link>
          <Link to="/offers" className={styles.menu}>Special Offers</Link>
          <Link to="/restaurants" className={styles.menu}>Restaurants</Link>
          <Link to="/track-order" className={styles.menu}>Track Order</Link>
        </div>
        <div className={styles.logintab} >
          <div className={styles.loginbtn} >
            <img className={styles.userimg} src="/assets/Male User.png" alt="" />
            <Link className={styles.loginlink} to="/loginuser" >Login</Link>/
            <Link className={styles.loginlink} to="/createuser" >Signup</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;