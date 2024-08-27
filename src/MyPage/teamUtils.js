export const getTeamInfo = (teamKey) => {
    const teamInfo = {
      'KIA 타이거즈': { logo: require('../image/KIAlogo.svg').default, name: 'KIA 타이거즈' },
      '두산 베어스': { logo: require('../image/Doosanlogo.svg').default, name: '두산 베어스' },
      '롯데 자이언츠': { logo: require('../image/Lottelogo.svg').default, name: '롯데 자이언츠' },
      '삼성 라이온즈': { logo: require('../image/Samsunglogo.svg').default, name: '삼성 라이온즈' },
      'SSG 랜더스': { logo: require('../image/SSGlogo.svg').default, name: 'SSG 랜더스' },
      'NC 다이노스': { logo: require('../image/NClogo.svg').default, name: 'NC 다이노스' },
      'LG 트윈스': { logo: require('../image/LGlogo.svg').default, name: 'LG 트윈스' },
      '키움 히어로즈': { logo: require('../image/Kiwoomlogo.svg').default, name: '키움 히어로즈' },
      'KT wiz': { logo: require('../image/KTlogo.svg').default, name: 'KT wiz' },
      '한화 이글스': { logo: require('../image/Hanwhalogo.svg').default, name: '한화 이글스' },
    };
  
    return teamInfo[teamKey] || { logo: require('../image/Samsunglogo.svg').default, name: '삼성 라이온즈' };
  };
  