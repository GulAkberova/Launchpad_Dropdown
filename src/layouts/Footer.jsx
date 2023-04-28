import React, { useState } from "react";
import "../styles/footer.css";
import day from "../assets/icon/day.svg";
import coin from "../assets/icon/coin.svg";
import social from "../assets/icon/social.svg";
import certik from "../assets/icon/certik.svg";
import support from "../assets/icon/support.svg";
import Mobilemenu from "../components/Mobilemenu";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const { pathname } = location;
  const navbarClass = pathname === "/about" ? "footer_about" : "";
  return (
    <>
      <footer className={`footer_bigdiv ${navbarClass}`}>
        <div className="wrapper">
          <div className="footer_div">
            <a href="#" className="footer_certik_img_div footer_rwd_none">
              <ul>
                <li>
                  <img src={day} />
                </li>
                <li>
                  <img src={certik} />
                </li>
                <li>Skynet</li>
              </ul>
            </a>
            <ul className="footer_img_div">
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
        </div>
      </footer>
    </>
  );
}

export default Footer;
