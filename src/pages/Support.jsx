import React from "react";
import "../styles/support.css";
import Supports from "../components/Supports";
import talks from "../assets/icon/talks.svg";
import talks1 from "../assets/icon/talks1.svg";
function Support() {
  return (
    <section className="support_bigdiv">
      <div className="wrapper">
        <div className="support_div">
          <div className="hedgefi_bigdiv">
            <h1>Let’s talk</h1>
            <p>We are here to help</p>
          </div>
          <div className="talks_img_div">{/* <img src={talks1} /> */}</div>
          <Supports />
        </div>
      </div>
    </section>
  );
}

export default Support;
