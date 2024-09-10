import React, { useState, useEffect, useRef } from 'react';
import './Login.css';
import defaultProfileImage from '../image/Profile.png';  
import picture from '../image/picture.png';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Login() {
  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [showImageActions, setShowImageActions] = useState(false);
  const imageContainerRef = useRef(null);
  const imageActionsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfileImage = localStorage.getItem('profileImage');
    const savedName = localStorage.getItem('name');
    const savedTeam = localStorage.getItem('team');

    if (savedProfileImage) setProfileImage(savedProfileImage);
    if (savedName) setName(savedName);
    if (savedTeam) setTeam(savedTeam);
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem('profileImage', reader.result);
        setShowImageActions(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetToDefaultImage = () => {
    setProfileImage(defaultProfileImage);
    localStorage.setItem('profileImage', defaultProfileImage);
    setShowImageActions(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleConfirm = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('team', team);
    navigate('/Home'); 
  };

  const toggleImageActions = () => {
    setShowImageActions(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      imageContainerRef.current &&
      !imageContainerRef.current.contains(event.target) &&
      imageActionsRef.current &&
      !imageActionsRef.current.contains(event.target)
    ) {
      setShowImageActions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="profile-container">
      <div className="login-body">
        <div className="profile-image-container" ref={imageContainerRef}>
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
            onClick={toggleImageActions}
          />
          <img src={picture} alt="picture" className="picture" />
          {showImageActions && (
            <div className="image-actions" ref={imageActionsRef}>
              <button className="image-action-button" onClick={resetToDefaultImage}>
                기본이미지로 변경
              </button>
              <label className="image-action-button">
                갤러리에서 이미지 넣기
                <input
                  type="file"
                  id="image-input"
                  className="image-input"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          )}
        </div>

        <div className="input-group2">
          <div className="name2">이름</div>
          <label htmlFor="name-input"></label>
          <input
            type="text"
            id="name-input"
            className="name-input"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="input-group">
          <div className="team2">
            MY 팀
            <span className="team-description">응원하는 구단을 선택해주세요</span>
          </div>
          <FormControl fullWidth sx={{ minWidth: 310, fontFamily: 'Pretendard-Medium' }}>
            <InputLabel id="team-select-label" sx={{ fontFamily: 'Pretendard-Medium' }}></InputLabel>
            <Select
              labelId="team-select-label"
              id="team-select"
              value={team}
              label=""
              onChange={(event) => setTeam(event.target.value)}
              sx={{ 
                backgroundColor: 'white', 
                color: '#333', 
                border: '0px solid #E8ECEF',
                fontFamily: 'Pretendard-Medium',
                '& .MuiSelect-icon': {
                  color: 'white',
                },
                '&:focus': {
                  border: '1px solid #E8ECEF',
                }
              }}
            >
              <MenuItem value="KIA 타이거즈" sx={{ fontFamily: 'Pretendard-Medium' }}>KIA 타이거즈</MenuItem>
              <MenuItem value="두산 베어스" sx={{ fontFamily: 'Pretendard-Medium' }}>두산 베어스</MenuItem>
              <MenuItem value="롯데 자이언츠" sx={{ fontFamily: 'Pretendard-Medium' }}>롯데 자이언츠</MenuItem>
              <MenuItem value="삼성 라이온즈" sx={{ fontFamily: 'Pretendard-Medium' }}>삼성 라이온즈</MenuItem>
              <MenuItem value="SSG 랜더스" sx={{ fontFamily: 'Pretendard-Medium' }}>SSG 랜더스</MenuItem>
              <MenuItem value="LG 트윈스" sx={{ fontFamily: 'Pretendard-Medium' }}>LG 트윈스</MenuItem>
              <MenuItem value="키움 히어로즈" sx={{ fontFamily: 'Pretendard-Medium' }}>키움 히어로즈</MenuItem>
              <MenuItem value="KT wiz" sx={{ fontFamily: 'Pretendard-Medium' }}>KT wiz</MenuItem>
              <MenuItem value="한화 이글스" sx={{ fontFamily: 'Pretendard-Medium' }}>한화 이글스</MenuItem>
            </Select>
          </FormControl>
        </div>
        <button className="complete-button" onClick={handleConfirm}>
          완료
        </button>
      </div>
    </div>
  );
}

export default Login;
