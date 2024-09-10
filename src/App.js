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
import ComuDetail from './Comu/comuDetail';
import Review from './Food/review';
import { StoreProvider } from "./Food/StoreContext";
import TeamMain from './TeamInfo/TeamMain';
import Player from './TeamInfo/Player';
import Cheersong from './TeamInfo/Cheersong'; 
import SongDetail from './TeamInfo/SongDetail'; 
import Homeground from './TeamInfo/Homeground';
import MapDetail from './TeamInfo/MapDetail';
import PageMain from './MyPage/PageMain';
import Profile from './MyPage/Profile';
import MyPosts from './MyPage/MyPosts';
import MyComments from './MyPage/MyComments';
import MyReviews from './MyPage/MyReviews';
import Settings from './MyPage/Settings';
import Notifications from "./Alram/Notifications";
import Start from './Start/Start';  
import Login from './Start/Login'; 

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />  
          <Route path="/home" element={<><BottomNav /><Home /></>} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/rule" element={<Rule />} />
          <Route path="/term" element={<Term />} />
          <Route path="/team" element={<><BottomNav /><TeamMain /></>} />
          <Route path="/nextpage" element={<TermDetail />} />
          <Route path="/food" element={<><BottomNav /><FoodMain /></>} />
          <Route path="/food/:storeId" element={<FoodDetail />} />
          <Route path="/review" element={<Review />} />
          <Route path="/community" element={<><BottomNav /><ComuMain /></>} />
          <Route path="/community/:detail" element={<ComuDetail />} />
          <Route path="/my" element={<><BottomNav /><PageMain /></>} />
          <Route path="/player" element={<Player />} />
          <Route path="/cheersong" element={<Cheersong />} />
          <Route path="/songdetail/:id" element={<SongDetail />} />
          <Route path="/homeground" element={<Homeground />} />
          <Route path="/map-detail" element={<MapDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myposts" element={<MyPosts />} />
          <Route path="/mycomments" element={<MyComments />} />
          <Route path="/myreviews" element={<MyReviews />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
