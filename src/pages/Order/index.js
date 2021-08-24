import React from 'react';
import Card from '../../components/Card';

const Order = ({ cart }) => {
  return (
    <div className="order">
      <h2 className="order-title">Order</h2>
      <div className="order-content">
        {cart &&
          cart.map((food) => (
            <p key={food.id} className="order-content-list-element">
              <Card product={food} />
              {food.title}&nbsp;:&nbsp;
              <span className="order-content-list-element-price">
                {food.price}€
              </span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default Order;
