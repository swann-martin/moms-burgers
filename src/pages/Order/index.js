import React from 'react';
import Card from '../../components/Card';
import './style.scss';

const Order = ({ cart, removeFromCart }) => {
  return (
    <div className="order">
      <h2 className="order-title">Order</h2>
      <div className="order-content">
        {cart &&
          cart.map((food) => (
            <div key={food.id} className="order-content-list-element">
              <Card product={food} />
              <button
                className="order-btn order-btn--card"
                onClick={() => removeFromCart(food)}
              >
                Retirer du panier
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Order;
