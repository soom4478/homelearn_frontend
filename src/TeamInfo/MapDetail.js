import React from 'react';
import stadiumMapImage from '../image/Homeground_Samsung.png';
import Samsung_Price from '../image/Samsung_price.jpg';
import './MapDetail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MapDetail = () => {
  return (
        <div className="app-container">
      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <ArrowBackIcon />
        </button>
        <div className="line2"></div>
        <div className="text-container"></div>
      <div
        className="stadium-map-detail"
        style={{
          backgroundImage: `url(${stadiumMapImage})`,
        }}
      />
      <div
        className="stadium-map-detail"
        style={{
          backgroundImage: `url(${Samsung_Price})`,
        }}
      />
    </div>
    </div>
  );
};

export default MapDetail;
