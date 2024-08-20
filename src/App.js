<<<<<<< HEAD
import React from 'react';
import Homeground from './Homeground/Samsung';  // Homeground 컴포넌트를 import
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Rule from "./Rule/rule";
import FoodMain from "./Food/foodMain";
import FoodDetail from "./Food/foodDetail";
import BottomNav from "./Nav/bottomNav";
import { StoreProvider } from "./Food/StoreContext";
>>>>>>> e331f587900f8967bcc57f576ab8c6288e7bab8e

function App() {  
  return (
<<<<<<< HEAD
    <div className="App">
      <Homeground />  {/* Homeground 컴포넌트를 사용 */}
    </div>
=======
    <StoreProvider>
      <Router>
        <div>
          <BottomNav />
          <Routes>
            <Route path="/" element={<div>홈</div>} />
            <Route path="/team" element={<div>구단 페이지</div>} />
            <Route path="/food" element={<FoodMain />} />
            <Route path="/food/:storeId" element={<FoodDetail />} />
            <Route path="/community" element={<div>커뮤니티 페이지</div>} />
            <Route path="/my" element={<div>마이 페이지</div>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </StoreProvider>
>>>>>>> e331f587900f8967bcc57f576ab8c6288e7bab8e
  );
}

export default App;
