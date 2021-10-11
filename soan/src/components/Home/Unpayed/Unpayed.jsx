import React, { useState } from "react";
import "./Unpayed.css";
/*import Axios from 'axios'*/
import * as BsIcons from "react-icons/bs";
import Modal from "./Modal/Modal";

const Unpayed = ({ newData }) => {
  const [ifChecked, setIfChecked] = useState({
    firstPrice: 0,
    secondPrice: 0,
    thirdPrice: 0,
  });

  /* variable permettant le stockage des différentes factures */
  const FAC1610 = newData[0][0];
  const FAC1612 = newData[0][2];
  const FAC1613 = newData[0][3];

  /* Hooks pour l'apparition de modal de paiement */
  const [showModal, setShowModal] = useState(false);

  /*=============== Fonction pour le bouton du modal =================*/

  const handleModal = () => {
    setShowModal(!showModal);
  };

  /*=============== Calcul ==================*/

  const price1 = parseInt(FAC1610.amount) / 100 / 3;
  const price2 = parseInt(FAC1612.amount) / 100;
  const price3 = parseInt(FAC1613.amount) / 100;
  const reduc1 = price2 - price2 * (FAC1612.discount.rate / 100);
  const reduc2 = price3 - price3 * (FAC1613.discount.rate / 100);
  const total =
    ifChecked.firstPrice + ifChecked.secondPrice + ifChecked.thirdPrice;

  /* Récupérer les données de l'api, que je vous laisse en commentaire et qui récupère bien vos informations,
   mais l'api à crash plusieurs fois donc j'ai préféreé faire le code en brut pour avancer */

  /* useEffect(() => {
    Axios.get("https://test.soan-solutions.io/test_front/datas/")
        .then((res) => res.data.payments)
        .then((data) => console.log(data));
    }}, []);*/

 

    


/* Function qui vérifie si les inputs sont cocher et met les valeurs adéquat */

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.checked) {
      setIfChecked({ ...ifChecked, [name]: parseInt(value) });
    } else {
      setIfChecked({ ...ifChecked, [name]: 0 });
    }
  };

  return (
    <div>
      <div className="unpayed__content">
        <ul>
          <li className="list__item">
            <div className="first__part">
              <input
                onChange={handleChange}
                name="firstPrice"
                value={price1}
                type="checkbox"
              />
              <div className="title__part">
                <h3>{FAC1610.invoiceNumber}</h3>
                <p>A regler avant le 08/12/2021</p>
              </div>
            </div>
            <div className="second__part">
              <h3>
                <BsIcons.BsFillLightningFill className="unpayed__icon" />
                3x sans frais
              </h3>
              <span className="">Disponible</span>
            </div>
            <div className="third__part">
              <p>{price1} €</p>
            </div>
          </li>
          <li className="list__item">
            <div className="first__part">
              <input
                onChange={handleChange}
                name="secondPrice"
                value={reduc1}
                type="checkbox"
              />
              <div className="title__part">
                <h3>{FAC1612.invoiceNumber}</h3>
                <p>A regler avant le 06/11/2021 </p>
              </div>
            </div>
            <div className="second__part">
              <h3>
                <BsIcons.BsFillLightningFill className="unpayed__icon" />
                Escompte
              </h3>
              <span className="">
                -{FAC1612.discount.rate}% pendant{" "}
                {FAC1612.discount.maxDaysToPay} jours
              </span>
            </div>
            <div className="third__part">
              <p>{reduc1} €</p>
              <span>{price2}€</span>
            </div>
          </li>
          <li className="list__item">
            <div className="first__part">
              <input
                onChange={handleChange}
                name="thirdPrice"
                value={reduc2}
                type="checkbox"
              />
              <div className="title__part">
                <h3>{FAC1613.invoiceNumber}</h3>
                <p>A regler avant le 28/10/2021</p>
              </div>
            </div>
            <div className="second__part">
              <h3>
                <BsIcons.BsFillLightningFill className="unpayed__icon" />
                Escompte
              </h3>
              <span className="">
                -{FAC1613.discount.rate}% pendant{" "}
                {FAC1613.discount.maxDaysToPay} jours
              </span>
            </div>
            <div className="third__part">
              <p>{reduc2} €</p>
              <span>{price3}€</span>
            </div>
          </li>
          <div className="unpayed__button">
            <button onClick={handleModal} className="paiementButton">
              Payer {total} €
            </button>

            <div className={showModal ? "showModal" : "unShowModal"}>
              <Modal total={total} handleModal={handleModal} />
            </div>
          </div>
        </ul>
        <p>{Date()}</p>
      </div>
    </div>
  );
};

export default Unpayed;
