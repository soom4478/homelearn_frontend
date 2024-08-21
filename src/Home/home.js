import React, { useState } from "react";
import "./home.css";
import { schedules } from "./scheduleImfo";
import star from "../image/star_icon.png"
import pizza from "../image/pizza_icon.png"

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
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
        <p id="titleText">경기일정</p>
        <nav className="nav1">
          <div className="schedule">
            {schedules.map((schedule, index) => (
              <div className="scheduleCon" key={index}>
                <div className="scheduleCon1"></div>
                <div className="scheduleCon2">
                  <div className="scheduleImfo">
                    <div id="title">
                      <p id="title1">{schedule.team1}</p>
                      <p id="title2">VS</p>
                      <p id="title3">{schedule.team2}</p>
                    </div>
                    <p id="time">{schedule.time}</p>
                    <p id="ground">{schedule.ground}</p>
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
            ))}
          </div>
        </nav>

        <div className="container5">
          <div id="rinkText">통합예매 바로가기</div>
          <img id="icon1" src={star} alt="star" />
        </div>
        <div className="container6">
          <div id="rinkText">지금 있는 구장에서<br/>먹거리 주문하기</div>
          <img id="icon1" src={pizza} alt="pizza" />
        </div>
      </div>

      <div>
        <p id="titleText">야구 백과사전</p>
        <p id="explan">어려운 야구 용어 한눈에 정리!</p>
        <nav className="nav2">
          <div className="con1">
            {schedules.map((schedule, index) => (
              <div className="con2" key={index}>
                <div className="conTop">
                  <p id="dicseption">홈런이란?</p>
                </div>
                <div className="conBottom">
                  <div className="conImfo">
                    <p>외야의 담장을 넘어가 타자를 포함한 모든 주자들을 홈으로 불러들이는 것</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
