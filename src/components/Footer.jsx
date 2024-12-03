import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer} >
      <div className={styles.container}>
        <div className={styles.footercolumn1}> 
          <img className={styles.footerlogo} src="../assets/LOGO 2.png" alt="Logo" /> 
          <div>
            <Link to="/">
              <img className={styles.storebadge} src="/assets/app-store-badges-en 1.png" alt="Download on the App Store" /> 
            </Link>
          </div>
          <p className={styles.paracentre}>Company /490039-445, Registered with<br />House of companies</p> 
        </div>

        <div className={styles.footercolumn2}> 
          <h4>Get Exclusive Deals in your Inbox</h4>
          <form className={styles.subscribeform}> 
            <input type="email" placeholder="youremail@gmail.com" />
            <button type="submit" className={styles.subscribebtn}>Subscribe</button> 
          </form>

          <p className={styles.paracentre} style={{ marginLeft: "30px" }}> 
            We won't spam, read our <Link style={{ textDecoration: "underline", color: "#000" }} to="/">email policy</Link>
          </p>
          <div className={styles.socialicons}> 
            <img className={styles.icons} src="/assets/facebook.png" alt="facebook" /> 
            <img className={styles.icons} src="/assets/instagram.png" alt="instagram" /> 
            <img className={styles.icons} src="/assets/TikTok.png" alt="tiktok" /> 
            <img className={styles.icons} src="/assets/Snapchat.png" alt="snapchat" /> 
          </div>
        </div>

        <div className={styles.footercolumn3}> 
          <h4>Legal Pages</h4>
          <ul className={styles.pageslinks} style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}> 
            <Link style={{ textDecoration: "underline", color: "#000" }} to="/">Terms and conditions</Link>
            <Link style={{ textDecoration: "underline", color: "#000" }} to="/">Privacy</Link>
            <Link style={{ textDecoration: "underline", color: "#000" }} to="/">Cookies</Link>
            <Link style={{ textDecoration: "underline", color: "#000" }} to="/">Modern Slavery Statement</Link>
          </ul>
        </div>

        <div className={styles.footercolumn3}> 
          <h4>Important Links</h4>
          <ul style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}> 
            <Link style={{ textDecoration: "underline", color: "#000" }} to="/">Get Help</Link>
            <Link style={{ textDecoration: "underline", color: "#000" }} to="/">Add your restaurant</Link>
            <Link style={{ textDecoration: "underline", color: "#000" }} to="/">Sign up to deliver</Link>
            <Link style={{ textDecoration: "underline", color: "#000" }} to="/">Create a business account</Link>
          </ul>
        </div>
      </div>

      <div className={styles.footerbottom}> 
        <p className={styles.fb1}>Order.uk Copyright 2024, All Rights Reserved.</p>
        <p className={styles.fb2}> 
          <Link style={{color: "#fff" }} to="/">Privacy Policy</Link>
          <Link style={{color: "#fff" }} to="/">Terms</Link>
          <Link style={{color: "#fff" }} to="/">Pricing</Link>
          <Link style={{color: "#fff" }} to="/">Do not sell or share my personal information</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;