import React, { useState } from "react";
import bounty from "../assets/icon/bounty.svg";
import bountyrgb from "../assets/icon/bountyrgb.svg";
import micon from "../assets/icon/micon.svg";
import miconrgb from "../assets/icon/miconrgb.svg";
import right from "../assets/icon/right.svg";
import rightrgb from "../assets/icon/rightrgb.svg";

function Leader() {
  const [activeLink, setActiveLink] = useState(1);

  const handleClick = (linkNumber) => {
    setActiveLink(linkNumber);
  };
  return (
    <div className="reward_div">
      <h2>
        HPAY <span>Leaderboard</span>
      </h2>
      <div className="reward_divs">
        <a
          href="javascript:void(0)"
          className={activeLink === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          <div>
            <img src={miconrgb} />
            <img src={micon} />
            &nbsp; &nbsp;
            <span>Leaderboard</span>
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
            <img src={bountyrgb} />
            <img src={bounty} />
            &nbsp; &nbsp;
            <span>Partnerships List</span>
          </div>
          <img src={right} className="right" />
          <img src={rightrgb} className="right_rgb" />
        </a>
      </div>
    </div>
  );
}

export default Leader;
