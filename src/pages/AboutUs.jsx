import React from "react";
import "../styles/about.css";
import About from "../components/About";
function AboutUs() {
  return (
    <section className="about_bigdiv">
      <div className="wrapper">
        <div className="about_div">
          <div className="hedgefi_bigdiv">
            <h1>HedgePay</h1>
            <p>HedgePay launched on February 8th 2022</p>
          </div>

          <About />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
