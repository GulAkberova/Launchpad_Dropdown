import React from "react";
import "../styles/header.css";
import logo from "../assets/icon/logo.svg";
import shopping from "../assets/icon/shopping.svg";
import day from "../assets/icon/day.svg";
import certik from "../assets/icon/certik.svg";

import { NavLink, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const { pathname } = location;
  const navbarClass = pathname === "/about" ? "header_about" : "";
  return (
    <>
      <header className={`header_bigdiv ${navbarClass}`}>
        <div className="wrapper">
          <nav className="header_nav">
            <a href="#" className="home_certik_img_div none">
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
            <div>
              <NavLink to="/">
                <img src={logo} className="header_logo" />
              </NavLink>
              <ul>
                <li className="active">
                  <NavLink to="/">Swap</NavLink>
                </li>
                <li>
                  <NavLink to="/rewards">Rewards</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>

                <li>
                  <NavLink to="/launchpad">Launchpad</NavLink>
                </li>
                <li>
                  <NavLink to="/leaderboard">Leaderboard</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/support">Support</NavLink>
                </li>
              </ul>
              <NavLink to="#">
                <button>Connect Wallet</button>
              </NavLink>
              <ul className="header_lang">
                <li>
                  <NavLink to="/language">En</NavLink>
                </li>

                <li className="shop_li">
                  <NavLink to="#">
                    <img src={shopping} className="header_shopping" />
                    <div className="shop_card">1</div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
