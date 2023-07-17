import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import "./Review.css";

const Review = ({ name, text, image }) => {
  return (
    <div className="review-bubble">
      <div className="bubble-triangle"></div>
      <div className="review-portrait">
        {!image && <IoPersonCircleSharp className="review-icon" />}
      </div>
      <div className="review-details">
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Review;
