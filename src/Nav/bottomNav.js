import React, { useState } from "react";
import "./bottomNav.css";

const BottomNav = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <nav className="wrapper">
      <div
        className={activeButton === 0 ? "active" : ""}
        onClick={() => handleClick(0)}
      >
        홈
      </div>
      <div
        className={activeButton === 1 ? "active" : ""}
        onClick={() => handleClick(1)}
      >
        구장
      </div>
      <div
        className={activeButton === 2 ? "active" : ""}
        onClick={() => handleClick(2)}
      >
        구단
      </div>
      <div
        className={activeButton === 3 ? "active" : ""}
        onClick={() => handleClick(3)}
      >
        커뮤니티
      </div>
    </nav>
  );
};

export default BottomNav;
