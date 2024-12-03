import React from "react";
import Slider from "react-slick";
import styles from "./Reviews.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const reviews = [
    {
      name: "St Glx",
      location: "South London",
      date: "24th September, 2023",
      rating: 5,
      review: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      name: "Jane Doe",
      location: "East London",
      date: "15th October, 2023",
      rating: 4,
      review: "The staff was courteous, and the service was quick. However, the seating area was a bit crowded.",
    },
    {
      name: "John Smith",
      location: "West London",
      date: "10th November, 2023",
      rating: 3,
      review: "Average experience. Food was okay, but service could be improved.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <button className={`${styles.arrow} ${styles.right}`}>
        <img src="Back.png" alt="Next" />
      </button>
    ),
    prevArrow: (
      <button className={`${styles.arrow} ${styles.left}`}>
        <img src="Back.png" alt="Previous" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.reviewsSection}>
      <h2 className={styles.title}>Customer Reviews</h2>
      <Slider {...settings} className={styles.slider}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <img
                src={`https://via.placeholder.com/50`}
                alt={review.name}
                className={styles.userAvatar}
              />
              <div>
                <h3 className={styles.userName}>{review.name}</h3>
                <p className={styles.userLocation}>{review.location}</p>
              </div>
            </div>
            <p className={styles.reviewDate}>{review.date}</p>
            <p className={styles.reviewText}>{review.review}</p>
            <div className={styles.rating}>
              {"⭐".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </Slider>
      <div className={styles.totalReviews}>
        <img src="totalReviews.png" alt="Total Reviews" className={styles.totalImage} />
      </div>
    </div>
  );
};

export default Reviews;
