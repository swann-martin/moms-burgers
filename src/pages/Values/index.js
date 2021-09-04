import React from 'react';

const Values = () => {
  return (
    <div className="values">
      <h1 className="values-title">Nos Valeurs</h1>
      <div className="values-container">
        <h2 className="values-container-title">Notre mission : vous rassasier</h2>
        <ul className="values-container-list">
          <li>Avec des viandes d'origine locales de bonne qualité</li>
          <li>Avec des buns de pain faits maison</li>
          <li>Avec des frites cuites dont les patates sont cultivées localement</li>
          <li>Avec une alternative végétarienne pour chaque burger</li>
        </ul>
      </div>
    </div>
  );
};

export default Values;
