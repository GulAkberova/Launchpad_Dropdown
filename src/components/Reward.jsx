import React, { useState } from "react";

import bounty from "../assets/icon/bounty.svg";
import bountyrgb from "../assets/icon/bountyrgb.svg";
import micon from "../assets/icon/micon.svg";
import miconrgb from "../assets/icon/miconrgb.svg";
import viewChart from "../assets/icon/viewChart.svg";
import viewChartrgb from "../assets/icon/viewChartrgb.svg";
import salary from "../assets/icon/salary.svg";
import salaryrgb from "../assets/icon/salaryrgb.svg";
import rightrgb from "../assets/icon/rightrgb.svg";
import right from "../assets/icon/right.svg";
function Reward() {
  const [activeLink, setActiveLink] = useState(1);

  const handleClick = (linkNumber) => {
    setActiveLink(linkNumber);
  };
  return (
    <div className="reward_div">
      <h2>
        HPAY <span>Rewards</span>
      </h2>
      <div className="reward_divs">
        <a
          href="javascript:void(0)"
          className={activeLink === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          <div>
            <img src={bountyrgb} />
            <img src={bounty} />
            &nbsp; &nbsp;
            <span>BUSD Rewards</span>
          </div>
          <img src={right} className="right" />
          <img src={rightrgb} className="right_rgb" />
        </a>
        <a
          href="javascript:void(0)"
          className={activeLink === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          <div>
            <img src={miconrgb} />
            <img src={micon} />
            &nbsp; &nbsp;
            <span>Auto Compound</span>
          </div>
          <img src={right} className="right" />
          <img src={rightrgb} className="right_rgb" />
        </a>
        <a
          href="javascript:void(0)"
          className={activeLink === 3 ? "active" : ""}
          onClick={() => handleClick(3)}
        >
          <div>
            <img src={viewChart} />
            <img src={viewChartrgb} />
            &nbsp; &nbsp;
            <span>Classic Staking</span>
          </div>
          <img src={right} className="right" />
          <img src={rightrgb} className="right_rgb" />
        </a>
        <a
          href="javascript:void(0)"
          className={activeLink === 4 ? "active" : ""}
          onClick={() => handleClick(4)}
        >
          <div>
            <img src={salaryrgb} />
            <img src={salary} />
            &nbsp; &nbsp;
            <span>Buy HedgePay</span>
          </div>
          <img src={right} className="right" />
          <img src={rightrgb} className="right_rgb" />
        </a>
      </div>
    </div>
  );
}

export default Reward;
