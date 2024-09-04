import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';

import playerIcon from '../../image/player.png';
import homegroundIcon from '../../image/homeground.png';
import cheersongIcon from '../../image/cheersong.png';
import shopIcon from '../../image/shop.png';
import mascotImage from '../../image/mascot_Ssg.svg';

const RoundedButton = styled(Button)(({ theme, isSelected }) => ({
  borderRadius: '15px',
  padding: '10px',
  width: '100%',
  height: '100%',
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

const Ssg = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setTimeout(() => {
      setSelectedButton(null);
    }, 300);
  };

  const handleShopClick = () => {
    window.location.href = 'https://store.ssglanders.com/';
  };

  return (
    <Box
      sx={{
        bgcolor: '#F2F3F5',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 'calc(100% - 48px)', 
        margin: '0 auto', 
        minHeight: '100vh', 
        boxSizing: 'border-box', 
        overflow: 'auto', 
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: '13px',
          color: 'black',
          position: 'absolute',
          top: '15px',
          left: '34px',
          bgcolor: '#F2F3F5',
          padding: '0 4px',
          fontFamily: 'Pretendard-SemiBold',
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
              mb: 1,
              fontFamily: 'Pretendard-SemiBold',
            }}
          >
            창단일
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '15px',
              color: 'black',
              fontFamily: 'Pretendard-SemiBold',
            }}
          >
          2021.03.05
          </Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '13px',
              color: '#767676',
              mb: 1,
              fontFamily: 'Pretendard-SemiBold',
            }}
          >
            연고지
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '15px',
              color: 'black',
              fontFamily: 'Pretendard-SemiBold',
            }}
          >
            인천광역시
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: '13px',
              color: '#767676',
              mb: 1,
              fontFamily: 'Pretendard-SemiBold',
            }}
          >
            홈구장
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '15px',
              color: 'black',
              fontFamily: 'Pretendard-SemiBold',
            }}
          >
            인천 SSG 랜더스필드
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', 
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          sx={{
            width: '100%',
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
            <Typography sx={{
              fontFamily: 'Pretendard-Medium',
            }}>선수</Typography>
          </RoundedButton>
          <RoundedButton
            isSelected={selectedButton === 'homeground'}
            onClick={() => handleButtonClick('homeground')}
          >
            <img src={homegroundIcon} alt="homeground" />
            <Typography sx={{
              fontFamily: 'Pretendard-Medium',
            }}>홈구장</Typography>
          </RoundedButton>
          <RoundedButton
            isSelected={selectedButton === 'cheersong'}
            onClick={() => handleButtonClick('cheersong')}
          >
            <img src={cheersongIcon} alt="cheersong" />
            <Typography sx={{
              fontFamily: 'Pretendard-Medium',
            }}>응원가</Typography>
          </RoundedButton>
          <RoundedButton
            isSelected={selectedButton === 'shop'}
            onClick={handleShopClick}
          >
            <img src={shopIcon} alt="shop" />
            <Typography sx={{
              fontFamily: 'Pretendard-Medium',
            }}>굿즈샵</Typography>
          </RoundedButton>
        </ButtonGroup>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: '25px',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '13px',
              color: 'black',
              marginRight: '6px',
              fontFamily: 'Pretendard-SemiBold',
              marginBottom: '10px',
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
              fontFamily: 'Pretendard-SemiBold',
            }}
          >
          랜디
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: '15px',
            bgcolor: '#ffffff',
            boxShadow: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={mascotImage}
            alt="mascot"
            style={{
              width: 'calc(100% - 20px)', 
              height: 'auto',
              borderRadius: '15px',
              margin: '10px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Ssg;
