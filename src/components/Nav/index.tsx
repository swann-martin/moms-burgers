import React from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../../App';
import './style.scss';
import logo from '../../assets/logoBurger.png';

const Nav = ({
  cart,
  toggleMenuStatus,
  menuStatus,
  removeFromCart,
  total,
  toggleOrderStatus,
  toggleFormStatus,
  orderStatus
}: {
  cart: Product[] | [];
  toggleMenuStatus: any;
  menuStatus: boolean;
  removeFromCart: any;
  total: number;
  toggleOrderStatus: any;
  toggleFormStatus: any;
  orderStatus: boolean;
}) => {
  const restaurantName = "Mom's Burger";
  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLink to="/">
          <h1 className="nav-title">
            <img src={logo} alt="Mom's Burgers" />
            <span>{restaurantName}</span>
          </h1>
        </NavLink>
      </div>

      <div className="nav-right">
        <div className="nav-right-burger" onClick={toggleMenuStatus}>
          {!menuStatus && <i className="fas fa-hamburger" />}
          {menuStatus && <i className="fas fa-times" />}
        </div>
        {
          <ul
            className={
              menuStatus
                ? 'nav-right-burger-list'
                : 'nav-right-burger-list nav-right-burger-list--closed'
            }
          >
            <NavLink
              to="/menu"
              className="nav-right-burger-list-link"
              activeClassName="nav-right-burger-list-link"
              onClick={toggleMenuStatus}
            >
              La carte
            </NavLink>
            <NavLink
              to="/values"
              className="nav-right-burger-list-link"
              activeClassName="nav-right-burger-list-link nav-right-burger-list-link--active"
              onClick={toggleMenuStatus}
            >
              Nos valeurs
            </NavLink>
            <span
              className="nav-right-burger-list-link nav-cart"
              onClick={() => {
                toggleMenuStatus();
                toggleOrderStatus();
              }}
            >
              <i className="fas fa-shopping-cart" />
              <span className="nav-right-burger-list-link-badge">
                {cart.length}
              </span>
            </span>
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
          <span
            className="nav-right-list-link  nav-cart"
            onClick={toggleOrderStatus}
          >
            <i className="fas fa-shopping-cart" />{' '}
            <span className="nav-right-list-link-badge">{cart.length}</span>
          </span>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
