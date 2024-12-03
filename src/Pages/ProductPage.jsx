import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import PopularRestro from '../components/PopularRestro';
import styles from './ProductPage.module.css';
import Map from '../components/Map';
import Cart from '../components/Cart';
// import Reviews from '../components/Reviews';


const ProductPage = () => {

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);

    // console.log(response[0],response[1]);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
      <Navbar />
      {/* top banner */}
      <div className={styles.topbanner} style={{ backgroundImage: "url('/assets/mcbanner2.png')" }} >
        <div className={styles.bannerleft} >
          <p style={{ width: "100%" }} >I'm lovin' it!</p>
          <h1 style={{ width: "100%" }} >McDonald's East London</h1>
          <button>
            <img src="/assets/Order Completed.png" alt="" />
            McDonald’s East London
          </button>
          <button>
            <img src="/assets/Motocross.png" alt="" />
            Delivery in 20-25 Minutes
          </button>
        </div>
        <div style={{ backgroundImage: "url('/assets/mcbanner.png')" }} className={styles.bannerright} >
          <img className={styles.tbtotalreviews} src="/assets/totalreviews.png" alt="" />
        </div>
        <div className={styles.restrotime} >
          <img src="/assets/clock.png" alt="" />
          <h3>Open until 3:00 AM</h3>
        </div>
      </div>
      {/* search */}
      <div className={styles.searccontainer} >
        <h1>All Offers from McDonald’s East London</h1>
        <input type="search" placeholder="Search from menu..." style={{ backgroundImage: "url('/assets/Search More.png')" }} />
      </div>
      {/* product catagory lists */}
      <div className={styles.productcatagorylist} >
        <ul>
          <li style={{ backgroundColor: "#000" }} >Offers</li>
          <li>Burgers</li>
          <li>Fries</li>
          <li>Snacks</li>
          <li>Salads</li>
          <li>Cold drinks</li>
          <li>Happy Meal®</li>
          <li>Desserts</li>
          <li>Hot drinks</li>
          <li>Sauces</li>
          <li>Orbit®</li>
        </ul>
      </div>
      {/* left container */}
      <div className={styles.leftNright} >
        <div className={styles.leftcontainer} >
          {/* Discount offers */}
          <div className={styles.discontainers} >
            <div className={styles.restaurentcard} style={{ backgroundImage: "url('/assets/First Order Discount.png')" }}>
              <p className={styles.discounttext}>20% OFF</p>
              <div className={styles.restrocardtext} >
                <p>McDonald’s East London</p>
                <h3>First Order Discount</h3>
              </div>
              <div className={styles.AddToCart} >
                <img className={styles.AddToCartimg} src="assets/add to cart.png" alt="Add to Cart" />
              </div>
            </div>
            <div className={styles.restaurentcard} style={{ backgroundImage: "url('/assets/Vegan Discount.png')" }}>
              <p className={styles.discounttext}>20% OFF</p>
              <div className={styles.restrocardtext} >
                <p>McDonald’s East London</p>
                <h3>Vegan Discount</h3>
              </div>
              <div className={styles.AddToCart} >
                <img className={styles.AddToCartimg} src="assets/add to cart.png" alt="Add to Cart" />
              </div>
            </div>
            <div className={styles.restaurentcard} style={{ backgroundImage: "url('/assets/Free ice Cream Offer.png')" }}>
              <p className={styles.discounttext}>20% OFF</p>
              <div className={styles.restrocardtext} >
                <p>McDonald’s East London</p>
                <h3>Free ice Cream Offer</h3>
              </div>
              <div className={styles.AddToCart} >
                <img className={styles.AddToCartimg} src="assets/add to cart.png" alt="Add to Cart" />
              </div>
            </div>
          </div>
          {/* product catagory */}
          <div className={styles.productcatagory} >
            <h1 className={styles.catagorytitle} >Burgers</h1>
            <div >

              {/* {
            foodCat !== [] 
              ? foodCat.map((data) => {
                return (
                  <div key={data._id}> 
                    <div>
                      {data.CategoryName}
                    </div>
                    <hr />
                    {
                      foodItem !== [] 
                        ? foodItem
                          .filter((item) => item.CategoryName === data.CategoryName) 
                          .map((filterItems) => {
                            return (
                              <div key={filterItems._id}> 
                                <ProductCard></ProductCard> 
                              </div>
                            );
                          })
                        : <div>No Data</div> 
                    }
                  </div>
                );
              })
              : "loading" 
          } */}
              {
                foodCat.length > 0
                  ? foodCat.map((data) => {

                    return (
                      data.CategoryName === "Burgers" && (
                        <div className={styles.burgerCards} key={data._id}>
                          {
                            foodItem.length > 0
                              ? foodItem
                                .filter((item) => item.CategoryName === "Burgers")
                                .map((filterItems) => {
                                  return (
                                    <div className={styles.itemsCard} key={filterItems._id}>
                                      <ProductCard
                                        foodName={filterItems.name}
                                        foodPrice={filterItems.Price}
                                        foodImage={filterItems.img}
                                        foodDescription={filterItems.description}
                                      ></ProductCard>
                                    </div>
                                  );
                                })
                              : "No Data"
                          }
                        </div>
                      )
                    );
                  })
                  : "loading"
              }

            </div>
          </div>
          <div style={{ marginTop: "120px" }} className={styles.productcatagory} >
            <h1 style={{ color: "#FC8A06" }} className={styles.catagorytitle} >Fries</h1>
            <div >
              {
                foodCat.length > 0
                  ? foodCat.map((data) => {

                    return (
                      data.CategoryName === "Fries" && (
                        <div className={styles.burgerCards} key={data._id}>
                          {
                            foodItem.length > 0
                              ? foodItem
                                .filter((item) => item.CategoryName === "Fries")
                                .map((filterItems) => {
                                  return (
                                    <div className={styles.itemsCard} key={filterItems._id}>
                                      <ProductCard
                                        foodName={filterItems.name}
                                        foodPrice={filterItems.Price}
                                        foodImage={filterItems.img}
                                        foodDescription={filterItems.description}
                                      ></ProductCard>
                                    </div>
                                  );
                                })
                              : "No Data"
                          }
                        </div>
                      )
                    );
                  })
                  : "loading"
              }

            </div>
          </div>
          <div style={{ marginTop: "120px" }} className={styles.productcatagory} >
            <h1 style={{ color: "#FC8A06" }} className={styles.catagorytitle} >Cold Drinks</h1>
            <div >
              {
                foodCat.length > 0
                  ? foodCat.map((data) => {

                    return (
                      data.CategoryName === "Cold Drinks" && (
                        <div className={styles.burgerCards} key={data._id}>
                          {
                            foodItem.length > 0
                              ? foodItem
                                .filter((item) => item.CategoryName === "Cold Drinks")
                                .map((filterItems) => {
                                  return (
                                    <div className={styles.itemsCard} key={filterItems._id}>
                                      <ProductCard
                                        foodName={filterItems.name}
                                        foodPrice={filterItems.Price}
                                        foodImage={filterItems.img}
                                        foodDescription={filterItems.description}
                                      ></ProductCard>
                                    </div>
                                  );
                                })
                              : "No Data"
                          }
                        </div>
                      )
                    );
                  })
                  : "loading"
              }

            </div>
          </div>
        </div>
        <div className={styles.rightcontainer} >
          <Cart />
        </div>
      </div>

      {/* Information section */}
      <div className={styles.infoSection} >
        <div className={styles.delandcontactbox} >
          <ul style={{ width: "50%" }} >
            <h1> <img src="/assets/Tracking.png" alt="" /> Delivery information</h1>
            <li><strong>Monday:</strong>12:00 AM-3:00 AM, 8:00 AM-3:00 AM</li>
            <li><strong>Tuesday:</strong>8:00 AM-3:00 AM</li>
            <li><strong>Wednesday:</strong>8:00 AM-3:00 AM</li>
            <li><strong>Thursday:</strong>8:00 AM-3:00 AM</li>
            <li><strong>Friday: </strong>8:00 AM-3:00 AM</li>
            <li><strong>Saturday:</strong>8:00 AM-3:00 AM</li>
            <li><strong>Sunday:</strong>8:00 AM-3:00 AM</li>
            <li><strong>Estimated time until delivery:</strong>20 min</li>
          </ul>
          <ul style={{ width: "50%" }} >
            <h1> <img src="/assets/ID Verified.png" alt="" /> Contact information</h1>
            <p>If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.</p>
            <h3>Phone number</h3>
            <h5>+934443-43</h5>
            <h3>Website</h3>
            <h5>http://mcdonalds.uk/</h5>
          </ul>
        </div>
        <div className={styles.optimebox} >
          <h1> <img src="/assets/Clock.png" alt="" /> Operational Times</h1>
          <ul>
            <li><strong>Monday:</strong>8:00 AM-3:00 AM</li>
            <li><strong>Tuesday:</strong>8:00 AM-3:00 AM</li>
            <li><strong>Wednesday:</strong>8:00 AM-3:00 AM</li>
            <li><strong>Thursday:</strong>8:00 AM-3:00 AM</li>
            <li><strong>Friday: </strong>8:00 AM-3:00 AM</li>
            <li><strong>Saturday:</strong>8:00 AM-3:00 AM</li>
            <li><strong>Sunday:</strong>8:00 AM-3:00 AM</li>
          </ul>
        </div>
      </div>
      <Map />
      {/* Similar Restaurents */}
      <div className={styles.similarrestro} >
        <h1>Similar Restaurants</h1>
        <PopularRestro />
      </div>
      <Footer />
    </>
  )
}

export default ProductPage;