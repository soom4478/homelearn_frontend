import React, { useState } from 'react';
import './Player.css'
import SearchIcon from '@mui/icons-material/Search';  
import ArrowBackIcon from '@mui/icons-material/ArrowBack';  
import Jawook from '../image/Jawook.png'; 
import Jaehyun from '../image/Jaehyun.png'; 
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'; // 채워진 별
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'; // 빈 별

// 선수 리스트
const players = [
  { id: 5, name: '구자욱', role: '주장', position: '좌익수', number: '5', image: Jawook },
  { id: 7, name: '이재현', role: 0, position: '유격수', number: '7', image: Jaehyun },
];

const Player = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [favoredPlayers, setFavoredPlayers] = useState(new Set()); // 즐겨찾기한 선수의 id(등번호)를 저장

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

  // 필터링?...하고 정리
  const filteredPlayers = players
    .filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // 즐겨찾기한 선수가 맨 위로 오도록 정렬
      const isAFavored = favoredPlayers.has(a.id);
      const isBFavored = favoredPlayers.has(b.id);

      if (isAFavored && !isBFavored) return -1;
      if (!isAFavored && isBFavored) return 1;
      return 0;
    });

  return (
    <div className="app-container">
      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <ArrowBackIcon />
        </button>
        <div className="title">삼성 라이온즈 선수단</div>
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
                    e.stopPropagation(); // 별 클릭했을 때 팝업이 켜지지 않게 해줌
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
            <h2>{selectedPlayer.name}</h2>
            <p>{selectedPlayer.name} 잘생겻다~!</p>   
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
