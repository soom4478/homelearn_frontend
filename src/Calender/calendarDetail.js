import React, { useState } from 'react';
import schedules from '../Home/scheduleImfo';
import myScheduleImfo from './myScheduleImfo'; // Import your myScheduleImfo file
import "./calendarDetail.css";

const CalendarDetail = ({ month, day }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState('');

  if (month === null || day === null) {
    return null;
  }

  const filteredSchedules = schedules.filter(
    (schedule) => schedule.month_num === String(month) && schedule.day_num === String(day)
  );
  console.log(filteredSchedules);

  const myFilteredSchedules = myScheduleImfo.filter(
    (schedule) => schedule.month === month && schedule.day === day
  );

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const handlePlusClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInputSubmit = (e) => {
    if (e.key === 'Enter') {
      const newSchedule = {
        month: month,
        day: day,
        text: inputText,
      };
      myScheduleImfo.push(newSchedule); // Add the new schedule to the array
      setShowInput(false);
      setInputText('');
    }
  };

  const formattedMonth = String(month).padStart(2, '0');
  const formattedDay = String(day).padStart(2, '0');
  const currentYear = new Date().getFullYear();

  return (
    <div className="calenderDCon1">
      <p id='calenderToday'>{currentYear}.{formattedMonth}.{formattedDay}</p>
      <p id='calendertitle1'>경기일정</p>
      <div className='calenderDCon2'>
        <nav className="Cnav1">
        {filteredSchedules.map((schedule, index) => (
          <div className="schedule" key={index}>
            <div className="scheduleCon">
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
          </div>
        ))}
        </nav>
      </div>
      <p id='calendertitle1'>나의 일정</p>
      <div className='myScheduleCon'>
        {myFilteredSchedules.length > 0 && (
          myFilteredSchedules.map((schedule, index) => (
            <div className='mySchedule' key={index}>
              {schedule.text}
            </div>
          ))
        )}
        {showInput && (
          <input
            className='scheduleInput'
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleInputSubmit}
            placeholder="일정을 입력하세요"
          />
        )}
        {!showInput && myFilteredSchedules.length <= 4 && (
          <div className='plusSchedule' onClick={handlePlusClick}>
            +
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDetail;
