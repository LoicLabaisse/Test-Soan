import React from "react";

import * as BsIcons from 'react-icons/bs'

const Payed = ({ newData }) => {

  /* initialisation d'un tableau vide pour mettre les factures qui sont déjà payées de la BDD */
  const payedArray = [];
  payedArray.push(newData[0].filter((val) => val.payedDate != null));
 

  /* variable permettant le stockage des différentes factures */
  const FAC1611 = payedArray[0][0];
  const FAC1614 = payedArray[0][1];
  const FAC1615 = payedArray[0][2];
  const FAC1617 = payedArray[0][3];
  const FAC1618 = payedArray[0][4];

  /* les différents calcul de conversion + reduction */

  const payedPrice1 = Math.round(parseInt(FAC1611.amount) / 100);
  const payedPrice2 = Math.round(parseInt(FAC1614.amount) / 100);
  const payedPrice3 = Math.round(parseInt(FAC1615.amount) / 100 / 3);
  const payedPrice4 = Math.round(parseInt(FAC1617.amount) / 100 / 3);
  const payedPrice5 = Math.round(parseInt(FAC1618.amount) / 100 / 3);
  const payedReduc1 = payedPrice1 - payedPrice1 * (FAC1611.discount.rate / 100);
  const payedReduc2 = payedPrice4 - payedPrice4 * (FAC1617.discount.rate / 100);
  const payedReduc3 = payedPrice5 - payedPrice5 * (FAC1618.discount.rate / 100);


  return (
    <div className="payed__content">
      <ul>
        <div className="payed__content">
          <ul>
            <li className="list__item">
              <div className="first__part">
                <div className="title__part">
                  <h3>{FAC1611.invoiceNumber}</h3>
                  <p>Régler le avant le 28/10/2021</p>
                </div>
              </div>
              <div className="second__part">
                <h3><BsIcons.BsFillLightningFill className="unpayed__icon"/>Escompte</h3>
                <span className="">Appliqué </span>
              </div>
              <div className="third__part">
                <p>{payedReduc1} €</p>
                <span>{payedPrice1}€</span>
              </div>
            </li>
            <li className="list__item">
              <div className="first__part">
                <div className="title__part">
                  <h3>{FAC1614.invoiceNumber}</h3>
                  <p>Régler le 28/11/2021</p>
                </div>
              </div>
              <div className="second__part">
                
                
              </div>
              <div className="third__part">
                <p>{payedPrice2}€</p>
              </div>
            </li>
            <li className="list__item">
              <div className="first__part">
                <div className="title__part">
                  <h3>{FAC1615.invoiceNumber}</h3>
                  <p>Régler le 28/11/2021</p>
                </div>
              </div>
              <div className="second__part">
                <h3><BsIcons.BsFillLightningFill className="unpayed__icon"/>3x sans frais</h3>
                <span className="">Appliqué</span>
              </div>
              <div className="third__part">
                <p>{payedPrice3}€</p>
              </div>
            </li>
            <li className="list__item">
              <div className="first__part">
                <div className="title__part">
                  <h3>{FAC1617.invoiceNumber}</h3>
                  <p>Régler le 24/05/2021</p>
                </div>
              </div>
              <div className="second__part">
                <h3><BsIcons.BsFillLightningFill className="unpayed__icon"/>3x sans frais/Escompte</h3>
                <span className="">Appliqué</span>
              </div>
              <div className="third__part">
                <p>{payedReduc2}€</p>
                <span>{payedPrice4}€</span>
              </div>
            </li>
            <li className="list__item">
              <div className="first__part">
                <div className="title__part">
                  <h3>{FAC1618.invoiceNumber}</h3>
                  <p>Régler le 17/09/2021</p>
                </div>
              </div>
              <div className="second__part">
                <h3><BsIcons.BsFillLightningFill className="unpayed__icon"/>3x sans frais/Escompte</h3>
                <span className="">Appliqué</span>
              </div>
              <div className="third__part">
                <p>{payedReduc3}€</p>
                <span>{payedPrice5}€</span>
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Payed;
