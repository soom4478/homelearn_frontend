import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { comuImfo } from './comuImfo';
import { displayInfo } from './displayImfo';
import "./comuMain.css";
import heartIcon from "../image/heartIcon.png";
import commentIcon from "../image/commentIcon.png";
import comuBtn from "../image/comuBtn.png";

const ComuMain = () => {
    const [selectedIndex, setSelectedIndex] = useState('전체'); // 초기값을 "전체"로 설정
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [displayText, setDisplayText] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (displayInfo.image) {
            setBackgroundImage(displayInfo.image);
        }
        if (displayInfo.text) {
            setDisplayText(displayInfo.text);
        }
    }, []);

    const navItems = ['전체', '삼성 라이온즈'];
  
    const handleItemClick = (item) => {
      setSelectedIndex(item);
    };

    const handleWriteClick = () => {
        navigate(`/community/write`, { state: { selectedIndex } });
    };

    const handleDisplqyClick = () => {
        navigate(`/community/display`);
    };

    const handleComuClick = (item) => {
      navigate(`/community/detail`, { state: { item } });
    };

    const calculateTimeDifference = (comuTime) => {
        const now = new Date();
        const comuDate = new Date(`20${comuTime.replace('.', '-').replace('.', '-').replace(' ', 'T')}`);
        const diffInSeconds = Math.floor((now - comuDate) / 1000);
        const hours = Math.floor(diffInSeconds / 3600);
        const minutes = Math.floor((diffInSeconds % 3600) / 60);
        const seconds = diffInSeconds % 60;

        if (hours > 0) {
            return `${hours}시간 전`;
        } else if (minutes > 0) {
            return `${minutes}분 전`;
        } else if (seconds > 0) {
            return `${seconds}초 전`;
        } else {
            return '';
        }
    };

    const sortedComuImfo = comuImfo
        .filter(item => item.club === selectedIndex)
        .sort((a, b) => new Date(`20${b.comu_time.replace('.', '-').replace('.', '-').replace(' ', 'T')}`) - new Date(`20${a.comu_time.replace('.', '-').replace('.', '-').replace(' ', 'T')}`));

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
            <div
                className='displayCon1'
                style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <button className='displayB'>
                    <p onClick={handleDisplqyClick}>전광판 작성하기</p>
                </button>
                <p className='displayText'>{displayText}</p>
            </div>
            <div className='comuMcon3'>
                {sortedComuImfo.map((item, index) => (
                    <div className="comuCon3_2" key={index}>
                        <div className="comuCon4_2" onClick={() => handleComuClick(item)}>
                            <p id="comuT">{item.comu_title}</p>
                            <p id="comuI">{item.comu_text}</p>
                            <p id="comuB">{calculateTimeDifference(item.comu_time)}</p> {/* 현재 시간에서 comu_time을 뺀 값 표시 */}
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
