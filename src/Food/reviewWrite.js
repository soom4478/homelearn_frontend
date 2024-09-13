import React, { useState } from "react";
import "./reviewWrite.css";
import returnIcon from "../image/xIcon.png";
import imgInput from "../image/imgInput.png";
import reviewStar from "../image/viewStar.png";
import emptyStar from "../image/viewEmpty.png";
import Rating from '@mui/material/Rating';
import { useNavigate, useLocation } from 'react-router-dom';
import { useReviewImfo } from "./reviewImfo"; // reviewImfo 훅을 임포트

const ReviewWrite = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용
    const location = useLocation();
    const { storeId } = location.state; // state에서 storeId 가져오기
    const { reviews, setReviews } = useReviewImfo(); // reviewImfo 훅 사용
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0); // 평점 상태 추가
    const [backgroundImage, setBackgroundImage] = useState(''); // 배경 이미지 상태 추가

    const handleReturnClick = () => {
        navigate(-1); // 뒤로 이동
    };

    const handleCompleteClick = () => {
        const newReview = {
            store_id: {storeId},
            name: "사용자이름", // 사용자 이름을 추가할 수 있습니다.
            time: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
            star: rating,
            img: backgroundImage,
            content: text
        };
        setReviews([...reviews, newReview]); // 새로운 리뷰 추가
        navigate(-1); // 뒤로 이동
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackgroundImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
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
                value={rating} // 평점 상태 값 사용
                precision={0.5}
                onChange={(event, newValue) => {
                    setRating(newValue); // 평점 상태 업데이트
                }}
                icon={<img src={reviewStar} alt="review star" style={{ width: '45px', height: '40px' }} />}
                emptyIcon={<img src={emptyStar} alt="empty star" style={{ width: '45px', height: '40px' }} />}
            />
        </div>
        <p id="reviewQ">주문한 메뉴가 어떠셨나요?</p>
        <hr id="reviewLine" />
        <div className="inputContainer">
            <div
                className="reviewImg2"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover', // 배경 이미지를 꽉 채움
                    backgroundPosition: 'center', // 배경 이미지를 가운데로 정렬
                    backgroundRepeat: 'no-repeat' // 배경 이미지 반복 없음
                }}
                onClick={() => document.getElementById('imageInput').click()} // 클릭 이벤트 핸들러 추가
            >
                {!backgroundImage && (
                    <img id="reviewIcon" src={imgInput} onClick={() => document.getElementById('imageInput').click()} />
                )}
                <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />
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
