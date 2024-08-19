import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bottomNav.css";

const BottomNav = () => {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index, path) => {
    setActiveButton(index);
    navigate(path);
  };

  return (
    <nav className="wrapper" id="footer">
      <div
        className={activeButton === 0 ? "active" : ""}
        onClick={() => handleClick(0, "/")}
      >
        홈
      </div>
      <div
        className={activeButton === 1 ? "active" : ""}
        onClick={() => handleClick(1, "/team")}
      >
        구단
      </div>
      <div
        className={activeButton === 2 ? "active" : ""}
        onClick={() => handleClick(2, "/food")}
      >
        먹거리
      </div>
      <div
        className={activeButton === 3 ? "active" : ""}
        onClick={() => handleClick(3, "/community")}
      >
        커뮤니티
      </div>
      <div
        className={activeButton === 4 ? "active" : ""}
        onClick={() => handleClick(4, "/my")}
      >
        마이
      </div>
    </nav>
  );
};

export default BottomNav;
