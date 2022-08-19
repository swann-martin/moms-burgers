import React from 'react';
import './style.scss';

const Form = ({ toggleFormStatus }: { toggleFormStatus: any }) => {
  return (
    <div className="form">
      <form autoComplete="on">
        <span className="closeBtn" onClick={toggleFormStatus}>
          X
        </span>
        <h2>Vos informations</h2>
        <ul>
          <li>
            <label htmlFor="address">Adresse</label>
            <input type="text" id="address" />
          </li>

          <li>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" />
          </li>

          <li>
            <label htmlFor="firstName">Prénom</label>
            <input type="text" id="firstName" />
          </li>

          <li>
            <label htmlFor="tel">Téléphone</label>
            <input type="digits" />
          </li>

          <li>
            <label htmlFor="email">email</label>
            <input type="email" id="email" />
          </li>
        </ul>
        <div>
          <button className="food-btn">Cancel</button>
          <button className="food-btn">Valider</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
