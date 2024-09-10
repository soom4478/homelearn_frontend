import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import './MyReviews.css';  
import storeIcon from '../image/store.png';
import buttonImage from '../image/bar.png'; 

const initialReviews = [
  { 
    id: 1, 
    homeground: '대구 삼성 라이온즈파크', 
    store: '해피치즈스마일', 
    foodImage: 'C:/Users/USERONE/dev/homelearn/src/image/Review.png',  
    rating: 4, 
    content: '냠냠' 
  },
  { 
    id: 2, 
    homeground: '잠실 야구장', 
    store: '김치말이국수', 
    foodImage: '../image/Review.png', 
    rating: 5, 
    content: '김치말이국수 먹고싶다' 
  },
];

const MyReviews = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState(initialReviews);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="main-container">
      <div className="header3">
        <button className="back-button3" onClick={() => navigate(-1)} style={{marginBottom: '12px'}}>
          <ArrowBackIcon />
        </button>
        <div className="title3">나의 리뷰</div>
      </div>
      <div className="app-container12">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <img src={storeIcon} alt="가게 아이콘" className="store-icon" />
              <div className="review-info">
                <div className="stadium-store">
                  <span style={{fontFamily: 'Pretendard-SemiBold',}}>{review.homeground}</span><br />
                  <span style={{fontFamily: 'Pretendard-Medium',}}>{review.store}</span>
                </div>
                <img 
                  src={buttonImage} 
                  alt="버튼 이미지" 
                  className="button-image" 
                  onClick={() => setDeleteId(review.id)} 
                />
              </div>
            </div>
            <img src={review.foodImage} alt="리뷰 사진" className="review-image" />
            <div className="review-rating">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  style={{ color: index < review.rating ? '#FFD700' : '#CCCCCC' }}
                />
              ))}
            </div>
            <div className="review-content">
              {review.content}
            </div>
            {deleteId === review.id && (
              <div className="delete-confirmation">
                <button onClick={() => handleDelete(review.id)} className="delete-button">삭제</button>
                <button onClick={() => setDeleteId(null)} className="cancel-button">취소</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
