import React from 'react';
import Tabs from './components/Tabs';
import './App.css';  

function App() {
  const tabData = [
    { title: '공격방법' },
    { title: '판정' },
    { title: '구역' },
    { title: '포지션' },
    { title: '응원' }
  ];

  return (
    <div className="App">
      <h1 className="title">야구 백과사전</h1>
      <Tabs tabs={tabData} />
    </div>
  );
}

export default App;
