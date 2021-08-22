import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80"
        alt="burger-img"
        className="card-picture"
      />
      <h2 className="card-title">title</h2>
      <ul className="card-list">
        <li className="card-list-ingredient">ingredient</li>
        <li className="card-list-ingredient">ingredient</li>
        <li className="card-list-ingredient">ingredient</li>
        <li className="card-list-ingredient">ingredient</li>
      </ul>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        mollitia.
      </p>
    </div>
  );
};

export default Card;
