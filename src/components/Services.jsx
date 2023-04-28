import React, { useState } from "react";
import ok from "../assets/icon/ok.svg";
import okrgb from "../assets/icon/okrgb.svg";
import basket from "../assets/icon/basket.svg";
import basketrgb from "../assets/icon/basketrgb.svg";
import mic from "../assets/icon/mic.svg";
import micrgb from "../assets/icon/micrgb.svg";
import home from "../assets/icon/home.svg";
import homergb from "../assets/icon/homergb.svg";
import right from "../assets/icon/right.svg";
import rightrgb from "../assets/icon/rightrgb.svg";
import ok1rgb from "../assets/icon/ok1rgb.svg";
import ok1 from "../assets/icon/ok1.svg";

function Services() {
  const [activeLink, setActiveLink] = useState(1);

  const handleClick = (linkNumber) => {
    setActiveLink(linkNumber);
  };
  return (
    <div className="reward_div">
      <h2>
        HPAY <span>Services</span>
      </h2>
      <div className="reward_divs">
        <a
          href="javascript:void(0)"
          className={activeLink === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          <div>
            <img src={basketrgb} />
            <img src={basket} />
            &nbsp; &nbsp;
            <span>List of Services</span>
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
            <img src={homergb} />
            <img src={home} />
            &nbsp; &nbsp;
            <span>Staking Service</span>
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
            <img src={micrgb} />
            <img src={mic} />
            &nbsp; &nbsp;
            <span>Market Making</span>
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
            <img src={okrgb} />
            <img src={ok} />
            &nbsp; &nbsp;
            <span>Audit & KYC</span>
          </div>
          <img src={right} className="right" />
          <img src={rightrgb} className="right_rgb" />
        </a>
        <a
          href="javascript:void(0)"
          className={activeLink === 5 ? "active" : ""}
          onClick={() => handleClick(5)}
        >
          <div>
            <img src={ok1} />
            <img src={ok1rgb} />
            &nbsp; &nbsp;
            <span>HedgeTalk</span>
          </div>
          <img src={right} className="right" />
          <img src={rightrgb} className="right_rgb" />
        </a>
      </div>
    </div>
  );
}

export default Services;
