import React from 'react';
import stadiumMapImage from '../image/Homeground_Samsung.png';
import Samsung_Price from '../image/Samsung_price.jpg';
import './MapDetail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MapDetail = () => {
  return (
        
      <div className="header4">
        <button className="back-button" onClick={() => window.history.back()}>
          <ArrowBackIcon />
        </button>
        <div className="line4"></div>
        <div className="text-container"></div>
      <div
        className="stadium-map-detail2"
        style={{
          backgroundImage: `url(${stadiumMapImage})`,
        }}
      />
      <div
        className="stadium-map-detail2"
        style={{
          backgroundImage: `url(${Samsung_Price})`,
        }}
      />
    </div>
    
  );
};

export default MapDetail;
