import React from "react";
import "../styles/rewards.css";
import Reward from "../components/Reward";
import Hpay from "../components/Hpay";
import cube from "../assets/icon/cube.svg";
import cube1 from "../assets/icon/cube1.svg";
import polygon from "../assets/icon/polygon.svg";
import shape from "../assets/icon/shape.svg";
function Rewards() {
  return (
    <>
      <section className="rewards_bigdiv">
        <div className="wrapper">
          <div className="rewards_div">
            <img src={cube} className="cube" />
            <img src={polygon} className="polygon" />

            <Reward />
            <img src={cube1} className="cube1" />

            <div className="hedgefi_bigdiv">
              <h1>HedgeFi Rewards</h1>
              <p>
                HedgePay offers software products and services to crypto
                projects and utilizes a percentage of profits to improve our
                HedgeFi reward pool
              </p>
            </div>
            <Hpay />
            <img src={shape} className="shape" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Rewards;
