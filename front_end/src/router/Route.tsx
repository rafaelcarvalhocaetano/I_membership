import React from 'react';
import { Link } from 'react-router-dom';
import { routers } from './router_data';

import logo from '../assets/icons/logo.svg';
import logout from '../assets/icons/logout.svg';

import './router.scss';

const Routers = () => {
  return(
    <nav className="nav-container">
      <div className="img-container">
        <img className="img-logo" src={logo} alt="Logo"/>
        <hr className="line"/>
      </div>
      <ul className="nav-menu-items">
        {
          routers.map((x, i) => {
            return (
              <li className="navbar-toggle" key={i}>
                <Link to={x.path} className="action">
                  <img src={x.icon} alt=""/>
                  <p>{x.name}</p>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <button className="btn-logout">
        <img src={logout} alt="Logout"/>
        <p>Logout</p>
      </button>
    </nav>
  );
}

export default Routers;