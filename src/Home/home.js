import React from "react";
import "./home.css";

const Home = () => {
  const days = [
    { day: "05", label: "월" },
    { day: "06", label: "화" },
    { day: "07", label: "수" },
    { day: "08", label: "목" },
    { day: "09", label: "금" },
    { day: "10", label: "토" },
    { day: "11", label: "일" },
  ];

  const selectedIndex = 0; // 인덱스 설정

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
              <p id="title">LE트윈즈 VS 두산베어스</p>
              <p id="time">18:30</p>
              <p id="ground">잠실종합운동장</p>
              <button id="reservation">바로예매</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
