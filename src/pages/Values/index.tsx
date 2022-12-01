import React from 'react';
import { AddressMap } from '../../components/Map';
import './style.scss';

const Values = () => {
  const valuesArr = [
    {
      title: 'Notre mission : vous rassasier',
      list: [
        'Avec des produits de qualité',
        'Avec des portions généreuses',
        'Avec un choix de formules varié pour satisfaire tous les goûts',
        'Avec une alternative végétarienne pour chaque burger',
      ],
    },
    {
      title: 'Transparence & traçabilité',
      list: [
        "Avec des viande d'origine locales de bonne qualité",
        'Avec des buns de pain faits maison et de la farine locale & bio',
        'Avec des frites coupées et cuites sur place dont les patates sont cultivées localement',
      ],
    },
    {
      title: 'Service du client et respect',
      list: [
        'Nous prenons en compte vos suggestions pour améliorer nos recettes',
        "Nous indiquons les ingrédients pour éviter les risques d'allergie",
        'Nous pronons le respet de la nature et fournissons des embalages en carton recyclé',
      ],
    },
  ];

  return (
    <div className="values">
      <h1 className="values-title">Nos Valeurs</h1>
      <div className="values-main">
        <ul className="values-list">
          {valuesArr.map((value: { title: string; list: string[] }) => (
            <div>
              <h2 key={value.title} className="values-subtitle">
                {value.title}
              </h2>
              {value.list.map((el: string) => (
                <li>{el}</li>
              ))}
            </div>
          ))}
        </ul>
        <AddressMap />
      </div>
    </div>
  );
};

export default Values;
