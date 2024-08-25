// foodDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { useStore } from "./StoreContext";
import "./foodDetail.css";

const FoodDetail = () => {
  const { storeId } = useParams();
  const { stores } = useStore();

  const store = stores.find((store) => store.id === parseInt(storeId));

  if (!store) {
    return <div>Store not found</div>;
  }

  return (
    <div>
      <h1>{store.name}</h1>
      <img id="storeImg" src={store.imgSrc} alt={store.name} />
      <p>Rating: {store.rating}</p>
      <p>Popular Menu: {store.popularMenu}</p>
      <p>Today's Orders: {store.todayOrder}</p>
    </div>
  );
};

export default FoodDetail;
