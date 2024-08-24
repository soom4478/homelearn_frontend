import React, { useState } from 'react';
import { comuImfo } from "./comuImfo";
import './comuMain.css';

const ComuMain = () => {
    const [selectedIndex, setSelectedIndex] = useState(0); // 초기값을 0으로 설정하여 "전체"가 선택된 상태로 설정

    const navItems = ['전체', '삼성 라이온즈'];
  
    const handleItemClick = (index) => {
      setSelectedIndex(index);
    };

    return (
        <div className='comuMcon1'>
            <div className="nav-bar">
            {navItems.map((item, index) => (
                <div
                id='comuMcon2'
                key={index}
                className={`nav-item ${selectedIndex === index ? 'selected' : ''}`}
                onClick={() => handleItemClick(index)}
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
                <div className="comuCon3_2">
                {comuImfo.map((item, index) => (
                    <div className="comuCon4_2" key={index}>
                    <p id="comuT">{item.comu_title}</p>
                    <p id="comuI">{item.comu_text}</p>
                    <p id="comuB">{item.comu_time}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default ComuMain;
