import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100); // 3초 후에 원래 색으로 돌아옴
  };
  
  const days = [
    { day: "05", label: "월" },
    { day: "06", label: "화" },
    { day: "07", label: "수" },
    { day: "08", label: "목" },
    { day: "09", label: "금" },
    { day: "10", label: "토" },
    { day: "11", label: "일" },
  ];

  const selectedIndex = 4; // 인덱스 설정

  return (
    <div className="container">
      <div className="container3">
        <p id="today">2024 8월</p>
        <div className="container4">
          {days.map((item, index) => (
            <div className="dayCon1" key={index}>
              <div className={`dayCon2 ${selectedIndex === index ? "selected" : ""}`}>
                <p id="day" className={selectedIndex === index ? "selected" : ""}>{item.day}</p>
                <p id="day2" className={selectedIndex === index ? "selected" : ""}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p id="scheduleText">경기일정</p>
        <div className="scheduleCon">
          <div className="scheduleCon1"></div>
          <div className="scheduleCon2">
            <div className="scheduleImfo">
              <div id="title">
                <p id="title1">LG트윈즈</p>
                <p id="title2">VS</p>
                <p id="title3">두산베어스</p>
              </div>
              <p id="time">18:30</p>
              <p id="ground">잠실종합운동장</p>
              <button
                id="reservation"
                className={isClicked ? "clicked" : ""}
                onClick={handleButtonClick}
              >
                <p id="buttonText">바로예매</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
