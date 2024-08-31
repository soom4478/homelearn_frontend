import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { reviewImfo } from "./reviewImfo";
import returnIcon from "../image/return.png";
import star from "../image/star_icon.png";
import reviewStarIcon from "../image/reviewStar.png";
import emptyStarIcon from "../image/emptyReviewStar.png";
import "./foodDetail.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Review = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용
    
    const handleReturnClick = () => {
      navigate(-1); // 뒤로 이동
    };
  
    return (
      <div className="reviewCon1">
        <div className="foodDcon1">
        <div className="foodDcon2">
          <div className='calender-con'>
            <img id="return" src={returnIcon} alt="return" onClick={handleReturnClick} /> {/* 클릭 이벤트 핸들러 추가 */}
            <p id='foodDetail-title'>리뷰</p>
          </div>
        </div>
        </div>
        <div className="reviewStar">
          <Stack spacing={1}>
            <Rating
              className="readStar"
              name="rating-read"
              defaultValue={3}
              precision={1}
              readOnly
              icon={<Box component="img" src={reviewStarIcon} /*sx={{ width: 24, height: 24 }}*/ />}
              emptyIcon={<Box component="img" src={emptyStarIcon} />}
            />
          </Stack>
        </div>
      </div>
    );
  };
  
  export default Review;
