import React, { useState } from "react";
import "./reviewWrite.css";
import returnIcon from "../image/xIcon.png";
import imgInput from "../image/imgInput.png";
import reviewStar from "../image/viewStar.png";
import emptyStar from "../image/viewEmpty.png";
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

const ReviewWrite = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleReturnClick = () => {
        navigate(-1); // 뒤로 이동
    };

    const handleCompleteClick = () => {
        navigate(-1); // 뒤로 이동
    };

    return (
      <div className="reviewWcon1">
        <div className='comuTcon'>
            <div className="comuWcon2">
                <div className='calender-con'>
                    <img id="return" src={returnIcon} alt="return" onClick={handleReturnClick} /> {/* 클릭 이벤트 핸들러 추가 */}
                    <span id='foodDetail-title'>리뷰 작성</span>
                    <span id='complete' onClick={handleCompleteClick}>완료</span>
                </div>
            </div>
        </div>
        <div className="reviewStarCon2">
            <Rating
                name={`reviewStarW`}
                value={0}
                precision={0.5}
                readOnly
                icon={<img src={reviewStar} alt="review star" style={{ width: '45px', height: '40px' }} />}
                emptyIcon={<img src={emptyStar} alt="empty star" style={{ width: '45px', height: '40px' }} />}
            />
        </div>
        <p id="reviewQ">주문한 메뉴가 어떠셨나요?</p>
        <hr id="reviewLine" />
        <div className="inputContainer">
            <div className="reviewImg2">
                <img id="reviewIcon" src={imgInput} />
            </div>
            <div className="reviewWcon">
                <textarea
                    className="reviewWcon2"
                    placeholder="솔직한 리뷰를 남겨주세요." 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                />
            </div>
        </div>
      </div>
    );
};

export default ReviewWrite;
