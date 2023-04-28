import React from "react";
import discovery from "../assets/icon/discovery.svg";
function World() {
  return (
    <div className="world_bigdiv">
      <div className="world_div1 w1">
        <img src={discovery} />
        <div>
          <h2>1000+</h2>
          <p>Services</p>
        </div>
      </div>
      <div className="world_div1 w2">
        <img src={discovery} />
        <div>
          <h2>1000+</h2>
          <p>Services</p>
        </div>
      </div>
      <div className="world_div1 w3">
        <img src={discovery} />
        <div>
          <h2>1000+</h2>
          <p>Services</p>
        </div>
      </div>
    </div>
  );
}

export default World;
