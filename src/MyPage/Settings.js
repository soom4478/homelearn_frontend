import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'; 

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#009788',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#2ECA45',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600],
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#39393D',
    }),
  },
}));

const switchContainerStyle = {
  marginTop: '62px',
  marginBottom: '32px',
};

const switchStyle = {
  marginLeft: 'auto',
  marginRight: '34px',
};

const labelStyle = {
  marginLeft: '34px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  fontFamily: 'Pretendard-Medium',
};

const titleStyle = {
  display: 'flex',
  paddingTop: '10px',
  paddingBottom: '10px',
  fontFamily: 'Pretendard-SemiBold',
  fontSize: '20px',
};

const switchItemStyle = {
  display: 'flex',
  alignItems: 'center',
  paddingTop: '8px',
  paddingBottom: '8px',
  borderBottom: '1px solid #E0E0E0',
};

const headerStyle = {
  display: 'flex',
  paddingTop: '8px',
  paddingBottom: '8px',
  borderBottom: '1px solid #E0E0E0',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function CustomizedSwitches() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={headerStyle}>
        <button className="back-button2" onClick={() => navigate(-1)} style={{ border: 'none', background: 'none', top: '32px', }}>
          <ArrowBackIcon />
        </button>
        <div style={titleStyle}>알림 설정</div> 
      </div>   
      <FormGroup style={switchContainerStyle}>
        <div style={switchItemStyle}>
          <div style={labelStyle}>게시글 댓글</div>
          <div style={switchStyle}>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </div>
        </div>
        <div style={switchItemStyle}>
          <div style={labelStyle}>게시글 좋아요</div>
          <div style={switchStyle}>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </div>
        </div>
        <div style={switchItemStyle}>
          <div style={labelStyle}>전체 경기 30분 전</div>
          <div style={switchStyle}>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </div>
        </div>
        <div style={switchItemStyle}>
          <div style={labelStyle}>MY 팀 경기 30분 전</div>
          <div style={switchStyle}>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </div>
        </div>
      </FormGroup>
    </div>
  );
}
