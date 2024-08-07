import React from "react";
import "./rule.css";

const Dropdown1 = () => {
  return (
    <ul>
      {Array(3)
        .fill("")
        .map((li, i) => (
          <li key={i} onClick={() => console.log(`Dropdown${i + 1}`)}>
            Dropdown{i + 1}
          </li>
        ))}
    </ul>
  );
};

const Dropdown2 = () => {
  return (
    <ul>
      {Array(3)
        .fill("")
        .map((li, i) => (
          <li key={i} onClick={() => console.log(`Dropdown${i + 1}`)}>
            Dropdown{i + 1}
          </li>
        ))}
    </ul>
  );
};

const Dropdown3 = () => {
  return (
    <ul>
      {Array(3)
        .fill("")
        .map((li, i) => (
          <li key={i} onClick={() => console.log(`Dropdown${i + 1}`)}>
            Dropdown{i + 1}
          </li>
        ))}
    </ul>
  );
};

const Dropdown4 = () => {
  return (
    <ul>
      {Array(3)
        .fill("")
        .map((li, i) => (
          <li key={i} onClick={() => console.log(`Dropdown${i + 1}`)}>
            Dropdown{i + 1}
          </li>
        ))}
    </ul>
  );
};

export { Dropdown1, Dropdown2, Dropdown3, Dropdown4 };
