import React from "react";
import "../styles/mobile.css";
import about from "../assets/icon/menu_icon/about.svg";
import home from "../assets/icon/menu_icon/home.svg";
import language from "../assets/icon/menu_icon/language.svg";
import launchpad from "../assets/icon/menu_icon/launchpad.svg";
import leaderboard from "../assets/icon/menu_icon/leaderboard.svg";
import products from "../assets/icon/menu_icon/products.svg";
import rewards from "../assets/icon/menu_icon/rewards.svg";
import support from "../assets/icon/menu_icon/support.svg";
import swap from "../assets/icon/menu_icon/swap.svg";
import coin from "../assets/icon/coin.svg";
import social from "../assets/icon/social.svg";
import { NavLink } from "react-router-dom";
function Mobilemenu({ setMenuOpen }) {
  const handleClick = () => {
    setMenuOpen(false);
  };
  return (
    <div className="mobile_bigdiv">
      <div>
        <NavLink to={"/"} onClick={handleClick}>
          <img src={home} />
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to={"/swap"} onClick={handleClick}>
          {" "}
          <img src={swap} />
          Swap
        </NavLink>
      </div>
      <div>
        <NavLink to={"/rewards"} onClick={handleClick}>
          {" "}
          <img src={rewards} />
          Rewards
        </NavLink>
      </div>
      <div>
        <NavLink to={"/launchpad"} onClick={handleClick}>
          {" "}
          <img src={launchpad} />
          Launchpad
        </NavLink>
      </div>
      <div>
        <NavLink to={"/products"} onClick={handleClick}>
          {" "}
          <img src={products} />
          Products
        </NavLink>
      </div>
      <div>
        <NavLink to={"/leaderboard"} onClick={handleClick}>
          {" "}
          <img src={leaderboard} />
          Leaderboard
        </NavLink>
      </div>
      <div>
        <NavLink to={"/about"} onClick={handleClick}>
          {" "}
          <img src={about} />
          About Us
        </NavLink>
      </div>
      <div>
        <NavLink to={"/support"} onClick={handleClick}>
          {" "}
          <img src={support} />
          Support
        </NavLink>
      </div>
      <div>
        <NavLink to={"/language"} onClick={handleClick}>
          {" "}
          <img src={language} />
          Language
        </NavLink>
      </div>

      <ul className="footermobile">
        <li>
          <a href="#">
            <img src={coin} />
            <br />
            CoinMarketCap
          </a>
        </li>
        <li>
          <a href="#">
            <img src={social} />
            <br />
            Socials
          </a>
        </li>
        <li>
          <a href="#">
            <img src={support} />
            <br />
            Support
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Mobilemenu;
