import React, { useEffect, useRef, useState } from 'react';
import "./term.css";
import { useNavigate } from 'react-router-dom';
import search_icon from '../image/search_icon.png';
import search_icon2 from '../image/search_icon2.png';
import returnIcon from "../image/return.png";
import nextarrow from "../image/nextArrow.png";
import { termImfo } from "./termImfo";
import { termImfo2 } from "./termImfo2";

const Term = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchIcon, setSearchIcon] = useState(search_icon);
  const termCateRefs = useRef([]);
  const [termCateWidths, setTermCateWidths] = useState([]);
  const [selectedCate, setSelectedCate] = useState(0); // 첫 번째 배열 항목이 미리 선택된 상태로 설정

  const navigate = useNavigate(); // useNavigate 훅 사용
  const handleReturnClick = () => {
    navigate(-1); // 뒤로 이동
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchIcon(search_icon2);
    setTimeout(() => {
      setSearchIcon(search_icon);
    }, 100);

    const searchValue = searchTerm;
    console.log("Search Term:", searchValue);
  };

  const handleCateClick = (index) => {
    setSelectedCate(index);
  };

  const handleNextClick = (term, index) => {
    navigate('/nextpage', { state: { term, index } });
  };

  useEffect(() => {
    const newWidths = termCateRefs.current.map(ref => {
      if (ref) {
        const textLength = ref.textContent.length;
        const fontSize = window.getComputedStyle(ref).fontSize.replace('px', '');
        return textLength * fontSize + 15; // 글자 수 * 글자 크기 + 15px
      }
      return 'auto';
    });
    setTermCateWidths(newWidths);
  }, []);

  return (
    <div className="termCon1">
      <div className='calender-con2'>
        <img id="return" src={returnIcon} alt="return" onClick={handleReturnClick} /> {/* 클릭 이벤트 핸들러 추가 */}
        <p id='calender-title'>야구 백과사전</p>
      </div>

      <div className="termCon2">
        <input
          type="text"
          id="input_term"
          placeholder="검색어를 입력해주세요"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <img
          id="termSearchIcon"
          src={searchIcon}
          alt="search_icon"
          onClick={handleSearchClick}
        />
      </div>

      <div className="termCate1">
        {termImfo.map((item, index) => (
          <div
            className="termCate2"
            ref={el => termCateRefs.current[index] = el}
            style={{
              width: termCateWidths[index],
              backgroundColor: selectedCate === index ? '#009788' : '#DEE1E6',
              color: selectedCate === index ? 'white' : '#767676'
            }}
            key={index}
            onClick={() => handleCateClick(index)}
          >
            {item.cate}
          </div>
        ))}
      </div>
      <div className='termCon3'>
        {termImfo2.map((term, index) => (
          <div className="termCon4" key={index}>
            <div className='termCon5'>
              <div className="termText">
                <p id="termT1">{term.term1}</p>
                <p id="termT2">{term.term2}</p>
              </div>
              <img id="nextarrow2" src={nextarrow} alt="nextarrow" onClick={() => handleNextClick(term, index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Term;
