import React from "react";
import "./Reviews.css";
import background from "../../Assets/Images/Customer-Review.jpg";
import Review from "./Review";

const reviews = [
  {
    name: "ANONYMOUS",
    text: " - They have always resonded in a quick and efficient manner. Their knowledge and professionalism is always top level.",
    image: false,
  },

  {
    name: "ANONYMOUS",
    text: " - I'm very impressed with this company and I'm very happy with their services",
    image: false,
  },
  {
    name: "ANONYMOUS",
    text: " - On top of everything that has been a great decision to let them manage our properties!",
    image: false,
  },
];

const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <img alt="" className="reviews-background" src={background} />
      <div className="reviews-content">
        <div className="head-ban-wrapper">
          <h2>Don't take our word for it...</h2>
          <div className="head-ban-div"></div>
          <p>
            Hear from some of our clients. (Clients are not named due to Privacy
            Agreement)
          </p>
        </div>
        <div className="review-bubble-wrapper">
          {reviews.map((item, index) => (
            <Review text={item.text} image={item.image} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
