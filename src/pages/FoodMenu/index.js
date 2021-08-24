import React from 'react';

import Card from '../../components/Card';
import './style.scss';

const FoodMenu = ({
  products,
  total,
  cart,
  addToCart,
  handleSideChange,
  side,
}) => {
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

      <section className="order">
        <h2>Commande : </h2>
        <div className="order-content">
          <div className="order-content-list">
            {console.log(cart)}
            {cart &&
              cart.map((food) => (
                <p key={food.id}>
                  {food.title} <span>: {food.price}€</span>
                </p>
              ))}
          </div>
          <h4> Montant total de la commande :{total}€ </h4>
          <div className="food-btn">Commander</div>
        </div>
      </section>
    </div>
  );
};

export default FoodMenu;
