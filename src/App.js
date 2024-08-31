import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamMain from './TeamInfo/TeamMain';
import Player from './TeamInfo/Player';
import Cheersong from './TeamInfo/Cheersong'; 
import SongDetail from './TeamInfo/SongDetail'; 
import Homeground from './TeamInfo/Homeground';
import MapDetail from './TeamInfo/MapDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamMain />} />
        <Route path="/player" element={<Player />} />
        <Route path="/cheersong" element={<Cheersong />} />
        <Route path="/songdetail/:id" element={<SongDetail />} />
        <Route path="/Homeground" element={<Homeground />} />
        <Route path="/map-detail" element={<MapDetail />} />
      </Routes>
    </Router>

export default App;
