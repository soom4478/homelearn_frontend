import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageMain from './MyPage/PageMain';
import Profile from './MyPage/Profile';
import MyPosts from './MyPage/MyPosts';
import MyComments from './MyPage/MyComments';
import MyReviews from './MyPage/MyReviews'
import Settings from './MyPage/Settings';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myposts" element={<MyPosts />} />
          <Route path="/mycomments" element={<MyComments />} />
          <Route path="/myreviews" element={<MyReviews />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </Router>
  );
}

export default App;
