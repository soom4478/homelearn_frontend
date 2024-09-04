import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './calendar.css';
import returnIcon from "../image/return.png";
// import CalenderDtail from "./calenderDetail";

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const generateCalendar = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendar = [];
  let week = [];

  for (let i = 0; i < firstDay; i++) {
    week.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    calendar.push(week);
  }

  return calendar;
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const calendar = generateCalendar(year, month);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value, 10);
    setCurrentDate(new Date(year, selectedMonth, 1));
  };

  const handleReturnClick = () => {
    navigate(-1); // 뒤로 이동
  };

  return (
    <div className="calendar-container">
      <div className='calender-con'>
        <img id="return" src={returnIcon} alt="return" onClick={handleReturnClick} /> {/* 클릭 이벤트 핸들러 추가 */}
        <p id='calender-title'>야구달력</p>
      </div>
      <div className="calendar-header">
        <span className='year-con'>{year}</span>
        <select className="month-drop" value={month} onChange={handleMonthChange}>
          {months.map((monthName, index) => (
            <option key={index} value={index}>{monthName}</option>
          ))}
        </select>
      </div>
      <div className="calendar-days">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar-day">{day}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {calendar.map((week, weekIndex) => (
          week.map((day, dayIndex) => (
            <div key={`${weekIndex}-${dayIndex}`} className="calendar-cell">
              <p className='calendar-day'>{day}</p>
              <div className='playCon'>
                <span id='playText'>경기</span>
                <span id='playNum'>1</span>
              </div>
              <div className='myCon'>
                <span id='myText'>직관가기!</span>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default Calendar;
