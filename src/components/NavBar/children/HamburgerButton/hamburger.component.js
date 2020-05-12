import React from 'react';


const HamburgerButton = ({ toggleMobileMenu }) => (
  <div className="mobile-navigation__toggle">
    <button onClick={toggleMobileMenu} type="button">
      <span className="icon">
        <img src="/img/bars-nav.svg" alt="Icon Menu" />
      </span>
    </button>
  </div>
);

export default HamburgerButton;
