import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./comuWrite.css";
import returnIcon from "../image/xIcon.png";
import { useNavigate } from 'react-router-dom';
import { comuImfo } from './comuImfo';

const ComuWrite = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedIndex } = location.state;

    const handleReturnClick = () => {
        navigate(-1); // 뒤로 이동
    };

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
        autoResize(event.target);
    };

    const autoResize = (textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    };

    const getCurrentTime = () => {
        const now = new Date();
        const year = String(now.getFullYear()).slice(2);
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
    };

    const handleCompleteClick = () => {
        if (title.trim() !== '' && text.trim() !== '') {
            const newId = comuImfo.length > 0 ? comuImfo[comuImfo.length - 1].id + 1 : 1;
            const now = new Date();
            const formatDate = (date) => {
                const year = String(date.getFullYear()).slice(2);
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}.${month}.${day}`;
            };
            const newComu = {
                id: newId,
                uimage: "",
                uname: "사용자이름",
                club: selectedIndex,
                comu_title: title,
                comu_text: text,
                time: formatDate(now),
                comu_time: getCurrentTime(), // 동적인 시간 추가
                comu_heart: 0,
                comu_commen: 0
            };
            comuImfo.push(newComu);
            navigate(-1); // 뒤로 이동
        } else {
            alert("제목과 내용을 모두 입력하세요.");
        }
    };

    return (
        <div className='comuWcon1'>
            <div className='comuTcon'>
                <div className="comuWcon2">
                    <div className='calender-con'>
                        <img id="return" src={returnIcon} alt="return" onClick={handleReturnClick} /> {/* 클릭 이벤트 핸들러 추가 */}
                        <span id='foodDetail-title'>게시글 작성</span>
                        <span id='complete' onClick={handleCompleteClick}>완료</span>
                    </div>
                </div>
            </div>
            <div className='comuWcon3'>
                <input className='titleInput' type="text" placeholder="제목을 입력하세요" value={title} onChange={handleTitleChange}></input>
                <textarea className='textInput' type="text" placeholder="야구를 사랑하는 사람들과 소통해요!" value={text} onChange={handleTextChange} rows={1}></textarea>
            </div>
        </div>
    );
};

export default ComuWrite;
