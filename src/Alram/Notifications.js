import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Notifications.css';

const notifications = [
  { id: 1, category: '커뮤니티', content: '커뮤니티 게시물 내용 1', date: '1분 전' },
  { id: 2, category: '커뮤니티', content: '커뮤니티 게시물 내용 2', date: '1시간 전' },
  { id: 3, category: '경기 일정', content: '경기 일정 내용 1', date: '7분 전' },
  { id: 4, category: '경기 일정', content: '경기 일정 내용 2', date: '1일 전' }
];

const Notifications = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container2">
      <div className="header2">
        <button className="back-button2" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </button>
        <div className="title2">알림</div>
      </div>
      <div className="notifications-container2">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification2">
            <div className="notification-header2">
              <div className="category2">{notification.category}</div>
              <div className="notification-date2">{notification.date}</div>
            </div>
            <div className="notification-content2">{notification.content}</div>
            <div className="notification-footer2">
              {/* Footer content */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
