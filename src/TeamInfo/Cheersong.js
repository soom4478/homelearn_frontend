import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Cheersong.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Cheersong = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [likedSongs, setLikedSongs] = useState({});
  const navigate = useNavigate();

  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);

  const songs = [
    { id: 1, name: '엘도라도', category: '구단' },
    { id: 2, name: '환희', category: '구단' },
    { id: 3, name: 'Jump up Lions', category: '구단' },
    { id: 4, name: '우리들의 함성', category: '구단' },
    { id: 5, name: '구자욱 응원가', category: '선수' },
    { id: 6, name: '김헌곤 응원가', category: '선수' },
  ];

  const filteredSongs = songs.filter((song) => {
    const matchTab =
      activeTab === 0 ||
      (activeTab === 1 && song.category === '구단') ||
      (activeTab === 2 && song.category === '선수');
    const matchSearch = song.name.includes(searchTerm);
    return matchTab && matchSearch;
  });

  const handleLike = (id) => {
    setLikedSongs((prev) => {
      const newLikes = { ...prev };
      if (newLikes[id]) {
        newLikes[id]--;
      } else {
        newLikes[id] = 1;
      }
      return newLikes;
    });
  };

  const handleClick = (id) => {
    // 엘도라도 버튼 클릭하면 SongDetail 페이지로 이동
    if (id === 1) { // 엘도라도의 id가 1임
      navigate(`/songdetail/${id}`);
    }
  };

  return (
    <div className="container10">
      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <ArrowBackIcon />
        </button>
        <div className="title">삼성 라이온즈 응원가</div>
        <div className="line"></div>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="검색어를 입력해주세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon className="search-icon" />
      </div>

      <div className="tab-container">
        <div
          className={`tab ${activeTab === 0 ? 'tab-active' : ''}`}
          onClick={() => setActiveTab(0)}
        >
          전체
        </div>
        <div
          className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
          onClick={() => setActiveTab(1)}
        >
          구단
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
          onClick={() => setActiveTab(2)}
        >
          선수
        </div>
      </div>

      <div className="button-container">
        {filteredSongs.map((song) => (
          <div key={song.id} className="button-wrapper">
            <button
              className="button"
              onClick={() => handleClick(song.id)}  
            >
              <span className="button-text">{song.name}</span>
              <div className="checkbox-container">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  className="button-heart"
                  sx={{
                    color: '#FA9092',
                    '&.Mui-checked': {
                      color: '#FA9092',
                    },
                  }}
                  checked={likedSongs[song.id] > 0}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(song.id);
                  }}
                />
                {likedSongs[song.id] > 0 && (
                  <span className="like-count" style={{ color: '#FA9092', display: 'block', textAlign: 'center', marginTop: '-5px', fontSize: '13px' }}>
                    {likedSongs[song.id]}
                  </span>
                )}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cheersong;
