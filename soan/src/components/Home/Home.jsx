import React, { useState } from "react";

import {data} from "../../models/bdd.js"


import "./home.css";
import Payed from "./Payed/Payed.jsx";
import Unpayed from "./Unpayed/Unpayed.jsx";


const Home = () => {
  const newData=[data.payments];

  const [typeOfInvoice,setTypeOfInvoice] = useState({
    unpayed:true,
    payed:false
  })

  const [buttonActive, setButtonActive] = useState({
    unpayed: false,
    payed: false,
  });

  const handleClick = (e) => {
    if (e.target.name === 'unpayed') {
      setButtonActive({
        ...buttonActive,
        unpayed: true,
        payed: false,
      });
      setTypeOfInvoice({
        ...typeOfInvoice,
        unpayed: true,
        payed: false,
      });
    }
    if (e.target.name === 'payed') {
      setButtonActive({
        ...buttonActive,
        unpayed: false,
        payed: true,
      });
      setTypeOfInvoice({
        ...typeOfInvoice,
        payed: true,
        unpayed: false,
      });
    }
  };

  const { unpayed , payed } = typeOfInvoice;
 
 

  return (
    <div className="home">
      <div className="home_button">
        <button
          type="button"
          name="unpayed"
          className={buttonActive.unpayed ? 'unpayed_button_active' : ''}
          onClick={(e) => handleClick(e)}
        >
          Factures à payées
        </button>
        <button
          type="button"
          name="payed"
          className={buttonActive.payed ? 'payed_button_active' : ''}
          onClick={(e) => handleClick(e)}
        >
          Factures Payées
        </button>
      </div>
      {unpayed && <Unpayed newData = {newData}/>}
   {payed && <Payed newData={newData}/>}
   
    </div>
  );
};

export default Home;
