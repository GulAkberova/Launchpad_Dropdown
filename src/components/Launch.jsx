import React, { useState } from "react";
import viewChart from "../assets/icon/viewChart.svg";
import viewChartrgb from "../assets/icon/viewChartrgb.svg";
import right from "../assets/icon/right.svg";
import bounty from "../assets/icon/bounty.svg";
import bountyrgb from "../assets/icon/bountyrgb.svg";
import rightrgb from "../assets/icon/rightrgb.svg";
import salary from "../assets/icon/salary.svg";
import salaryrgb from "../assets/icon/salaryrgb.svg";
function Launch() {
  const [activeLink, setActiveLink] = useState(1);

  const handleClick = (linkNumber) => {
    setActiveLink(linkNumber);
  };
  return (
    <>
      <div className="reward_div">
        <h2>
          HPAY <span>Launchpad</span>
        </h2>
        <div className="reward_divs">
          <a
            href="javascript:void(0)"
            className={activeLink === 1 ? "active" : ""}
            onClick={() => handleClick(1)}
          >
            <div>
              <img src={viewChart} />
              <img src={viewChartrgb} />
              &nbsp; &nbsp;
              <span>Create Presale</span>
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
              <span>Presale List</span>
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
              <img src={bountyrgb} />
              <img src={bounty} />
              &nbsp; &nbsp;
              <span>Liquidity Locker</span>
            </div>
            <img src={right} className="right" />
            <img src={rightrgb} className="right_rgb" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Launch;
