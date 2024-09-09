import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./comuWrite.css";
import returnIcon from "../image/xIcon.png";
import { useNavigate } from 'react-router-dom';

const ComuWrite = () => {
    const navigate = useNavigate();

    const handleReturnClick = () => {
        navigate(-1); // 뒤로 이동
    };

    const location = useLocation();
    // const { item } = location.state;

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
        autoResize(event.target);
    };

    const autoResize = (textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    };

    return (
        <div className='comuWcon1'>
            <div className='comuTcon'>
                <div className="comuWcon2">
                    <div className='calender-con'>
                        <img id="return" src={returnIcon} alt="return" onClick={handleReturnClick} /> {/* 클릭 이벤트 핸들러 추가 */}
                        <span id='foodDetail-title'>게시글 작성</span>
                        <span id='complete'>완료</span>
                    </div>
                </div>
            </div>
            <div className='comuWcon3'>
                <input className='titleInput' type="text" placeholder="제목을 입력하세요"></input>
                <textarea className='textInput' type="text" placeholder="야구를 사랑하는 사람들과 소통해요!" value={text} onChange={handleChange} rows={1}></textarea>
            </div>
        </div>
    );
};

export default ComuWrite;
