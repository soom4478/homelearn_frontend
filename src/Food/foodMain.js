import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "./StoreContext";
import "./foodMain.css";
import arrowIcon from "../image/open2_1.png";
import search_icon from "../image/search_icon.png";
import search_icon2 from "../image/search_icon2.png";
import beer from "../image/beer.png";
import star from "../image/star.png";

const FoodMain = () => {
  const { stores } = useStore();
  const [activeBlock, setActiveBlock] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [searchIcon, setSearchIcon] = useState(search_icon);
  const selectRef = useRef(null);
  const [selectWidth, setSelectWidth] = useState(0);
  const navigate = useNavigate();

  const handleClick = (category) => {
    setActiveBlock(category);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchIcon(search_icon2);
    setTimeout(() => {
      setSearchIcon(search_icon);
    }, 100);

    const searchValue = searchTerm;
    console.log("Search Term:", searchValue);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (selectRef.current) {
      setSelectWidth(selectRef.current.offsetWidth);
    }
  }, [selectedOption]);

  const handleStoreClick = (storeId) => {
    navigate(`/food/${storeId}`);
  };

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
          style={{ left: `${selectWidth + 10}px` }}
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
          src={searchIcon}
          alt="search_icon"
          onClick={handleSearchClick}
        />
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

        {stores.map((store, index) => (
          <div className="store" key={index} onClick={() => handleStoreClick(store.id)}>
            <img id="img1" src={store.imgSrc} alt="img1" />
            <div className="storeIfo">
              <h3 id="store_name">{store.name}</h3>
              <img id="star" src={star} alt="star" />
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
