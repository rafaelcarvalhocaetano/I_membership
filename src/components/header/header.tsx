import React from 'react';

import Option from '../../assets/icons/options_dot.svg';

import './header.scss';

const Header = ({toggle}: any) => {
  return(
    <header className="header-container">
      <p>Overview</p>
      <div className="action-header">
        <button className="btn btn-option">
          <img src={Option} alt=""/>
        </button>
        <button className="btn btn-add" onClick={toggle}>
          <span>Add</span>
        </button>
      </div>
    </header>
  );
}

export default Header;