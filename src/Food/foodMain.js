import React from "react";
import "./foodMain.css";

const FoodMain = () => {
  return (
    <nav>
      <h3 id="name">대구 삼성라이온즈 파크</h3>
      <div className="serch"> <h3>검색어를 입력해주세요</h3> </div>
      <div className="container2">
        <div className="display">
          <div className="text">
            <p id="beer1">대구 삼성라이온즈 파크에서</p>
            <h3 id="beer2">맥주 주문하기</h3>
          </div>
        </div>
        <h3>인기매장 픽업 주문하기</h3>
      </div>
    </nav>
  );
};

export default FoodMain;
