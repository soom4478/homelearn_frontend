import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Rule from "./Rule/rule";
import FoodMain from "./Food/foodMain";
import BottomNav from "./Nav/bottomNav";

function App() {
  return (
    <Router>
      <div>
        <BottomNav />
        <Routes>
          <Route path="/" element={<div>홈</div>} />
          <Route path="/team" element={<div>구단 페이지</div>} />
          <Route path="/food" element={<FoodMain />} />
          <Route path="/community" element={<div>커뮤니티 페이지</div>} />
          <Route path="/my" element={<div>마이 페이지</div>} />
          <Route path="*" element={<Navigate to="/" />} /> {/* 기본 경로 설정 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
