import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = ({ cart, toggleMenuStatus, menuStatus }) => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLink to="/">
          <img src="" alt="" />
          <h1 className="nav-left-title">Mom's Burgers</h1>
        </NavLink>
      </div>

      <div className="nav-right">
        <div className="nav-right-burger" onClick={toggleMenuStatus}>
          {(!menuStatus && < i className="fas fa-hamburger" />)
          }
          {(menuStatus && < i className="fas fa-times" />)
          }
        </div>
        {
          <ul className={menuStatus ? "nav-right-burger-list" : "nav-right-burger-list nav-right-burger-list--closed"}>
            <NavLink
              to="/menu"
              className="nav-right-burger-list-link"
              activeClassName="nav-right-burger-list-link"
            >
              La carte
            </NavLink>
            <NavLink
              to="/values"
              className="nav-right-burger-list-link"
              activeClassName="nav-right-burger-list-link nav-right-burger-list-link--active"
            >
              Nos valeurs
            </NavLink>
            <NavLink
              exact
              to="/order"
              className="nav-right-burger-list-link"
              activeClassName="nav-right-burger-list-link nav-right-burger-list-link--active"
            >
              Mon panier <i className="fas fa-shopping-cart" /><span className="nav-right-burger-list-link-badge">{cart.length}</span>
            </NavLink>
            <li className="nav-right-burger-list-element"></li>
          </ul>
        }
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
            Mon panier <i className="fas fa-shopping-cart" /> <span className="nav-right-list-link-badge">{cart.length}</span>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
