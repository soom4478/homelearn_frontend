import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Start.css';
import Homelearn from "../image/HOMELEARN.png";
import Kakao from "../image/Kakao.png";

const Start = () => {
  const navigate = useNavigate();

  const handleKakaoClick = () => {
    navigate('/login');
  };

  return (
    <div className="start-container">
      <div className="content">
        <div className="Start-text">야구의 모든 것을<br />한눈에 담다</div>
        <img src={Homelearn} alt="Homelearn Logo" className="homelearn-logo" />
        <div className="button-container">
          <button className="kakao-button" onClick={handleKakaoClick}>
            <img src={Kakao} alt="Kakao Icon" className="kakao-icon" />
            카카오톡으로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
