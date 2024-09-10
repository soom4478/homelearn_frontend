import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./bottomNav.css";
import icon1 from "../image/Nav/home1.png";
import icon2 from "../image/Nav/home2.png";
import icon3 from "../image/Nav/club1.png";
import icon4 from "../image/Nav/club2.png";
import icon5 from "../image/Nav/food1.png";
import icon6 from "../image/Nav/food2.png";
import icon7 from "../image/Nav/comu1.png";
import icon8 from "../image/Nav/comu2.png";
import icon9 from "../image/Nav/my1.png";
import icon10 from "../image/Nav/my2.png";

const BottomNav = () => {
  const [activeButton, setActiveButton] = useState(0); // 초기값을 0으로 설정
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setActiveButton(0);
        break;
      case "/team":
        setActiveButton(1);
        break;
      case "/food":
        setActiveButton(2);
        break;
      case "/community":
        setActiveButton(3);
        break;
      case "/my":
        setActiveButton(4);
        break;
      default:
        setActiveButton(0);
    }
  }, [location.pathname]);

  const handleClick = (index, path) => {
    setActiveButton(index);
    navigate(path);
  };

  const navItems = [
    { text: "홈", path: "/home", icon: activeButton === 0 ? icon2 : icon1 },
    { text: "구단", path: "/team", icon: activeButton === 1 ? icon4 : icon3 },
    { text: "먹거리", path: "/food", icon: activeButton === 2 ? icon6 : icon5 },
    { text: "커뮤니티", path: "/community", icon: activeButton === 3 ? icon8 : icon7 },
    { text: "마이", path: "/my", icon: activeButton === 4 ? icon10 : icon9 },
  ];

  return (
    <nav className="wrapper" id="footer">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={activeButton === index ? "active" : ""}
          onClick={() => handleClick(index, item.path)}
        >
          <img id="icon" src={item.icon} alt={`icon${index + 1}`} />
          <p id="text">{item.text}</p>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;
