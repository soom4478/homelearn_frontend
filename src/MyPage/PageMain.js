import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageMain.css';
import Profile from '../image/Profile.png';
import Arrow from '../image/Arrow.png';
import { getTeamInfo } from './teamUtils';

function PageMain() {
  const navigate = useNavigate();

  const handleEditProfileClick = () => {
    navigate('/profile');
  };

  const handlePostsClick = () => {
    navigate('/myposts');
  };

  const handleCommentsClick = () => {
    navigate('/mycomments');
  };

  const handleReviewClick = () => {
    navigate('/myreviews');
  };

  const handleNotificationSettingsClick = () => {
    navigate('/settings');
  };

  const profileImage = localStorage.getItem('profileImage') || Profile;
  const name = localStorage.getItem('name') || '구자욱';
  const teamKey = localStorage.getItem('team') || '삼성 라이온즈';
  const team = getTeamInfo(teamKey);

  return (
    <div className="myPage">
      <div className="profile">
        <div className="profile-image-container">
          <img src={profileImage} alt="프로필" className="profile-img2" />
        </div>
        <h2 className="name">{name}</h2>
        <p className="team">{team.name}</p>
      </div>
      <div className="myTeam">
        <div className="team-logo">
          <img src={team.logo} alt="팀 로고"/>
        </div>
        <p className="myTeam-teamName">MY 팀<br />{team.name}</p>
      </div>
      <button className="editProfile" onClick={handleEditProfileClick}>프로필 편집</button>
      <div className="account">
        <div className="Activities">나의 활동</div>
        <button className="text-button" onClick={handlePostsClick}>
          게시글
          <img src={Arrow} alt="Arrow" className="Arrow" />
        </button>
        <div className="line3"></div>
        <button className="text-button" onClick={handleCommentsClick}>
          댓글
          <img src={Arrow} alt="Arrow" className="Arrow" />
        </button>
        <div className="line3"></div>
        <button className="text-button" onClick={handleReviewClick}>
          리뷰
          <img src={Arrow} alt="Arrow" className="Arrow" />
        </button>
        <div className="line3"></div>
        <div className="Account2">계정 관리</div>
        <button className="text-button" onClick={handleNotificationSettingsClick}>
          알림 설정
          <img src={Arrow} alt="Arrow" className="Arrow" />
        </button>
        <div className="line3"></div>
        <button className="text-button">
          로그아웃
        </button>
        <div className="line3"></div>
        <button className="text-button withdraw">
          회원탈퇴
        </button>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default PageMain;
