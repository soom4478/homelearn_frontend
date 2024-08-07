import React, { useState } from "react";
import { Dropdown1, Dropdown2, Dropdown3, Dropdown4 } from "./dropdown"; // Dropdown 컴포넌트를 가져옵니다.
import "./rule.css";

const Rule = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleClickDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <div>
      <div>
        <p>경기 규칙 설명</p>
      </div>
      <div className="container" onBlur={handleBlurContainer}>
        <label onClick={() => handleClickDropdown(1)}>
          <div>야구 기초 알아보기 {activeDropdown === 1 ? "▲" : "▼"}</div>
        </label>
        {activeDropdown === 1 && <Dropdown1 />}
        <label onClick={() => handleClickDropdown(2)}>
          <div>선수 포지션 알아보기 {activeDropdown === 2 ? "▲" : "▼"}</div>
        </label>
        {activeDropdown === 2 && <Dropdown2 />}
        <label onClick={() => handleClickDropdown(3)}>
          <div>그라운드 알아보기 {activeDropdown === 3 ? "▲" : "▼"}</div>
        </label>
        {activeDropdown === 3 && <Dropdown3 />}
        <label onClick={() => handleClickDropdown(4)}>
          <div>야구에서 득점 인정 {activeDropdown === 4 ? "▲" : "▼"}</div>
        </label>
        {activeDropdown === 4 && <Dropdown4 />}
      </div>
    </div>
  );
};

export default Rule;
