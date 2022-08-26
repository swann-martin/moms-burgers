import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Home = () => {
  const title = 'Les burgers de maman';
  const btnText = 'Voir nos burgers';
  return (
    <div className="home">
      <h1>{title}</h1>
      <Link to="/menu" className="home-btn">
        {btnText}
      </Link>
    </div>
  );
};

export default Home;
