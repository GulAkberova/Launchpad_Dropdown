import React from "react";
import "../styles/swap.css";
import Exchange from "../components/Exchange";
import Balance from "../components/Balance";
function Swap() {
  return (
    <>
      <section className="swap_bigdiv">
        <div className="wrapper">
          <div className="swap_div">
            <Exchange />
            <div className="aggregator_bigdiv">
              <h1>Aggregator DEX</h1>
              <p>
                HedgePay’s Aggregator DEX has the ability to track the best
                prices for the token you want on established Decentralized
                Exchanges. The HedgePay DEX will also provides you with the
                option to set limit orders, giving you the freedom hunt for the
                token you want at the price you want it
              </p>
              <div className="aggregator_btns">
                <a href="#">
                  {" "}
                  <button>Buy HedgePay</button>
                </a>
                <a href="#">
                  {" "}
                  <button>View Chart</button>
                </a>
              </div>
            </div>
            <Balance />
          </div>
        </div>
      </section>
    </>
  );
}

export default Swap;
