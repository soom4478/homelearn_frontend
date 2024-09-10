import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './MyComments.css';  // CSS 파일 이름을 맞춰주세요

const comments = {
  '전체': [
    { id: 1, title: '게시물 1', author: '작성자 1', content: '댓글 내용 1', date: '2024-08-27' },
    { id: 2, title: '게시물 2', author: '작성자 2', content: '댓글 내용 2', date: '2024-08-26' }
  ],
  '삼성 라이온즈': [
    { id: 3, title: '게시물 3', author: '작성자 3', content: '댓글 내용 3', date: '2024-08-25' },
    { id: 4, title: '게시물 4', author: '작성자 4', content: '댓글 내용 4', date: '2024-08-24' }
  ]
};

const MyComments = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('전체');

  const filteredComments = comments[activeTab] || [];

  return (
    <div className="app-container">
      <div className="header2">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </button>
        <div className="title">나의 댓글</div>
      </div>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === '전체' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('전체')}
        >
          전체
        </div>
        <div
          className={`tab ${activeTab === '삼성 라이온즈' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('삼성 라이온즈')}
        >
          삼성 라이온즈
        </div>
      </div>
      <div className="comments-container">
        {filteredComments.map(comment => (
          <div key={comment.id} className="comment">
            <div className="comment-title">{comment.title}</div>
            <div className="comment-meta">
              <span className="comment-author">작성자 {comment.author}</span>
              <span className="comment-date">{comment.date}</span>
            </div>
            <div className="comment-content">
              {comment.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComments;
