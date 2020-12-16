// Code MovieReviews Here
import React from "react";
import Review from "./Review";

const renderReviews = (reviews) => {
  return reviews.map((review) => {
    return (
      <Review
        key={review.id}
        headline={review.headline}
        byline={review.byline}
        summary={review.summary_short}
      />
    );
  });
};

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">{renderReviews(reviews)}</div>;
};

export default MovieReviews;
