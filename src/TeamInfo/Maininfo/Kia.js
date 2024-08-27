import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';

import playerIcon from '/Users/USERONE/dev/homelearn/src/image/player.png';
import homegroundIcon from '/Users/USERONE/dev/homelearn/src/image/homeground.png';
import cheersongIcon from '/Users/USERONE/dev/homelearn/src/image/cheersong.png';
import shopIcon from '/Users/USERONE/dev/homelearn/src/image/shop.png';
import mascotImage from '/Users/USERONE/dev/homelearn/src/image/mascot_Kia.png'; // 추가된 이미지 경로

const RoundedButton = styled(Button)(({ theme, isSelected }) => ({
  borderRadius: '15px',
  padding: '10px',
  width: '327px',
  height: '86px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textTransform: 'none',
  backgroundColor: isSelected ? '#DEE1E6' : '#ffffff',
  boxShadow: isSelected ? 'none' : theme.shadows[1],
  transform: isSelected ? 'translateY(2px)' : 'none',
  transition: 'transform 0.1s ease-in-out, background-color 0.3s ease',
  '& img': {
    width: '24px',
    height: '24px',
    marginBottom: '8px',
  },
  '& .MuiTypography-root': {
    color: 'black',
  },
  '&:hover': {
    backgroundColor: '#ffffff',
  },
  '&:active': {
    backgroundColor: '#DEE1E6',
    boxShadow: 'none',
    transform: 'translateY(2px)',
  },
}));

const Kia = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setTimeout(() => {
      setSelectedButton(null);
    }, 100);
  };

  const handleShopClick = () => {
    window.location.href = 'https://teamstore.tigers.co.kr/';
  };

  return (
    <Box
      sx={{
        padding: 2,
        bgcolor: '#F2F3F5',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        width: '327px',
        height: 'auto',
        position: 'relative',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: '13px',
          color: 'black',
          position: 'absolute',
          top: '29px',
          left: '20px', // 왼쪽으로 10px 이동
          bgcolor: '#F2F3F5',
          padding: '0 4px',
        }}
      >
        기본 정보
      </Typography>
      <Box
        sx={{
          padding: '20px',
          bgcolor: '#ffffff',
          borderRadius: '15px',
          boxShadow: 1,
          position: 'relative',
          mt: '44px',
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '13px',
              color: '#767676',
              fontWeight: 'bold',
              mb: 1,
            }}
          >
            창단일
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '15px',
              color: 'black',
            }}
          >
            2001.08.01
          </Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '13px',
              color: '#767676',
              fontWeight: 'bold',
              mb: 1,
            }}
          >
            연고지
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '15px',
              color: 'black',
            }}
          >
            광주광역시
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: '13px',
              color: '#767676',
              fontWeight: 'bold',
              mb: 1,
            }}
          >
            홈구장
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '15px',
              color: 'black',
            }}
          >
            기아 챔피언스 필드
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // 왼쪽으로 정렬
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          sx={{
            width: '327px',
            '& .MuiButtonGroup-grouped': {
              border: 'none',
              marginLeft: '0',
            },
          }}
        >
          <RoundedButton
            isSelected={selectedButton === 'player'}
            onClick={() => handleButtonClick('player')}
          >
            <img src={playerIcon} alt="player" />
            <Typography>선수</Typography>
          </RoundedButton>
          <RoundedButton
            isSelected={selectedButton === 'homeground'}
            onClick={() => handleButtonClick('homeground')}
          >
            <img src={homegroundIcon} alt="homeground" />
            <Typography>홈구장</Typography>
          </RoundedButton>
          <RoundedButton
            isSelected={selectedButton === 'cheersong'}
            onClick={() => handleButtonClick('cheersong')}
          >
            <img src={cheersongIcon} alt="cheersong" />
            <Typography>응원가</Typography>
          </RoundedButton>
          <RoundedButton
            isSelected={selectedButton === 'shop'}
            onClick={handleShopClick}
          >
            <img src={shopIcon} alt="shop" />
            <Typography>굿즈샵</Typography>
          </RoundedButton>
        </ButtonGroup>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: '25px', // 버튼 그룹과 간격 25px
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '13px',
              color: 'black',
              marginRight: '6px',
            }}
          >
            마스코트
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '15px',
              color: '#767676',
              mb: '10px', 
            }}
          >
            호걸이, 하랑이, 호연이
          </Typography>
        </Box>
        <Box
          sx={{
            width: 'auto', 
            height: 'auto', 
            bgcolor: '#ffffff',
            borderRadius: '15px',
            boxShadow: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '16.53px', 
            boxSizing: 'border-box',
            '& img': {
              objectFit: 'contain', 
            },
          }}
        >
          <img
            src={mascotImage}
            alt="mascot"
            style={{
              maxWidth: 'calc(100% - 68px)',
              maxHeight: 'calc(100% - 33.06px)', 
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Kia;
