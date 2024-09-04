import React from 'react';
import { useLocation } from 'react-router-dom';
import "./comuDetail.css";
import returnIcon from "../image/return.png";
import { useNavigate } from 'react-router-dom';
import heartIcon1 from "../image/heart_empty.png";
import comuIcon from "../image/comuIcon.png";
import dotIcon from "../image/dotIcon.png";
import dotIcon2 from "../image/dotIcon2.png";
import { commentImfo } from './commentImfo';

const ComuDetail = () => {
    const navigate = useNavigate();

    const handleReturnClick = () => {
        navigate(-1); // 뒤로 이동
    };

    const location = useLocation();
    const { item } = location.state;

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
                    <div className="comuHcon">
                        <img id="comuH" src={heartIcon1} alt="heartIcon" />
                        <p id="comuHtext_2">{item.comu_heart}</p>
                    </div>
                    <div className="comuCcon">
                        <img id="comuC" src={comuIcon} alt="commentIcon" />
                        <p id="comuCtext_2">{item.comu_commen}</p>
                    </div>
                </div>
            </div>
            <div className='comuDcon5'>
                {commentImfo.filter(comment => comment.id === item.id).map((comment, index) => (
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
        </div>
    );
};

export default ComuDetail;
