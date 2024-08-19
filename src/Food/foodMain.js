import React, { useState, useEffect, useRef } from "react";
import "./foodMain.css";
import arrowIcon from "../image/open2_1.png";
import search_icon from "../image/search_icon.png";
import beer from "../image/beer.png";
import img1 from "../image/foodImg.png";
import img2 from "../image/star.png";

const FoodMain = () => {
  const [activeBlock, setActiveBlock] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const selectRef = useRef(null);
  const [selectWidth, setSelectWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState("500px");

  const handleClick = (category) => {
    setActiveBlock(category);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const searchValue = searchTerm;
    console.log("Search Term:", searchValue);
    // 여기서 searchValue를 원하는 대로 사용할 수 있습니다.
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (selectRef.current) {
      setSelectWidth(selectRef.current.offsetWidth);
    }
  }, [selectedOption]);

  const stores = [
    {
      name: "만두전문점 한만두",
      rating: 4.8,
      popularMenu: "짬뽕만두",
      todayOrder: 14,
      imgSrc: img1,
    },
    {
      name: "치킨전문점 한치킨",
      rating: 4.5,
      popularMenu: "양념치킨",
      todayOrder: 20,
      imgSrc: img1,
    },
  ];

  useEffect(() => {
    if (stores.length > 1) {
      setContainerHeight("auto");
    } else {
      setContainerHeight("500px");
    }
  }, [stores.length]);

  return (
    <nav>
      <div className="dropdown">
        <select
          ref={selectRef}
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="">대구 삼성라이온즈 파크</option>
          <option value="option1">옵션 1</option>
          <option value="option2">옵션 2</option>
          <option value="option3">옵션 3</option>
        </select>
        <img
          src={arrowIcon}
          alt="arrow_icon"
          className="arrow-icon"
          style={{ left: `${selectWidth + 10}px` }} // 화살표 위치 조정
        />
      </div>
      <div className="search">
        <input
          type="text"
          id="input"
          placeholder="검색어를 입력해주세요"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <img
          id="search_icon"
          src={search_icon}
          alt="search_icon"
          onClick={handleSearchClick}
        />
      </div>
      <div className="container2" style={{ height: containerHeight }}>
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
        {stores.map((store, index) => (
          <div className="store" key={index}>
            <img id="img1" src={store.imgSrc} alt="img1" /> {/* 이미지 파일을 src 속성에 추가 */}
            <div className="storeIfo">
              <h3 id="store_name">{store.name}</h3>
              <img id="img2" src={img2} alt="img2" />
              <p id="star_point">{store.rating}</p>
              <div className="popurler">
                <p id="info_text">인기메뉴</p>
                <p id="populer_menu">{store.popularMenu}</p>
              </div>
              <div className="order">
                <p id="info_text">오늘 주문수</p>
                <p id="today_order">{store.todayOrder}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default FoodMain;
