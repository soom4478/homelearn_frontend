import React, { useState } from 'react';
import './Player.css'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';  
import Jawook from '../image/Jawook.png'; 
import Jaehyun from '../image/Jaehyun.png'; 
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'; 
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'; 

const players = [
  { 
    id: 5, 
    name: '구자욱', 
    role: '주장', 
    position: '좌익수', 
    number: '5', 
    image: Jawook,
    birthDate: '1993-02-12', 
    debut: '2012년 삼성', 
    height: '189cm', 
    weight: '75kg', 
    instagram: 'koojawook'
  },
  { 
    id: 7, 
    name: '이재현', 
    role: 0, 
    position: '유격수', 
    number: '7', 
    image: Jaehyun,
    birthDate: '2003-02-04', 
    debut: '2022년 삼성', 
    height: '180cm', 
    weight: '82kg', 
    instagram: 'lee.j.hyeon7_'
  },
];

const Player = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [favoredPlayers, setFavoredPlayers] = useState(new Set());

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const closeModal = () => {
    setSelectedPlayer(null);
  };

  const toggleFavorite = (playerId) => {
    setFavoredPlayers(prevFavoredPlayers => {
      const newFavoredPlayers = new Set(prevFavoredPlayers);
      if (newFavoredPlayers.has(playerId)) {
        newFavoredPlayers.delete(playerId);
      } else {
        newFavoredPlayers.add(playerId);
      }
      return newFavoredPlayers;
    });
  };

  const filteredPlayers = players
    .filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const isAFavored = favoredPlayers.has(a.id);
      const isBFavored = favoredPlayers.has(b.id);

      if (isAFavored && !isBFavored) return -1;
      if (!isAFavored && isBFavored) return 1;
      return 0;
    });

  return (
    <div className="container2">
      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <ArrowBackIcon />
        </button>
        <div className="title">삼성 라이온즈 선수</div>
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
      </div>

      <div className="player-count">
        {filteredPlayers.length}명
      </div>

      <ul className="player-list">
        {filteredPlayers.map((player) => (
          <li
            key={player.id}
            className="player-item"
            onClick={() => handlePlayerClick(player)}
          >
            <img src={player.image} alt={player.name} width="50" />
            <div className="player-info">
              <div className="player-name">
                {player.name}
                {player.role !== 0 && (
                  <div className="player-role">{player.role}</div>
                )}
                <div
                  className="favorite-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(player.id);
                  }}
                >
                  {favoredPlayers.has(player.id) ? (
                    <StarRateRoundedIcon />
                  ) : (
                    <StarBorderRoundedIcon />
                  )}
                </div>
              </div>
              <div className="player-id">{player.id}</div>
              <div className="player-position">{player.position}</div>
            </div>
          </li>
        ))}
      </ul>

      {selectedPlayer && (
        <div id="playerModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-header">
              <img src={selectedPlayer.image} alt={selectedPlayer.name} className="modal-image" />
              <div className="modal-info">
                <h2 className="modal-name">{selectedPlayer.name}</h2>
                <a href="#" className="cheer-link">응원가 바로가기 &gt;</a>
                <div className="modal-number"><span style={{fontFamily: 'Pretendard-SemiBold'}}>등번호</span>
                <span style={{ marginLeft: '30px', fontFamily:'Pretendard-Medium', color:'#767676'  }}>No.{selectedPlayer.number}</span></div>
                <div className="modal-position"><span style={{fontFamily: 'Pretendard-SemiBold'}}>포지션</span>
                <span style={{ marginLeft: '30px', fontFamily:'Pretendard-Medium', color:'#767676'  }}>{selectedPlayer.position}</span></div>
              </div>
            </div>
            <div className="modal-details">
              <div className="modal-detail-item"><span style={{fontFamily: 'Pretendard-SemiBold'}}>생년월일</span>
              <span style={{ marginLeft: '36px', fontFamily:'Pretendard-Medium', color:'#767676' }}>{selectedPlayer.birthDate}</span></div>
              <div className='line4'></div>
              <div className="modal-detail-item"><span style={{fontFamily: 'Pretendard-SemiBold'}}>입단</span>
              <span style={{ marginLeft: '63px', fontFamily:'Pretendard-Medium', color:'#767676'  }}>{selectedPlayer.debut}</span></div>
              <div className='line4'></div>
              <div className="modal-detail-item"><span style={{fontFamily: 'Pretendard-SemiBold'}}>신장</span>
              <span style={{ marginLeft: '63px', fontFamily:'Pretendard-Medium', color:'#767676'  }}>{selectedPlayer.height}</span></div>
              <div className='line4'></div>
              <div className="modal-detail-item"><span style={{fontFamily: 'Pretendard-SemiBold'}}>체중</span>
              <span style={{ marginLeft: '63px', fontFamily:'Pretendard-Medium', color:'#767676'  }}>{selectedPlayer.weight}</span></div>
              <div className='line4'></div>
              <div className="modal-detail-item"><span style={{fontFamily: 'Pretendard-SemiBold'}}>인스타그램</span>
              <span style={{ marginLeft: '18px', fontFamily:'Pretendard-Medium', color:'#767676'  }}> <a href={`https://www.instagram.com/${selectedPlayer.instagram}`} target="_blank" rel="noopener noreferrer">@{selectedPlayer.instagram}</a></span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
