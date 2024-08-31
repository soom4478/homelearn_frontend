import React from "react";
import "./rule.css";
import { useNavigate } from 'react-router-dom';
import returnIcon from "../image/return.png";
import nextarrow from "../image/nextArrow.png";
import { ruleImfo } from "./ruleImfo";

const Rule = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleReturnClick = () => {
    navigate(-1); // 뒤로 이동
  };

  // ruleImfo 배열의 길이에 따라 padding-bottom 설정
  const ruleConPaddingBottom = ruleImfo.length >= 7 ? '83px' : 'initial';

  return (
    <div className="ruleCon1" style={{ paddingBottom: ruleConPaddingBottom }}>
      <div className='calender-con'>
        <img id="return" src={returnIcon} alt="return" onClick={handleReturnClick} /> {/* 클릭 이벤트 핸들러 추가 */}
        <p id='calender-title'>경기 규칙 설명</p>
      </div>

      <div>
        {ruleImfo.map((rule, index) => (
          <div className="ruleCon2" key={index}>
            <div className="ruleText">
              <p id="ruleT1">{rule.rule1}</p>
              <p id="ruleT2">{rule.rule2}</p>
            </div>
            <img id="nextarrow" src={nextarrow} alt="nextarrow"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rule;
