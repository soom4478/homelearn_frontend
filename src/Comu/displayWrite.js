import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import returnIcon from "../image/xIcon.png";
import imgInput from "../image/imgInput.png";
import { setDisplayInfo } from './displayImfo';
import "./displayWrite.css";

const ComuWrite = () => {
    const navigate = useNavigate();
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const handleReturnClick = () => {
        navigate(-1); // 뒤로 이동
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setBackgroundImage(imageUrl);
        }
    };

    const handleDivClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
        event.target.style.height = 'auto'; // 높이를 자동으로 조정
        event.target.style.height = `${event.target.scrollHeight}px`; // 내용에 맞게 높이 설정
        if (event.target.value.length > 12) {
            setError('텍스트는 12자까지 작성 가능합니다.');
        } else {
            setError('');
        }
    };

    const handleCompleteClick = () => {
        if (text.length > 12) {
            setError('텍스트는 12자까지 작성 가능합니다.');
        } else {
            setDisplayInfo(backgroundImage, text); // 이미지와 텍스트 저장
            navigate(-1); // 뒤로 이동
        }
    };

    return (
        <div className='disCon1'>
            <div className='comuTcon'>
                <div className="comuWcon2">
                    <div className='calender-con'>
                        <img id="return" src={returnIcon} alt="return" onClick={handleReturnClick} /> {/* 클릭 이벤트 핸들러 추가 */}
                        <span id='foodDetail-title'>전광판 작성</span>
                        <span id='complete' onClick={handleCompleteClick}>완료</span> {/* 클릭 이벤트 핸들러 추가 */}
                    </div>
                </div>
            </div>
            <div
                className='imgInputCon'
                onClick={handleDivClick}
                style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {!backgroundImage && <img id='imgInput' src={imgInput} alt='imgInput' />}
            </div>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleImageChange}
            />
            <hr id='disLine' />
            <div className='disCon2'>
                <textarea
                    className='textInput'
                    placeholder="12글자까지 작성해주세요."
                    value={text}
                    onChange={handleTextChange}
                    onInput={handleTextChange} // onInput 이벤트 핸들러 추가
                    style={{ overflow: 'hidden' }} // 스크롤바 숨기기
                ></textarea>
                {error && <p className='disError'>{error}</p>} {/* 경고문 표시 */}
            </div>
        </div>
    );
};

export default ComuWrite;
