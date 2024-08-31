// StoreContext.js
import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [stores, setStores] = useState([
    {
      id: 1,
      name: "만두전문점 한만두",
      rating: 4.8,
      popularMenu: "짬뽕만두",
      todayOrder: 14,
      imgSrc: "https://cdn.oasis.co.kr:48581/product/38776/thumb/thumb_387760c021bfc-5205-48d7-9096-a89b2a76a0c7.jpg",
      location: "2층 3루쪽",
      cate: "만두",
      ground: "대구 삼성라이온즈 파크"
    },
    {
      id: 2,
      name: "해피치즈스마일 대구삼성라이온즈파크점",
      rating: 4.8,
      popularMenu: "해피크림 SET",
      todayOrder: 10,
      imgSrc: "https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/161168_1645675121_alip5yYK.jpg",
      location: "5층 3루쪽",
      cate: "분식",
      ground: "대구 삼성라이온즈 파크"
    },
    {
      id: 3,
      name: "땅땅치킨 삼성라이온즈파크점",
      rating: 4.4,
      popularMenu: "허브순살 치킨",
      todayOrder: 9,
      imgSrc: "https://thenaum.cdn-nhncommerce.com/data/goods/20/08/35/1000005511/1000005511_detail_017.jpg",
      location: "3층 1루쪽",
      cate: "치킨",
      ground: "대구 삼성라이온즈 파크"
    }
  ]);

  return (
    <StoreContext.Provider value={{ stores, setStores }}>
      {children}
    </StoreContext.Provider>
  );
};
