import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "./StoreContext";
import { useNavigate } from 'react-router-dom';
import { menuImfo } from "./menuImfo"; // menuImfo 배열 가져오기
import { useReviewImfo } from "./reviewImfo"; // reviewImfo 배열 가져오기
import returnIcon from "../image/return.png";
import star from "../image/star.png";
import map from "../image/mapIcon.png";
import StarRating from "./starRating"; // StarRating 컴포넌트 가져오기
import "./foodDetail.css";

const FoodDetail = () => {
  const { storeId } = useParams();
  const { stores } = useStore();
  const navigate = useNavigate(); // useNavigate 훅 사용
  const { reviews } = useReviewImfo(); // reviewImfo 가져오기

  const [activeCategory, setActiveCategory] = useState('cate1');
  const [store, setStore] = useState(null);
  const [topReview, setTopReview] = useState(null);

  const handleReviewClick = () => {
    navigate(`/review/${store.id}`, { state: { store } });
  };

  useEffect(() => {
    const foundStore = stores.find((store) => store.id === parseInt(storeId));
    setStore(foundStore);
  }, [storeId, stores]);

  useEffect(() => {
    if (store) {
      const storeReviews = reviews.filter((review) => review.store_id === store.id);
      if (storeReviews.length > 0) {
        const highestRatedReview = storeReviews.reduce((max, review) => (review.star > max.star ? review : max), storeReviews[0]);
        setTopReview(highestRatedReview);
      }
    }
  }, [store, reviews]);

  const handleReturnClick = () => {
    navigate(-1); // 뒤로 이동
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  if (!store) {
    return <div>Store not found</div>;
  }

  const b_menus = menuImfo.filter((item) => item.store_id === store.id && item.best); // store.name과 일치하고 best가 true인 모든 메뉴 찾기
  const s_menus = menuImfo.filter((item) => item.store_id === store.id && item.set);
  const o_menus = menuImfo.filter((item) => item.store_id === store.id && item.one);
  const d_menus = menuImfo.filter((item) => item.store_id === store.id && item.drink);

  return (
    <div className="foodDcon1">
      <div className="foodDcon2">
        <div className='calender-con'>
          <img id="return" src={returnIcon} alt="return" onClick={handleReturnClick} /> {/* 클릭 이벤트 핸들러 추가 */}
          <p id='foodDetail-title'>{store.name}</p>
        </div>
      </div>
      <img id="storeImg" src={store.imgSrc} alt={store.name} />
      <div className="foodDcon6">
        <div className="foodDcon3">
          <div className="starDcon">
            <img id="star" src={star} alt="star" />
            <p id="star_point" className="star_point">{store.rating}</p>
          </div>
          <div className="location">
            <img id="map" src={map} alt="map" />
            <p id="locationT">{store.location}</p>
          </div>
        </div>
        <div className="foodDcon4">
          <p id="reviewN" onClick={handleReviewClick}>리뷰 104개 {">"}</p>
          <div className="foodDcon5">
            {topReview && (
              <>
                <div className="populerReviewImg" style={{ backgroundImage: `url(${topReview.img})` }}></div>
                <div className="foodDcon7">
                  <StarRating rating={topReview.star} starSize={20} /> {/* StarRating 컴포넌트 사용 */}
                  <p id="reviewText">{topReview.content}</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="foodDcate">
          <div
            className={`cate1 ${activeCategory === 'cate1' ? 'cateActive' : ''}`}
            onClick={() => handleCategoryClick('cate1')}
          >
            <p>전체</p>
          </div>
          <div
            className={`cate2 ${activeCategory === 'cate2' ? 'cateActive' : ''}`}
            onClick={() => handleCategoryClick('cate2')}
          >
            <p>Best</p>
          </div>
          <div
            className={`cate3 ${activeCategory === 'cate3' ? 'cateActive' : ''}`}
            onClick={() => handleCategoryClick('cate3')}
          >
            <p>Set</p>
          </div>
          <div
            className={`cate4 ${activeCategory === 'cate4' ? 'cateActive' : ''}`}
            onClick={() => handleCategoryClick('cate4')}
          >
            <p>단품</p>
          </div>
          <div
            className={`cate5 ${activeCategory === 'cate5' ? 'cateActive' : ''}`}
            onClick={() => handleCategoryClick('cate5')}
          >
            <p>음료</p>
          </div>
        </div>
        <div className="noneCon"></div>
        {(activeCategory === 'cate1' || activeCategory === 'cate2') && (
          <div className="bestCon">
            {b_menus.length > 0 && (
              <>
                <div className="foodDcon8">
                  <p id="cateText">Best</p>
                </div>
                {b_menus.map((menu, index) => (
                  <div key={index} className="foodDcon9">
                    <p id="DtailT">{menu.detail}</p>
                    <p id="nameT">{menu.name}</p>
                    <p id="priceT">{menu.price}원</p>
                  </div>
                ))}
              </>
            )}
            <div className="noneCon"></div>
          </div>
        )}
        {(activeCategory === 'cate1' || activeCategory === 'cate3') && (
          <div className="setCon">
            {s_menus.length > 0 && (
              <>
                <div className="foodDcon8">
                  <p id="cateText">Set</p>
                </div>
                {s_menus.map((menu, index) => (
                  <div key={index} className="foodDcon9">
                    <p id="DtailT">{menu.detail}</p>
                    <p id="nameT">{menu.name}</p>
                    <p id="priceT">{menu.price}원</p>
                  </div>
                ))}
              </>
            )}
            <div className="noneCon"></div>
          </div>
        )}
        {(activeCategory === 'cate1' || activeCategory === 'cate4') && (
          <div className="oneCon">
            {o_menus.length > 0 && (
              <>
                <div className="foodDcon8">
                  <p id="cateText">단품</p>
                </div>
                {o_menus.map((menu, index) => (
                  <div key={index} className="foodDcon9">
                    <p id="DtailT">{menu.detail}</p>
                    <p id="nameT">{menu.name}</p>
                    <p id="priceT">{menu.price}원</p>
                  </div>
                ))}
              </>
            )}
            <div className="noneCon"></div>
          </div>
        )}
        {(activeCategory === 'cate1' || activeCategory === 'cate5') && (
          <div className="drinkCon">
            {d_menus.length > 0 && (
              <>
                <div className="foodDcon8">
                  <p id="cateText">음료</p>
                </div>
                {d_menus.map((menu, index) => (
                  <div key={index} className="foodDcon9">
                    <p id="DtailT">{menu.detail}</p>
                    <p id="nameT">{menu.name}</p>
                    <p id="priceT">{menu.price}원</p>
                  </div>
                ))}
                <div className="noneCon"></div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDetail;
