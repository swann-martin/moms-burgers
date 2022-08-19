import React from 'react';
import { Product } from '../../App';
import './style.scss';

const Cart = ({
  cart,
  removeFromCart,
  total = 0,
  toggleOrderStatus,
}: {
  cart: Product[];
  removeFromCart: any;
  total: number;
  toggleOrderStatus: any;
}) => {
  return (
    <section className="cart">
      <header className="cart-header">
        <h2 className="cart-title">Commande en cours : </h2>
        <span onClick={toggleOrderStatus} className="food-btn">
          x
        </span>
      </header>
      <div className="cart-content">
        <div className="cart-content-list">
          {cart &&
            cart.map((product) => (
              <p key={product.id} className="cart-content-list-element">
                {product.title}&nbsp;:&nbsp;
                <span className="cart-content-list-element-price">
                  {product.price}€
                </span>
                <span
                  title="retirer du panier"
                  className="food-btn"
                  onClick={() => removeFromCart(product)}
                >
                  -
                </span>
              </p>
            ))}
        </div>
        <h4 className="cart-content-total">Total &nbsp;:&nbsp;{total}€</h4>
        {cart?.length > 0 && (
          <span className="food-btn cart-orderBtn" onClick={toggleOrderStatus}>
            Commander
          </span>
        )}
      </div>
    </section>
  );
};

export default Cart;
