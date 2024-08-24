import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Home/home";
import Rule from "./Rule/rule";
import FoodMain from "./Food/foodMain";
import FoodDetail from "./Food/foodDetail";
import BottomNav from "./Nav/bottomNav";
import Calender from "./Calender/calender";
import Term from "./Term/term";
import TermDetail from './Term/termDetail';
import ComuMain from './Comu/comuMain';
import { StoreProvider } from "./Food/StoreContext";

function App() {
  return (
    <StoreProvider>
      <Router>
        <div>
          <BottomNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/rule" element={<Rule />} />
            <Route path="/term" element={<Term />} />
            <Route path="/team" element={<div>구단 페이지</div>} />
            <Route path="/nextpage" element={<TermDetail />} />
            <Route path="/food" element={<FoodMain />} />
            <Route path="/food/:storeId" element={<FoodDetail />} />
            <Route path="/community" element={<ComuMain />} />
            <Route path="/my" element={<div>마이</div>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;