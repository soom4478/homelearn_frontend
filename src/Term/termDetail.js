import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { termImfo2 } from "./termImfo2";
import returnIcon from "../image/return.png";
import playIcon from "../image/vedioPlay.png";
import "./termDetail.css";

const NextPage = () => {
  const location = useLocation();
  const { term, index } = location.state;

  const navigate = useNavigate(); // useNavigate 훅 사용
  const handleReturnClick = () => {
    navigate(-1); // 뒤로 이동
  };

  return (
    <div className='termDeCon1'>
      <img id="return2" src={returnIcon} alt="return" onClick={handleReturnClick} />
      <div className='termDeCon2'>
        <p id='termD1'>{term.term1}</p>
        <p id='termD2'>{termImfo2[index].term3}</p> {/* term3 내용을 표시 */}
      </div>
      <div className='vedioCon'>
      <img id="playIcon" src={playIcon} alt="playIcon"/>
      </div>
    </div>
  );
};

export default NextPage;
