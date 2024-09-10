import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./comuDetail.css";
import returnIcon from "../image/return.png";
import { useNavigate } from 'react-router-dom';
import heartIcon1 from "../image/heart_empty.png";
import heartIcon2 from "../image/heart_full.png";
import comuIcon from "../image/comuIcon.png";
import dotIcon from "../image/dotIcon.png";
import dotIcon2 from "../image/dotIcon2.png";
import { commentImfo, addComment } from './commentImfo';
import { comuImfo, updateHeartCount } from './comuImfo';

const ComuDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { item } = location.state;

    const [isCommenting, setIsCommenting] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([...commentImfo]);
    const [isHearted, setIsHearted] = useState(false);
    const [heartCount, setHeartCount] = useState(item.comu_heart);

    useEffect(() => {
        const heartedStatus = localStorage.getItem(`isHearted_${item.id}`);
        if (heartedStatus) {
            setIsHearted(JSON.parse(heartedStatus));
        }
    }, [item.id]);

    const handleReturnClick = () => {
        navigate(-1); // 뒤로 이동
    };

    const handleCommentClick = () => {
        setIsCommenting(true); // 상태 변경
    };

    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && commentText.trim() !== '') {
            const formatDate = (date) => {
                const year = String(date.getFullYear()).slice(2);
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}.${month}.${day}`;
            };
    
            const newComment = {
                id: item.id,
                name: '사용자 이름', // 실제 사용자 이름으로 대체
                time: formatDate(new Date()), // 원하는 형식으로 날짜 포맷
                comment: commentText
            };
            setComments([...comments, newComment]);
            addComment(newComment);
            setCommentText('');
            setIsCommenting(false);
        }
    };

    const handleHeartClick = () => {
        const newHeartedStatus = !isHearted;
        setIsHearted(newHeartedStatus);
        localStorage.setItem(`isHearted_${item.id}`, JSON.stringify(newHeartedStatus));
        const newHeartCount = newHeartedStatus ? heartCount + 1 : heartCount - 1;
        setHeartCount(newHeartCount);
        updateHeartCount(item.id, newHeartCount);
    };

    return (
        <div className='comuDcon1'>
            <div className='comuTcon'>
                <div className="foodDcon2">
                    <div className='calender-con'>
                        <img id="return" src={returnIcon} alt="return" onClick={handleReturnClick} /> {/* 클릭 이벤트 핸들러 추가 */}
                        <p id='foodDetail-title'>{item.comu_title}</p>
                    </div>
                </div>
            </div>
            <div className='comuDcon2'>
                <div className='comuDcon3'>
                    <div className='comuProfile'></div>
                    <div className='comuUser'>
                        <p id='uname'>{item.uname}</p>
                        <p id='utime'>{item.time}</p>
                    </div>
                    <img id='dotIcon1' src={dotIcon} alt="dotIcon1" />
                </div>
                <p id='utext'>{item.comu_text}</p>
                <div className='comuDcon4'>
                    <div className="comuHcon" onClick={handleHeartClick}>
                        <img id="comuH" src={isHearted ? heartIcon2 : heartIcon1} alt="heartIcon" />
                        <p id="comuHtext_2">{heartCount}</p>
                    </div>
                    <div className="comuCcon">
                        <img id="comuC" src={comuIcon} alt="commentIcon" />
                        <p id="comuCtext_2">{item.comu_commen}</p>
                    </div>
                </div>
            </div>
            <div className='commentBcon'>
                <span id='commentBtn' onClick={handleCommentClick}>댓글 쓰기</span>
            </div>
            {isCommenting ? (
                <div className='commentWrite'>
                    <textarea
                        id='commentBox'
                        placeholder="댓글을 입력하세요"
                        value={commentText}
                        onChange={handleCommentChange}
                        onKeyPress={handleKeyPress}
                    ></textarea>
                </div>
            ) : (
                <div className='comuDcon5'>
                    {comments.filter(comment => comment.id === item.id).map((comment, index) => (
                        <div className='comuDcon8' key={index}>
                            <div className='comuDcon6'>
                                <div className='cmtCon'>
                                    <div className='comuDcon7'></div>
                                    <div className='comuProfile2'></div>
                                    <div className='comuUser'>
                                        <p id='uname'>{comment.name}</p>
                                        <p id='utime'>{comment.time}</p>
                                    </div>
                                    <img id='dotIcon2' src={dotIcon2} alt="dotIcon2" />
                                </div>
                                <p id='cmtText'>{comment.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ComuDetail;
