import React from 'react';
import { Product } from '../../App';
import './style.scss';

const Cart = ({
  cart,
  removeFromCart,
  total = 0,
  toggleOrderStatus,
  toggleFormStatus
}: {
  cart: Product[];
  removeFromCart: any;
  total: number;
  toggleOrderStatus: any;
  toggleFormStatus: any;
}) => {
  const title = 'Commande en cours :';

  const CloseBtn = () => {
    return (
      <span className="closeBtn ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          enable-background="new 0 0 40 40"
        >
          <line
            x1="15"
            y1="15"
            x2="25"
            y2="25"
            stroke="#fff"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-miterlimit="10"
          ></line>
          <line
            x1="25"
            y1="15"
            x2="15"
            y2="25"
            stroke="#fff"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-miterlimit="10"
          ></line>
          <circle
            className="circle"
            cx="20"
            cy="20"
            r="19"
            opacity="0"
            stroke="#000"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-miterlimit="10"
            fill="none"
          ></circle>
          <path
            d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z"
            className="progress"
            stroke="#fff"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-miterlimit="10"
            fill="none"
          ></path>
        </svg>
      </span>
    );
  };

  return (
    <section className="cart" onClick={toggleOrderStatus}>
      <header className="cart-header">
        <h2 className="cart-title">{title}</h2>
        <span onClick={toggleOrderStatus} className="">
          <CloseBtn />
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
                  onClick={(event) => {
                    event.stopPropagation();
                    removeFromCart(product);
                  }}
                >
                  -
                </span>
              </p>
            ))}
        </div>
        {cart?.length > 0 ? (
          <div>
            <h4 className="cart-content-total">Total &nbsp;:&nbsp;{total}€</h4>
            <span
              className="food-btn cart-orderBtn"
              onClick={() => {
                toggleOrderStatus();
                toggleFormStatus();
              }}
            >
              Commander
            </span>
          </div>
        ) : (
          <h4 className="cart-content">Votre panier est vide</h4>
        )}
      </div>
    </section>
  );
};

export default Cart;
