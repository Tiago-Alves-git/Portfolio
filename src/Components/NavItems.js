import React, { useState } from 'react';

const NavItem = ({ label, updateState, activeSection }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className='NavList'>
      <div
        className={`LineWrap ${isHovered || activeSection === label ? 'Active' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => updateState(label)}
      >
        <span className='Line'></span>
        <span>{label}</span>
      </div>
    </li>
  );
};

export default NavItem;
