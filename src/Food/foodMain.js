import React, { useState } from "react";
import "./foodMain.css";
import img1 from "../image/foodImg.png"; // 이미지 파일을 import

const FoodMain = () => {
  const [activeBlock, setActiveBlock] = useState("전체");

  const handleClick = (category) => {
    setActiveBlock(category);
  };

  return (
    <nav>
      <h3 id="name">대구 삼성라이온즈 파크</h3>
      <div className="serch"> <p id="input">검색어를 입력해주세요</p> </div>
      <div className="container2">
        <div className="display">
          <div className="text">
            <p id="beer1">대구 삼성라이온즈 파크에서</p>
            <h3 id="beer2">맥주 주문하기</h3>
          </div>
        </div>
        <div id="text2">
          <h2>인기매장 픽업 주문하기</h2>
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
            <h3>만두전문점 한만두</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FoodMain;
