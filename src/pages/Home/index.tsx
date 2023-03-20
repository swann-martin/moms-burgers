import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from '../../assets/logoBurger-noBg.png';

const Home = () => {
  const title = 'Les burgers de maman';
  const btnText = 'Voir nos burgers';
  return (
    <div className="home">
      <h1>{title}</h1>
      <img src={logo} alt="Mom's Burgers" />
      <Link to="/menu" className="home-btn">
        {btnText}
      </Link>
    </div>
  );
};

export default Home;
