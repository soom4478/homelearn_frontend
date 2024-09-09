import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { comuImfo } from './comuImfo';
import "./comuMain.css";
import heartIcon from "../image/heartIcon.png";
import commentIcon from "../image/commentIcon.png";
import comuBtn from "../image/comuBtn.png";

const ComuMain = () => {
    const [selectedIndex, setSelectedIndex] = useState('전체'); // 초기값을 "전체"로 설정
    const navigate = useNavigate();

    const navItems = ['전체', '삼성 라이온즈'];
  
    const handleItemClick = (item) => {
      setSelectedIndex(item);
    };

    const handleWriteClick = () => {
        navigate(`/community/write`);
    };

    const handleComuClick = (item) => {
      navigate(`/community/detail`, { state: { item } });
    };

    return (
        <div className='comuMcon1'>
            <div className="nav-bar">
            {navItems.map((item, index) => (
                <div
                id='comuMcon2'
                key={index}
                className={`nav-item ${selectedIndex === item ? 'selected' : ''}`}
                onClick={() => handleItemClick(item)}
                >
                <p>{item}</p>
                </div>
            ))}
            </div>
            <div className='displayCon1'>
                <button className='displayB'>
                    <p>전광판 작성하기</p>
                </button>
                <p className='displayText'>푸른피의 에이스 원태인</p>
            </div>
            <div className='comuMcon3'>
                {comuImfo
                    .filter(item => item.club === selectedIndex)
                    .map((item, index) => (
                        <div className="comuCon3_2" key={index}>
                            <div className="comuCon4_2" onClick={() => handleComuClick(item)}>
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
                        </div>
                    ))}
            </div>
            <img id="comuBtn" src={comuBtn} alt="comuBtn" onClick={handleWriteClick} />
        </div>
    );
};

export default ComuMain;
