import { useState } from 'react';

export const initialReviews = [
  {
    store_id: 1,
    name: "포비",
    time: "2023.01.01",
    star: 4.5,
    img: "path/to/image1.jpg",
    content: "맛있음!!!"
  },
  {
    store_id: 1,
    name: "포비",
    time: "2023.01.01",
    star: 2.0,
    img: "path/to/image1.jpg",
    content: "맛없음.. 웩"
  },
  {
    store_id: 1,
    name: "포비",
    time: "2023.01.01",
    star: 4,
    img: "path/to/image1.jpg",
    content: "맛있어요!"
  },
  {
    store_id: 2,
    name: "야구보구싶구",
    time: "2023.02.15",
    star: 3.0,
    img: "path/to/image2.jpg",
    content: "맛없음..."
  },
  {
    store_id: 2,
    name: "야구보구싶구",
    time: "2023.02.15",
    star: 4.0,
    img: "path/to/image2.jpg",
    content: "적당함"
  },
  {
    store_id: 2,
    name: "야구보구싶구",
    time: "2023.02.15",
    star: 5.0,
    img: "path/to/image2.jpg",
    content: "맛있음!!"
  }
  // 추가 리뷰 데이터...
];

export const useReviewImfo = () => {
  const [reviews, setReviews] = useState(initialReviews);
  return { reviews, setReviews };
};
