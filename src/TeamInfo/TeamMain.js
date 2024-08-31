import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Samsung from './Maininfo/Samsung';
import Hanwha from './Maininfo/Hanwha';
import Doosan from './Maininfo/Doosan';
import Lg from './Maininfo/Lg';
import Lotte from './Maininfo/Lotte';
import Ssg from './Maininfo/Ssg';
import Kia from './Maininfo/Kia';
import Kt from './Maininfo/Kt';
import Nc from './Maininfo/Nc';
import Kiwoom from './Maininfo/Kiwoom';

import Samsunglogo from '../image/Samsunglogo.svg';
import Hanwhalogo from '../image/Hanwhalogo.svg';
import Doosanlogo from '../image/Doosanlogo.svg';
import Lglogo from '../image/LGlogo.svg';
import Lottelogo from '../image/Lottelogo.svg';
import Ssglogo from '../image/SSGlogo.svg';
import Kialogo from '../image/KIAlogo.svg';
import Ktlogo from '../image/KTlogo.svg';
import Nclogo from '../image/NClogo.svg';
import Kiwoomlogo from '../image/Kiwoomlogo.svg';

// 팀 로고랑 데이터
const teams = [
  { name: '삼성 라이온즈', logo: Samsunglogo },
  { name: '한화 이글스', logo: Hanwhalogo },
  { name: '두산 베어스', logo: Doosanlogo },
  { name: 'LG 트윈스', logo: Lglogo },
  { name: '롯데 자이언츠', logo: Lottelogo },
  { name: 'SSG 랜더스', logo: Ssglogo },
  { name: '기아 타이거즈', logo: Kialogo },
  { name: 'KT wiz', logo: Ktlogo },
  { name: 'NC 다이노스', logo: Nclogo },
  { name: '키움 히어로즈', logo: Kiwoomlogo }
];

// css
const StyledTab = styled(Tab)(({ theme, selected }) => ({
  minWidth: 'auto',
  width: '82px',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0',
  marginBottom: '18px',
  fontFamily:'Pretendard-SemiBold',
  '& img': {
    width: '62px',
    height: '62px',
    borderRadius: '15px',
    border: `2px solid ${selected ? '#7ED8CF' : '#DEE1E6'}`,
    objectFit: 'contain',
    marginBottom: theme.spacing(1),
  },
  '& .MuiTab-wrapper': {
    fontSize: '13px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    marginBottom: '9px',
    letterSpacing: '-0.025em',
    padding: '0',
    color: selected ? 'black' : '#7ED8CF', 
  },
}));

const TeamContent = ({ value }) => {
  switch (value) {
    case 0: return <Samsung />;
    case 1: return <Hanwha />;
    case 2: return <Doosan />;
    case 3: return <Lg />;
    case 4: return <Lotte />;
    case 5: return <Ssg />;
    case 6: return <Kia />;
    case 7: return <Kt />;
    case 8: return <Nc />;
    case 9: return <Kiwoom />;
    default: return null;
  }
};

const CustomTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    gap: '3px',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#7ED8CF',
    border: '2px',
    height: '2px',
    width: '68px',
    bottom: '0px',
  },
}));

export default function TeamMain() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '100%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: 'absolute',
          top: '50px',
          left: '34px',
          fontSize: '20px',
          fontFamily: 'Pretendard-SemiBold',
        }}
      >
        10개 구단 정보
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          top: '87px',
          left: '34px',
          right: 0,
          bottom: 0,
          paddingTop: '6px',
        }}
      >
        <CustomTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="team tabs"
        >
          {teams.map((team, index) => (
            <StyledTab
              key={index}
              label={team.name}
              icon={<img src={team.logo} alt={team.name} />}
              selected={value === index}
            />
          ))}
        </CustomTabs>
      </Box>
      <Box
        sx={{
          position: 'relative',
          top: '200px',
          right: 0,
          bottom: 0,
          margin: '0 0px',
          bgcolor: '#F2F3F5', 
        }}
      >
        <TeamContent value={value} />
      </Box>
    </Box>
  );
}
