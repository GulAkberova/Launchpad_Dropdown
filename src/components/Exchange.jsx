import React, { useState } from "react";
import buy from "../assets/icon/buy.svg";
import buyrgb from "../assets/icon/buyrgb.svg";
import share from "../assets/icon/share.svg";
import sharehover from "../assets/icon/sharehover.svg";
import right from "../assets/icon/right.svg";
import rightrgb from "../assets/icon/rightrgb.svg";
import chart from "../assets/icon/chart.svg";
import chartrgb from "../assets/icon/chartrgb.svg";
import transak from "../assets/icon/transak.svg";

function Exchange() {
  const [activeLink, setActiveLink] = useState(1);

  const handleClick = (linkNumber) => {
    setActiveLink(linkNumber);
  };
  return (
    <>
      <div className="reward_div">
        <h2>
          HPAY <span>Exchange</span>
        </h2>
        <div className="reward_divs">
          <a
            href="javascript:void(0)"
            className={activeLink === 1 ? "active" : ""}
            onClick={() => handleClick(1)}
          >
            <div>
              <img src={buyrgb} />
              <img src={buy} />
              &nbsp; &nbsp;
              <span>Buy HedgePay</span>
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
              <img src={sharehover} />
              <img src={share} />
              &nbsp; &nbsp;
              <span>Transfer Gateway</span>
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
              <img src={chartrgb} />
              <img src={chart} />
              &nbsp; &nbsp;
              <span>View Chart</span>
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
              <img src={chartrgb} />
              <img src={transak} />
              &nbsp; &nbsp;
              <span>Buy with Transak</span>
            </div>
            <img src={right} className="right" />
            <img src={rightrgb} className="right_rgb" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Exchange;
