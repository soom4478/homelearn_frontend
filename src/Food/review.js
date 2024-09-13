import React, { useState, useEffect } from "react";
import { useStore } from "./StoreContext";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import returnIcon from "../image/return.png";
import reviewStar from "../image/viewStar.png";
import emptyStar from "../image/viewEmpty.png";
import comuBtn from "../image/comuBtn.png";
import "./review.css";
import Rating from '@mui/material/Rating';
import { useReviewImfo } from "./reviewImfo"; // useReviewImfo 훅을 임포트

const Review = () => {
    const { stores } = useStore();
    const { storeId } = useParams(); // storeId를 URL 파라미터로 가져옴
    const location = useLocation();
    const navigate = useNavigate(); // useNavigate 훅 사용
    const { reviews } = useReviewImfo(); // useReviewImfo 훅 사용
    const [rating, setRating] = useState(0); // 초기값을 0으로 설정
    const [sortOption, setSortOption] = useState("latest"); // 정렬 옵션 상태 관리
    const [store, setStore] = useState(null);
    const [menuId, setMenuId] = useState(null);

    const handleReturnClick = () => {
      navigate(-1); // 뒤로 이동
    };

    const handleSortChange = (event) => {
      setSortOption(event.target.value); // 정렬 옵션 변경
    };

    const handleWriteClick = () => {
      navigate("/review/write", { state: { storeId } }); // storeId를 state로 전달
    };

    useEffect(() => {
      const foundStore = stores.find((store) => store.id === parseInt(storeId));
      setStore(foundStore);
      setMenuId(location.state?.menuId || null); // menuId를 상태로 설정
      if (foundStore) {
        setRating(foundStore.rating); // store의 rating 값을 rating으로 설정
      }
    }, [storeId, stores, location.state]);

    // store가 null이 아닌지 확인한 후에 필터링
    const filteredReviews = store ? reviews.filter(review => review.store_id == parseInt(storeId)) : [];

    return (
      <div className="reviewCon1">
        <div className="foodDcon1">
          <div className="foodDcon2">
            <div className='calender-con'>
              <img id="return" src={returnIcon} alt="return" onClick={handleReturnClick} /> {/* 클릭 이벤트 핸들러 추가 */}
              <p id='foodDetail-title'>리뷰</p>
            </div>
          </div>
        </div>
        <div className="reviewStarCon">
          <span className="reviewStar">
            <span className="reviewStar2" component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="customized-icons"
                value={Math.round(rating * 2) / 2} // 반올림하여 표현
                precision={0.5} // 반올림 설정
                readOnly // 읽기 전용으로 설정
                icon={<img src={reviewStar} alt="review star" style={{ width: '30px', height: '30px' }} />}
                emptyIcon={<img src={emptyStar} alt="empty star" style={{ width: '30px', height: '30px' }} />}
              />
            </span>
            <p id="starPointView">{rating}</p>
          </span>
        </div>
        <div className="reviewCon2">
          <span id="reviewCount">리뷰 {filteredReviews.length}개</span> {/* 리뷰 개수 표시 */}
          <select className="reviewDrop" value={sortOption} onChange={handleSortChange}>
            <option id="seq" value="latest">최신순</option>
            <option id="seq" value="highRating">평점 높은순</option>
            <option id="seq" value="lowRating">평점 낮은순</option>
          </select>
        </div>
        <div className="reviewCon3">
          {filteredReviews.map((review, index) => (
            <div className='reviewCon4' key={index}>
              <div className='cmtCon'>
                <div className='reviewPropile'></div>
                <div className='comuUser'>
                  <p id='uname'>{review.name}</p>
                  <p id='utime'>{review.time}</p>
                </div>
              </div>
              <div className="reviewImg"/>
              <div className="reviewRating">
                <Rating
                  name={`review-rating-${index}`}
                  value={review.star}
                  precision={0.5}
                  readOnly
                  icon={<img src={reviewStar} alt="review star" style={{ width: '20px', height: '20px' }} />}
                  emptyIcon={<img src={emptyStar} alt="empty star" style={{ width: '20px', height: '20px' }} />}
                />
              </div>
              <div className="reviewText">{review.content}</div>
            </div>
          ))}
        </div>
        <img id="comuBtn" src={comuBtn} alt="comuBtn" onClick={handleWriteClick} />
      </div>
    );
  };
  
  export default Review;
