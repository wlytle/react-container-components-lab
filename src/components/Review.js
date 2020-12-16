import React from "react";

const Review = ({ headline, byline, summary }) => {
  return (
    <div className="review">
      <h2>{headline}</h2>
      <h5>By: {byline}</h5>
      <p>{summary}</p>
    </div>
  );
};

export default Review;
