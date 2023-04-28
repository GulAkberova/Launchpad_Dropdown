import React from "react";
import pay from "../assets/icon/pay.svg";
import down from "../assets/icon/down.svg";
import question from "../assets/icon/question.svg";
import paylogo from "../assets/icon/paylogo.svg";
import logomini from "../assets/icon/logomini.svg";
function Balance() {
  return (
    <div className="balance_bigdiv">
      <p>
        Your Balance:<span>$0.92</span>
      </p>
      <h2>0.20115234 NEAR</h2>
      <div>
        <span>You Pay</span>
        <span>3409.2419 THPAY/NEAR</span>
      </div>
      <div className="balance_near">
        <div>
          <img src={pay} />
          <h3>0</h3>
        </div>
        <div>
          <img src={paylogo} />
          <h3>NEAR</h3>
          <img src={down} />
        </div>
      </div>
      <div className="balance_change">
        <img src={question} />
        <div>
          <p>Better by +76.7750%</p>&nbsp;
          <img src={question} />
        </div>
      </div>
      <div className="balance_near">
        <div>
          <img src={logomini} />
          <h3>0</h3>
        </div>
        <div>
          <img src={paylogo} />
          <h3>NEAR</h3>
          <img src={down} />
        </div>
      </div>
      <div className="balance_input">
        <input type="checkbox" />
        <p>
          I have read and agree with HedgePay Terms of Service. I have done my
          research to make sure I am legally able to purchase the token in my
          country of residence.
        </p>
      </div>
      <a href="#" className="balance_btn">
        {" "}
        <button>Swap</button>
      </a>
    </div>
  );
}

export default Balance;
