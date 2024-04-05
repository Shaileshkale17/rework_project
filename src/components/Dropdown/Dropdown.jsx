import React, { useState } from "react";
import "./dropdown.css";
const Dropdown = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {title}
        <span>{isOpen ? "▲" : "+"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-details">
          <p className="dropdown-para">{details}</p>
          {/* {details.map((detail, index) => (
            <div key={index}>{detail}</div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
