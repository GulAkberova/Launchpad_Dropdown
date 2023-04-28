import React from "react";
import card1 from "../assets/icon/card/card1.svg";
import card2 from "../assets/icon/card/card2.svg";
import card3 from "../assets/icon/card/card3.svg";
import card4 from "../assets/icon/card/card4.svg";
function CreateCard() {
  return (
    <div className="createcard_bigdiv">
      <img src={card4} className="card4" />
      <img src={card1} className="card1" />
      <img src={card2} className="card2" />
      <img src={card3} className="card3" />
    </div>
  );
}

export default CreateCard;
