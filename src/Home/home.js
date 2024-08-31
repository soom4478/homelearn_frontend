import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { schedules } from "./scheduleImfo";
import { dicseptionImfo } from "./dicseptionImfo";
import { explanImfo } from "./explanImfo";
import { comuImfo } from "./comuImfo";
import star from "../image/star_icon.png";
import pizza from "../image/pizza_icon.png";
import calenderI from "../image/calendar.png";
import bell from "../image/bell.png";
import nextRink_icon from "../image/nextRink_icon.png";
import heartIcon from "../image/heartIcon.png";
import commentIcon from "../image/commentIcon.png";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(null); // 클릭된 index를 상태로 관리
  const [selectedDay, setSelectedDay] = useState(null); // 선택된 day를 상태로 관리
  const [currentDate, setCurrentDate] = useState(""); // 현재 날짜를 상태로 관리
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    setCurrentDate(`${year}.${month}`);

    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay());

    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const day = date.getDate().toString().padStart(2, "0");
      const label = daysOfWeek[date.getDay()];
      days.push({ day, label });
    }

    const todayIndex = days.findIndex(day => day.day === today.getDate().toString().padStart(2, "0"));
    setSelectedDayIndex(todayIndex);
    setSelectedDay(today.getDate().toString().padStart(2, "0"));
  }, []);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  const handleDayClick = (index, day) => {
    setSelectedDayIndex(index); // 클릭된 index를 상태로 설정
    setSelectedDay(day); // 클릭된 day를 상태로 설정
  };

  const handleCalenderClick = () => {
    navigate("/calender"); // 페이지 이동
  };

  const handlefoodClick = () => {
    navigate("/food"); // 페이지 이동
  };

  const handlenext1Click = () => {
    navigate("/term"); // 페이지 이동
  };

  const handlenext2Click = () => {
    navigate("/rule"); // 페이지 이동
  };

  const handlenext3Click = () => {
    navigate("/community"); // 페이지 이동
  };

  // comuImfo 배열을 comu_heart 값에 따라 내림차순으로 정렬
  const sortedComuImfo = comuImfo.sort((a, b) => b.comu_heart - a.comu_heart);

  const getDaysOfWeek = () => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const today = new Date();
    const days = [];

    // Find the previous Sunday
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay());

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const day = date.getDate().toString().padStart(2, "0");
      const label = daysOfWeek[date.getDay()];
      days.push({ day, label });
    }

    return days;
  };

  const days = getDaysOfWeek();

  const filteredSchedules = selectedDay
    ? schedules.filter((schedule) => schedule.day_num === selectedDay)
    : schedules;

  return (
    <div className="container">
      <div className="container3">
        <img id="calenderI" src={calenderI} alt="calenderI" onClick={handleCalenderClick} /> {/* 클릭 이벤트 핸들러 추가 */}
        <img id="bell" src={bell} alt="bell" />
        <p id="today">{currentDate}</p> {/* 현재 날짜 표시 */}
        <div className="container4">
          {days.map((item, index) => (
            <div
              className={`dayCon1 ${selectedDayIndex === index ? "day-selected" : ""}`} // 조건부 스타일 적용
              key={index}
              onClick={() => handleDayClick(index, item.day)} // 클릭 이벤트 핸들러 추가
            >
              <div className={`dayCon2 ${selectedDayIndex === index ? "dayCon2-selected" : ""}`}>
                <p id="day">{item.day}</p>
                <p id="day2">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p id="titleText">경기일정</p>
        <nav className="nav1">
          <div className="schedule">
            {filteredSchedules.map((schedule, index) => (
              <div className="scheduleCon" key={index}>
                <div className="scheduleCon1"></div>
                <div className="scheduleCon2">
                  <div className="scheduleImfo">
                    <div id="schedule_title">
                      <p id="title_team1">{schedule.team1}</p>
                      <p id="title_vs">VS</p>
                      <p id="title_team2">{schedule.team2}</p>
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
        <div className="container6" onClick={handlefoodClick}>
          <div id="rinkText">지금 있는 구장에서<br />먹거리 주문하기</div>
          <img id="icon1" src={pizza} alt="pizza" />
        </div>
      </div>
      <div>
        
      <div className="flex-container">
    <p id="titleText1">야구 백과사전</p>
    <img id="nextrink1" src={nextRink_icon} alt="next" className="align-bottom" onClick={handlenext1Click}/>
  </div>
  <p id="explan">어려운 야구 용어 한눈에 정리!</p>
  <nav className="nav2">
    <div className="con1">
      {dicseptionImfo.map((item, index) => (
        <div className="con2" key={index}>
          <div className="conTop1">
            <p id="dicseption1">{item.dic_title}</p>
          </div>
          <div className="conBottom1">
            <div className="conImfo1">
              <p id="ImfoText1">{item.dic_text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </nav>
</div>

      <div>
        <div className="flex-container">
          <p id="titleText2">경기 규칙 설명</p>
          <img id="nextrink2" src={nextRink_icon} alt="next" className="align-bottom" onClick={handlenext2Click} />
        </div>
        <nav className="nav2">
          <div className="con3">
            {explanImfo.map((item, index) => (
              <div className="con4" key={index}>
                <div className="conTop2">
                  <p id="dicseption2">{item.explan_title}</p>
                </div>
                <div className="conBottom2">
                  <div className="conImfo2">
                    <div className="numCircle">
                      <p className="number">1</p>
                    </div>
                    <div className="explainCon">
                      <p id="ImfoT1">{item.explanT1}</p>
                      <p id="ImfoT2">{item.explanT2}</p>
                    </div>
                  </div>
                  <div className="conImfo3">
                    <div className="numCircle">
                      <p className="number">2</p>
                    </div>
                    <div className="explainCon">
                      <p id="ImfoT1">{item.explanT3}</p>
                      <p id="ImfoT2">{item.explanT4}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>

      <div className="comuCon1">
            <div className="comuCon2">
                <div className="flex-container">
                    <p id="titleText3">커뮤니티 인기글</p>
                    <img id="nextrink3" src={nextRink_icon} alt="next" className="align-bottom" onClick={handlenext3Click} />
                </div>
                <div className="comuCon3">
                    {sortedComuImfo.slice(0, 3).map((item, index) => (
                        <div className="comuCon4" key={index}>
                            <p id="comuT">{item.comu_title}</p>
                            <p id="comuI">{item.comu_text}</p>
                            <p id="comuB">{item.comu_time}</p>
                            <div className="comuCon5">
                              <div className="comuHcon">
                                <img id="comuH" src={heartIcon} alt="heartIcon" />
                                <p id="comuHtext">{item.comu_heart}</p>
                              </div>
                              <div className="comuCcon">
                                <img id="comuC" src={commentIcon} alt="commentIcon" />
                                <p id="comuCtext">{item.comu_commen}</p>
                              </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>

      
    </div>
  );
};

export default Home;
