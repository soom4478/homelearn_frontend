import React from 'react';
import filledStar from '../image/reviewStar.png';
import emptyStar from '../image/emptyReviewStar.png';

const StarRating = ({ rating, starSize = 20 }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? filledStar : emptyStar}
        alt={i <= rating ? 'filled star' : 'empty star'}
        style={{ width: starSize, height: starSize }}
      />
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
