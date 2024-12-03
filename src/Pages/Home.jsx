import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import PopularRestro from "../components/PopularRestro";


const tabData = [
  {
    name: "Pizza & Fast Food",
    restaurants: [
      {
        title: "Chef Burgers London",
        discount: "-40%",
        image: "/assets/restro1.png",
      },
      {
        title: "Grand Ai Cafe London",
        discount: "-20%",
        image: "/assets/restro2.png",
      },
      {
        title: "Butterbrot Café London",
        discount: "-17%",
        image: "/assets/restro1.png",
      },
    ],
  },
  {
    name: "Vegan",
    restaurants: [
      {
        title: "Green Bites Cafe",
        discount: "-25%",
        image: "/assets/restro1.png",
      },
    ],
  },
  {
    name: "Sushi",
    restaurants: [
      {
        title: "Sushi Express",
        discount: "-30%",
        image: "/assets/restro2.png",
      },
    ],
  },
  {
    name: "others",
    restaurants: [
      {
        title: "Sushi Express",
        discount: "-30%",
        image: "/assets/restro1.png",
      },
    ],
  },
];
const Home = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].name);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };



  return (
    <>
      <div className={styles.container}> <Navbar /> </div>
      <div className={styles.homepage} >
        <div className={styles.bannertab} >
          <div className={styles.bannerform} >
            <p>Order Restaurant food, takeaway and groceries.</p><br />
            <h1 className={styles.bannerheading} >Feast Your Senses,<br /><span style={{ color: "#FC8A06" }} >Fast and Fresh</span></h1><br />
            <form className={styles.searchform} action="">
              <label htmlFor="">Enter a postcode to see what we deliver</label><br />
              <span style={{ display: "flex" }} >
                <input type="text" name="" placeholder="e.g. EC4R 3TE" />
                <button type="submit" className={styles.searchbtn}>Search</button>
              </span>
            </form>
          </div>
          <span className={styles.bannerimgtab} >
            <img className={styles.bannerimg} src="/assets/bannerimg1.png" alt="" />
          </span>
          <div className={styles.bannerreview} >
            <img className={styles.bannerimg2} src="/assets/bannerimg2.png" alt="" />
            <div className={styles.reviewtab} >
              <div className={styles.reviewstabs} style={{ marginLeft: "-60px" }} >
                <div className={styles.reviewlogotab} >
                  <img className={styles.reviewlogo} src="/assets/LOGO 1.png" alt="" />
                  <h2 className={styles.reviewheading} >We've Received your order!</h2>
                  <p className={styles.reviewtext} >Awaiting Restaurant acceptance </p>
                </div>
                <div className={styles.reviewnotab} >
                  <h1 className={styles.reviewnumber} >1</h1>
                  <p style={{ color: "grey", marginTop: "-20px" }} >now</p>
                </div>
              </div>
              <div className={styles.reviewstabs} >
                <div className={styles.reviewlogotab} >
                  <img className={styles.reviewlogo} src="/assets/LOGO 1.png" alt="" />
                  <h2 className={styles.reviewheading} >We've Received your order!</h2>
                  <p className={styles.reviewtext} >Awaiting Restaurant acceptance </p>
                </div>
                <div className={styles.reviewnotab} >
                  <h1 className={styles.reviewnumber} >2</h1>
                  <p style={{ color: "grey", marginTop: "-20px" }} >now</p>
                </div>
              </div>
              <div className={styles.reviewstabs} style={{ marginLeft: "-60px" }} >
                <div className={styles.reviewlogotab} >
                  <img className={styles.reviewlogo} src="/assets/LOGO 1.png" alt="" />
                  <h2 className={styles.reviewheading} >We've Received your order!</h2>
                  <p className={styles.reviewtext} >Awaiting Restaurant acceptance </p>
                </div>
                <div className={styles.reviewnotab} >
                  <h1 className={styles.reviewnumber} >3</h1>
                  <p style={{ color: "grey", marginTop: "-20px" }} >now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className={styles.tabscontainer} >
          <div className={styles.tabs}>
            <h1 className={styles.tabheading} >Up to -40% 🎊 Order.uk exclusive deals</h1>
            <div className={styles.tabbtncontainer} >
              {tabData.map((tab) => (
                <button
                  key={tab.name}
                  className={`${styles.tabbutton} ${activeTab === tab.name ? styles.active : ""}`}
                  onClick={() => handleTabClick(tab.name)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
          {/* Tab Content */}
          <div className={styles.tabContent}>

            {tabData
              .find((tab) => tab.name === activeTab)
              .restaurants.map((restaurant, index) => (
                <div
                  key={index}
                  className={styles.restaurentcard}
                  style={{ backgroundImage: `url(${restaurant.image})` }}
                >
                  <p className={styles.discounttext}>{restaurant.discount}</p>
                  <div className={styles.restrocardtext} >
                    <p>Restaurant</p>
                    <h3>{restaurant.title}</h3>
                  </div>
                </div>
              ))}

          </div>
        </div>
        {/* Dishes catagory */}
        <div className={styles.dishescontainer} >
          <h1>Order.uk Popular Categories 🤩</h1>
          <div className={styles.dishes} >
            <div className={styles.dishcard}>
              <img className={styles.dishimg} src="/assets/Burgers & Fast food.png" alt="" />
              <div className={styles.dishcardtext} >
                <h3>Burgers & Fast food</h3>
                <p>21 Restaurants</p>
              </div>
            </div>
            <div className={styles.dishcard}>
              <img className={styles.dishimg} src="/assets/Salads.png" alt="" />
              <div className={styles.dishcardtext} >
                <h3>Salads</h3>
                <p>32 Restaurants</p>
              </div>
            </div>
            <div className={styles.dishcard}>
              <img className={styles.dishimg} src="/assets/Pasta & Casuals.png" alt="" />
              <div className={styles.dishcardtext} >
                <h3>Pasta & Casuals</h3>
                <p>4 Restaurants</p>
              </div>
            </div>
            <div className={styles.dishcard}>
              <img className={styles.dishimg} src="/assets/Pizza.png" alt="" />
              <div className={styles.dishcardtext} >
                <h3>Pizza</h3>
                <p>32 Restaurants</p>
              </div>
            </div>
            <div className={styles.dishcard}>
              <img className={styles.dishimg} src="/assets/Breakfast.png" alt="" />
              <div className={styles.dishcardtext} >
                <h3>Breakfast</h3>
                <p>4 Restaurants</p>
              </div>
            </div>
            <div className={styles.dishcard}>
              <img className={styles.dishimg} src="/assets/Soups.png" alt="" />
              <div className={styles.dishcardtext} >
                <h3>Soups</h3>
                <p>32 Restaurants</p>
              </div>
            </div>
          </div>
        </div>
        {/* Popular restaurant */}
         <PopularRestro />
        {/* Second banner */}
        <div className={styles.orderbanner} >
          <img className={styles.orderbannerimg} src="/assets/Ordering APP.png" alt="" />
        </div>
        {/* Get started */}
        <div style={{ display: "flex", columnGap: "20px" }} >
          <div
            className={styles.getstartedcard}
            style={{ backgroundImage: `url(${"/assets/partnerimg.png"})` }}
          >
            <h3>Earn more with lower fees</h3>
            <div className={styles.getstarttextbox} >
              <p style={{ color: "#FC8A06" }} > Signup as a business</p>
              <h1>Partner with us</h1>
              <button>Get Started</button>
            </div>
          </div>
          <div
            className={styles.getstartedcard}
            style={{ backgroundImage: `url(${"/assets/riderimg.png"})` }}
          >
            <h3>Avail exclusive perks</h3>
            <div className={styles.getstarttextbox} >
              <p style={{ color: "#FC8A06" }} > Signup as a rider</p>
              <h1>Ride with us</h1>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        {/* Know More About Us */}
        <div className={styles.knowmorecontainer} >
          <div className={styles.kmtabs} >
            <h1>Know more about us!</h1>
            <span className={styles.kmtabsbtns} >
              <h1>Frequent Questions </h1>
              <p>Who we are? </p>
              <p>Partner Program  </p>
              <p>Help & Support</p>
            </span>
          </div>
          <div className={styles.kmcontent} >
            <div className={styles.kmfqlists} >
              <h4>How does Order.UK work?</h4>
              <h3>What payment methods are accepted?</h3>
              <h3>Can I track my order in real-time?</h3>
              <h3>Are there any special discounts orpromotions available?</h3>
              <h3>Is Order.UK available in my area?</h3>
            </div>
            <div className={styles.kmfqrightcont} >
              <div style={{ display: "flex", columnGap: "20px" }} >
                <div className={styles.kmfqordercard} >
                  <h1>Place an Order!</h1>
                  <img src="/assets/Order-food 1.png" alt="" />
                  <h3>Place order through our website or Mobile app</h3>
                </div>
                <div className={styles.kmfqordercard} >
                  <h1>Track Progress</h1>
                  <img src="/assets/food 1.png" alt="" />
                  <h3>Your can track your order status with delivery time</h3>
                </div>
                <div className={styles.kmfqordercard} >
                  <h1>Get your Order!</h1>
                  <img src="/assets/order 1.png" alt="" />
                  <h3>Receive your order at a lighting fast speed!</h3>
                </div>
              </div>
              <p>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
            </div>
          </div>
        </div>
        {/* All Numbers */}
        <div className={styles.allnumbers} >
          <div className={styles.numbercard} >
            <h2>546+</h2>
            <h1>Registered Riders</h1>
          </div>
          <div className={styles.numbercard} >
            <h2>789,900+</h2>
            <h1>Orders Delivered</h1>
          </div>
          <div className={styles.numbercard} >
            <h2>690+</h2>
            <h1>Restaurants Partnered</h1>
          </div>
          <div style={{ borderRight: "none" }} className={styles.numbercard} >
            <h2>17,457+</h2>
            <h1>Food items</h1>
          </div>
        </div>

      </div>
      <div><Footer /></div>
    </>
  )
}

export default Home;
