import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Home = () => {
  return (
    <div className="home">
      <h1>Les burgers de maman</h1>
      <Link to="/menu" className="home-btn">
        Commander
      </Link>
    </div>
  );
};

export default Home;
