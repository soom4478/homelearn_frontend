import React, { useState } from "react";
import "./foodMain.css";
import search_icon from "../image/search_icon.png";
import beer from "../image/beer.png";
import img1 from "../image/foodImg.png"; // 이미지 파일을 import
import img2 from "../image/star.png";

const FoodMain = () => {
  const [activeBlock, setActiveBlock] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (category) => {
    setActiveBlock(category);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav>
      <h3 id="name">대구 삼성라이온즈 파크</h3>
      <div className="search">
        <input
          type="text"
          id="input"
          placeholder="검색어를 입력해주세요"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <img id="search_icon" src={search_icon} alt="search_icon" />
      </div>
      <div className="container2">
        <div className="display">
          <div className="text">
            <p id="beer1">대구 삼성라이온즈 파크에서</p>
            <h3 id="beer2">맥주 주문하기</h3>
          </div>
          <img id="beer_img" src={beer} alt="beer" />
        </div>
        <div id="text2">
          <p>인기매장 픽업 주문하기</p>
        </div>
        <div className="category">
          {["전체", "분식", "치킨", "만두"].map((category) => (
            <div
              key={category}
              id="block"
              className={activeBlock === category ? "active" : ""}
              onClick={() => handleClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="store">
          <img id="img1" src={img1} alt="img1" /> {/* 이미지 파일을 src 속성에 추가 */}
          <div className="storeIfo">
            <h3 id="store_name">만두전문점 한만두</h3>
            <img id="img2" src={img2} alt="img2" />
            <p id="star_point">4.8</p>
            <div className="popurler">
              <p id="info_text">인기메뉴</p>
              <p id="populer_menu">짬뽕만두</p>
            </div>
            <div className="order">
              <p id="info_text">오늘 주문수</p>
              <p id="today_order">14</p>
            </div>
          </div>
        </div>
        <div className="store">
          <img id="img1" src={img1} alt="img1" /> {/* 이미지 파일을 src 속성에 추가 */}
          <div className="storeIfo">
            <h3 id="store_name">만두전문점 한만두</h3>
            <img id="img2" src={img2} alt="img2" />
            <p id="star_point">4.8</p>
            <div className="popurler">
              <p id="info_text">인기메뉴</p>
              <p id="populer_menu">짬뽕만두</p>
            </div>
            <div className="order">
              <p id="info_text">오늘 주문수</p>
              <p id="today_order">14</p>
            </div>
          </div>
        </div>
        <div className="store">
          <img id="img1" src={img1} alt="img1" /> {/* 이미지 파일을 src 속성에 추가 */}
          <div className="storeIfo">
            <h3 id="store_name">만두전문점 한만두</h3>
            <img id="img2" src={img2} alt="img2" />
            <p id="star_point">4.8</p>
            <div className="popurler">
              <p id="info_text">인기메뉴</p>
              <p id="populer_menu">짬뽕만두</p>
            </div>
            <div className="order">
              <p id="info_text">오늘 주문수</p>
              <p id="today_order">14</p>
            </div>
          </div>
        </div>
        <div className="store">
          <img id="img1" src={img1} alt="img1" /> {/* 이미지 파일을 src 속성에 추가 */}
          <div className="storeIfo">
            <h3 id="store_name">만두전문점 한만두</h3>
            <img id="img2" src={img2} alt="img2" />
            <p id="star_point">4.8</p>
            <div className="popurler">
              <p id="info_text">인기메뉴</p>
              <p id="populer_menu">짬뽕만두</p>
            </div>
            <div className="order">
              <p id="info_text">오늘 주문수</p>
              <p id="today_order">14</p>
            </div>
          </div>
        </div>
        <div className="store">
          <img id="img1" src={img1} alt="img1" /> {/* 이미지 파일을 src 속성에 추가 */}
          <div className="storeIfo">
            <h3 id="store_name">만두전문점 한만두</h3>
            <img id="img2" src={img2} alt="img2" />
            <p id="star_point">4.8</p>
            <div className="popurler">
              <p id="info_text">인기메뉴</p>
              <p id="populer_menu">짬뽕만두</p>
            </div>
            <div className="order">
              <p id="info_text">오늘 주문수</p>
              <p id="today_order">14</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FoodMain;
