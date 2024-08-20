import React from 'react';
import './Samsung.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SeatMap = () => {
  return (
    <div className="seat-map">
      <h2>좌석배치도</h2>  
      <img src="./Homeground/samsung.png" alt="좌석 배치도" />
    </div>
  );
};

const ParkingInfo = () => {
  return (
    <div className="parking-info">
      <h3>주차장</h3>
      <div className="parking-details">
        <div className="flex-container">
          <span className="label">운영시간</span>
          <span className="time">09시 ~ 경기 종료 후 2시간</span>
        </div>
        <div className="flex-container">
          <span className="label">주차비용</span>
          <span className="time">2000원/일</span>
        </div>
      </div>
      <div className="parking-details">
        <div className="flex-container">
          <span className="label">운영시간</span>
          <span className="time">09시 ~ 경기 종료 후 2시간</span>
        </div>
        <div className="flex-container">
          <span className="label">주차비용</span>
          <span className="time">2000원/일</span>
        </div>
      </div>
    </div>
  );
};

const OrderFood = () => {
  return (
    <div className="order-food">
      <h3>경기 직관 중이라면?</h3>
      <button>먹거리 주문하기</button>
    </div>
  );
};

const DaeguSamsungLionsPark = () => {
  return (
    <div className="stadium-page">
      <header className="header">
        <div className="header-left">
          <button className="back-icon-button">
            <ArrowBackIcon />
          </button>
        </div>
        <div className="header-center">
          <h1>대구 삼성라이온즈 파크</h1>
          <hr className="divider" />
        </div>
        <div className="header-info">
          <LocationOnIcon className="location-icon" />
          <span className="location">대구 수성구</span>
          <span className="exit">대공원역 5번 출구</span>
        </div>
      </header>
      <main>
        <SeatMap />
        <ParkingInfo />
        <OrderFood />
      </main>
    </div>
  );
};

export default DaeguSamsungLionsPark;
