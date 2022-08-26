import React, { useState } from 'react';
import './style.scss';

const Form = ({ toggleFormStatus }: { toggleFormStatus: any }) => {
  const cancelOrder = () => {
    toggleFormStatus();
  };

  const submitOrder = (e: any) => {
    e.preventDefault();
    displayMessage();
    setTimeout(toggleFormStatus, 2000);
  };

  const displayMessage = () => {
    setHidden(true);
  };

  const message = 'Merci pour votre commande, un livreur est en route';
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <div className="form">
      <form autoComplete="on">
        <span className="closeBtn" onClick={toggleFormStatus}>
          X
        </span>
        {!hidden ? (
          <>
            <h2>Vos informations</h2>
            <ul>
              <li>
                <label htmlFor="address">Adresse</label>
                <input
                  type="text"
                  id="address"
                  placeholder="ex : 11 rue du général..."
                />
              </li>

              <li>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" placeholder="ex :Dupont" />
              </li>

              <li>
                <label htmlFor="firstName">Prénom</label>
                <input type="text" id="firstName" placeholder="ex: Jean" />
              </li>

              <li>
                <label htmlFor="tel">Téléphone</label>
                <input type="digits" placeholder="ex : 0456000000" />
              </li>

              <li>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="ex : exemple@email.com"
                />
              </li>
            </ul>
            <div className="form-btns">
              <button
                type="button"
                className="food-btn cancel"
                onClick={cancelOrder}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="food-btn validate"
                onClick={submitOrder}
              >
                Valider
              </button>
            </div>
          </>
        ) : (
          <p>{message}</p>
        )}
      </form>
    </div>
  );
};

export default Form;
