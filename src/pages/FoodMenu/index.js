import React from 'react';

import Card from '../../components/Card';
import './style.scss';

const FoodMenu = ({ products, total, cart, addToCart }) => {
  console.log('products', products);
  return (
    <div className="food">
      <h1 className="food-title">La carte</h1>
      <h2 className="food-subttitle">Découvrez nos burgers</h2>
      <section className="food-burgers">
        {products &&
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              className="card"
              addToCart={addToCart}
            />
          ))}
      </section>

      <section className="food-order">
        <h2 className="food-order-title">Commande en cours : </h2>
        <div className="food-order-content">
          <div className="food-order-content-list">
            {console.log(cart)}
            {cart &&
              cart.map((food) => (
                <p key={food.id} className="food-order-content-list-element">
                  {food.title}&nbsp;:&nbsp;
                  <span className="food-order-content-list-element-price">
                    {food.price}€
                  </span>
                </p>
              ))}
          </div>
          <h4 className="food-order-content-total">
            Montant total de la commande&nbsp;:&nbsp;{total}€
          </h4>
          <div className="food-btn">Commander</div>
        </div>
      </section>
    </div>
  );
};

export default FoodMenu;
