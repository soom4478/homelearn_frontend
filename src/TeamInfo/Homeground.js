import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Homeground.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import stadiumMapImage from '../image/Homeground_Samsung.png';
import foodOrderImage from '../image/Pizza.png';

const Homeground = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container2">
      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <ArrowBackIcon
            style={{
              marginBottom:"35px"
            }}
          />
        </button>
        <div className="title">대구 삼성 라이온즈 파크</div>
        <div className="line"></div>
        <div className="text-container">
          <LocationOnIcon
            style={{
              fontSize: '20px',
              verticalAlign: 'middle',
              marginRight: '5px',
              color: '#009788',
            }}
          />
          <p className="content-text">대구 수성구</p>
          <p className="content-text2">대공원역 5번 출구</p>
        </div>
        <div className="line"></div>
      </div>
      <div className="info-box">
        <div className="info-section">
          <div className='map-container'>
            <p className="label-text">좌석 배치도</p>
            <button
              className="view-details-button"
              onClick={() => navigate('/map-detail')}  
            >
              자세히 보기 {'>'}
            </button>
          </div>
        </div>
        <div
          className="stadium-map"
          style={{
            backgroundImage: `url(${stadiumMapImage})`,
          }}
        />
        <div className="line"></div>
      </div>

      <div className="parking-box">
        <p className="label-text">주차장</p>
        <div className="info-section">
          <p className="main-text">달구벌시즌권전용주차장</p>
          <p className="parking-text">
            <span className="label">운영시간</span> 
            <span className="time">09시 ~ 경기 종료 후 2시간</span><br></br>
            <span className="label">주차비용</span> 
            <span className="time">2000원/일</span>
          </p>
        </div>
        <div className="info-section">
          <p className="main-text">전설로주차장</p>
          <p className="parking-text">
            <span className="label">운영시간</span> 
            <span className="time">09시 ~ 경기 종료 후 2시간</span><br></br>
            <span className="label">주차비용</span> 
            <span className="time">2000원/일</span>
          </p>
        </div>
      </div>

      <button className="order-box">
      <p className="order-text">지금 있는 구장에서<br/>먹거리 주문하기</p>
        <img src={foodOrderImage} alt="Food Order" className="order-image" />
      </button>
    </div>
  );
};

export default Homeground;
