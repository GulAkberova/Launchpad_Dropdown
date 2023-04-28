import React, { useState } from "react";
import bounty from "../assets/icon/bounty.svg";
import bountyrgb from "../assets/icon/bountyrgb.svg";
import viewChart from "../assets/icon/viewChart.svg";
import viewChartrgb from "../assets/icon/viewChartrgb.svg";
import salary from "../assets/icon/salary.svg";
import salaryrgb from "../assets/icon/salaryrgb.svg";
import right from "../assets/icon/right.svg";
import rightrgb from "../assets/icon/rightrgb.svg";

function Supports() {
  const [activeLink, setActiveLink] = useState(1);

  const handleClick = (linkNumber) => {
    setActiveLink(linkNumber);
  };
  return (
    <div className="reward_div">
      <h2>Support</h2>
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
            <span>Help Center</span>
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
            <img src={salaryrgb} />
            <img src={salary} />
            &nbsp; &nbsp;
            <span>Request Forms</span>
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
            <span>Technical Support</span>
          </div>
          <img src={right} className="right" />
          <img src={rightrgb} className="right_rgb" />
        </a>
      </div>
    </div>
  );
}

export default Supports;
