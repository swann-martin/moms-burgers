import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = ({ cart }) => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLink to="/">
          <img src="" alt="" />
          <h1 className="nav-left-title">Mom's Burgers</h1>
        </NavLink>
      </div>
      <div className="nav-right">
        <ul className="nav-right-list">
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
            exact
            to="/order"
            className="nav-right-list-link"
            activeClassName="nav-right-list-link nav-right-list-link--active"
          >
            Mon panier <i className="fas fa-shopping-cart" /> {cart.length}
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
