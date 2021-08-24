import React from 'react';
import './style.scss';

const Card = ({ product, addToCart }) => {
  const { ingredients, image, title, price } = product;
  return (
    <div className="card">
      <div className="card-left">
        <img src={image} alt={title} className="card-picture" />
      </div>
      <div className="card-right">
        <h2 className="card-title">{title}</h2>
        <ul className="card-list">
          <li>{price}€</li>
          {ingredients.map((ingredient, id) => (
            <li key={(ingredient, id)} className="card-list-ingredient">
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="card-btn" onClick={() => addToCart(product)}>
          Ajouter au panier
        </div>
      </div>
    </div>
  );
};

export default Card;
