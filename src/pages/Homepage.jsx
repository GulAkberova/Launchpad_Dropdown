import React from "react";
import "../styles/homepage.css";
import homepage from "../assets/icon/homepage.svg";
function Homepage() {
  return (
    <>
      <section className="homepage_bigdiv">
        <div className="wrapper">
          <div className="homepage_div">
            <img src={homepage} />
            <h1>
              HedgePay leads the market in providing the highest quality crypto
              products and services
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
