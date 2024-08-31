import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './SongDetail.css';

const SongDetail = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="song-detail-container">
      <ArrowBackIcon className="arrow-button" onClick={handleBackClick} />
      <div className="title-text">엘도라도</div>
      <a href="https://youtu.be/euO5P5XtXF0?si=xWqZCZfyNSM6Z6p8" className="link-text">
        응원 영상 보러가기 &gt;
      </a>
      <div className="like-container">
        <div className="like-icon" onClick={handleLikeClick}>
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
        <div className="like-count">{likeCount}</div>
      </div>
      <div className="bottom-box">
        <div className="lyrics">
          <p>오~오오오오오 최! 강! 삼성!</p>
          <p>오~오오오오오 최! 강! 삼성!</p>
          <p>오~오오오오오 최! 강! 삼성!</p>
          <p>오~오오오오오 최! 강! 삼성!</p>
          <p>최강삼성 승리하리라~</p>
          <p>오오오 오오오오오오</p>
          <p>최강삼성 승리하리라~</p>
          <p>오오오 오오오오오오</p>
          <p>오~오오오오오 최! 강! 삼성!</p>
          <p>오~오오오오오 최! 강! 삼성!</p>
          <p>오~오오오오오 최! 강! 삼성!</p>
          <p>오~오오오오오 최! 강! 삼성!</p>
          <p>최강삼성 승리하리라~</p>
          <p>오오오 오오오오오오</p>
          <p>최강삼성 승리하리라~</p>
          <p>오오오 오오오오오오</p>
        </div>
      </div>
    </div>
  );
};

export default SongDetail;