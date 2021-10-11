import React from "react";
import "./modal.css";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg"

const Modal = ({ total , handleModal }) => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <div className="modal__background">
      <div className="modal__content">
        <div className="modal__title">
          <h1>Paiement sécurisé par prélèvement bancaire</h1>
          <p>Mise en place d'un mandat SEPA MANGOPAY</p>
        </div>
        <form onSubmit={handleSubmit} className="modal__form">
          <label htmlFor="" className="modal__label">
            Titulaire du compte <CgIcons.CgAsterisk className="asterix__icon"/>
          </label>
          <input type="text" className="modal__input" required />
          <label htmlFor="" className="modal__label">
            Adresse du titulaire <CgIcons.CgAsterisk className="asterix__icon"/>
          </label>
          <input type="text" className="modal__input" required />
          <div className="place__content">
          <div className="place__part">
            <label htmlFor="place" className="modal__label">
              Ville <CgIcons.CgAsterisk className="asterix__icon"/>
            </label>
            <input type="text" className="modal__input" required />
            <label htmlFor="codepostal" className="modal__label">
              Code Postal <CgIcons.CgAsterisk className="asterix__icon"/>
            </label>
            <input type="text" className="modal__input" required />
          </div>
          <div className="place__part">
            <label htmlFor="région" className="modal__label">
              Région <CgIcons.CgAsterisk className="asterix__icon"/>
            </label>
            <input type="text" className="modal__input" required />
            <label htmlFor="country" className="modal__label">
              Pays <CgIcons.CgAsterisk className="asterix__icon"/>
            </label>
            <input type="text" className="modal__input" required />
          </div>
          </div>
          <label htmlFor="" className="modal__label">
            IBAN <CgIcons.CgAsterisk className="asterix__icon"/>
          </label>
          <input type="iban" pattern="^DE\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{2}|DE\d{20}$" className="modal__input" required />
        </form>
        <div className="close__icon">
          <AiIcons.AiOutlineClose onClick={handleModal} />
        </div>
        <div className="modal__button">
            <p onClick={handleModal}>Annuler</p>
        <button type="submit" onClick={handleModal} className="paiementButton">Payer {total} €</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
