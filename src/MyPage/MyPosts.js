import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './MyPosts.css';

import heartIcon from '../image/heart.png'; 
import chatIcon from '../image/chat.png'; 

const comments = {
  '전체': [
    { id: 1, title: '게시물 1', content: '게시물 1', date: '2024-08-27', likes: 12, replies: 5 },
    { id: 2, title: '게시물 2', content: '게시물 2', date: '2024-08-26', likes: 7, replies: 2 }
  ],
  '삼성 라이온즈': [
    { id: 3, title: '게시물 3', content: '게시물 3', date: '2024-08-25', likes: 3, replies: 8 },
    { id: 4, title: '게시물 4', content: '게시물 4', date: '2024-08-24', likes: 1, replies: 1 }
  ]
};

const MyPosts = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('전체');

  const filteredComments = comments[activeTab] || [];

  return (
    <div className="app-container2">
      <div className="header2">
        <button className="back-button2" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </button>
        <div className="title2">나의 게시글</div>
      </div>
      <div className="tab-container2">
        <div
          className={`tab2 ${activeTab === '전체' ? 'tab-active2' : ''}`}
          onClick={() => setActiveTab('전체')}
        >
          전체
        </div>
        <div
          className={`tab2 ${activeTab === '삼성 라이온즈' ? 'tab-active2' : ''}`}
          onClick={() => setActiveTab('삼성 라이온즈')}
        >
          삼성 라이온즈
        </div>
      </div>
      <div className="comments-container2">
        {filteredComments.map(comment => (
          <div key={comment.id} className="comment2">
            <div className="comment-title2">{comment.title}</div>
            <div className="comment-content2">{comment.content}</div>
            <div className="comment-footer2">
              <div className="comment-date2">{comment.date}</div>
              <div className="comment-icons">
                <img src={heartIcon} alt="하트" className="icon" />
                <span className="icon-count">{comment.likes}</span>
                <img src={chatIcon} alt="채팅" className="icon" />
                <span className="icon-count">{comment.replies}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
