import React from 'react';
import Card from '../../components/Card';
import './style.scss';

const Order = ({ cart }) => {
  return (
    <div className="order">
      <h2 className="order-title">Order</h2>
      <div className="order-content">
        {cart &&
          cart.map((food) => (
            <div key={food.id} className="order-content-list-element">
              {/* {food.title}&nbsp;:&nbsp;
              <span className="order-content-list-element-price">
                {food.price}€
              </span> */}
              <Card product={food} />
            </div>

          ))}
      </div>
    </div>
  );
};

export default Order;
