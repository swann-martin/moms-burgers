import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <img src="" alt="" />
        <h1 className="nav-left-title">Mom's Burgers</h1>
      </div>
      <div className="nav-right">
        <ul className="nav-right-list">
          <NavLink
            exact
            to="/"
            className="nav-right-list-link"
            activeClassName="nav-right-list-link nav-right-list-link--active"
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className="nav-right-list-link"
            activeClassName="nav-right-list-link nav-right-list-link--active"
          >
            La carte
          </NavLink>
          <NavLink
            to="/values"
            className="nav-right-list-link"
            activeClassName="nav-right-list-link nav-right-list-link--active"
          >
            Nos valeurs
          </NavLink>
          <NavLink
            to="/order"
            className="nav-right-list-link nav-right-list-link--order"
            activeClassName="nav-right-list-link--order nav-right-list-link--active"
          >
            Commander
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
