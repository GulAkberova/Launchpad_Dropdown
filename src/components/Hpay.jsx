import React from "react";
import logomini from "../assets/icon/logomini.svg";

function Hpay() {
  return (
    <>
      <div className="hpay_bigdiv">
        <div className="hpay_divs">
          <div>
            <p>82.49%</p>
            <span>Current APY</span>
          </div>
          <div>
            <p>82.49%</p>
            <span>Current APY</span>
          </div>
          <div>
            <p>82.49%</p>
            <span>Current APY</span>
          </div>
          <div>
            <p>82.49%</p>
            <span>Current APY</span>
          </div>
        </div>
        <div className="hpay_0">
          <div>
            <img src={logomini} />
            <h2>HPAY</h2>
          </div>
          <h3>0</h3>
        </div>
      </div>
    </>
  );
}

export default Hpay;
