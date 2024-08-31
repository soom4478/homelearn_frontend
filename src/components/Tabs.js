import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const imageButtons = [
    { src: '/image/Hit.png', alt: '안타', content: '안타 영상' },
    { src: '/image/Homerun.png', alt: '홈런', content: '홈런 영상' },
    { src: '/image/Bunt.png', alt: '번트', content: '번트 영상' },
    { src: '/image/Steal.png', alt: '도루', content: '도루 영상' }
  ];

 
  const tabContent = [
    <div key="tab1">
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="button-container">
        {imageButtons.filter(button => button.alt.includes(searchQuery) || searchQuery === '').map((button, index) => (
          <button
            key={index}
            className="image-button"
            onClick={() => openModal(button.content)}
          >
            <img src={button.src} alt={button.alt} />
          </button>
        ))}
      </div>
    </div>,
    <div key="tab2">
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <p>탭 2</p>
    </div>,
    <div key="tab3">
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <p>탭3</p>
    </div>,
    <div key="tab4">
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <p>탭4</p>
    </div>,
    <div key="tab5">
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <p>탭5</p>
    </div>
  ];

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <div className="tab-titles">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-title ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="tab-content">
        {tabContent[activeTab]}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>X</button>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
