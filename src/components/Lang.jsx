import React from "react";
import lang1 from "../assets/icon/flag_icon/china-flag.svg";
import lang2 from "../assets/icon/flag_icon/france-flag.svg";
import lang3 from "../assets/icon/flag_icon/germany-flag.svg";
import lang4 from "../assets/icon/flag_icon/india-flag.svg";
import lang5 from "../assets/icon/flag_icon/italy-flag.svg";
import lang6 from "../assets/icon/flag_icon/japan-flag.svg";
import lang7 from "../assets/icon/flag_icon/poland-flag.svg";
import lang8 from "../assets/icon/flag_icon/portugal-flag.svg";
import lang9 from "../assets/icon/flag_icon/russian-federation-flag.svg";
import lang10 from "../assets/icon/flag_icon/south-korea-flag.svg";
import lang11 from "../assets/icon/flag_icon/spain-flag.svg";
import lang12 from "../assets/icon/flag_icon/sweden-circle.svg";
import lang13 from "../assets/icon/flag_icon/turkey-flag.svg";
import lang14 from "../assets/icon/flag_icon/united-arab-emirates-flag.svg";
import lang15 from "../assets/icon/flag_icon/vietnam-flag.svg";
import eng from "../assets/icon/eng.svg";
function Lang() {
  return (
    <div className="language_mini_div">
      <h2>Language</h2>
      <div className="language_divs">
        <a href="#" className="active">
          <img src={eng} />
          &nbsp;
          <span>English</span>
        </a>
        <a href="#">
          <img src={lang1} />
          &nbsp;
          <span>中文</span>
        </a>
        <a href="#">
          <img src={lang2} />
          &nbsp;
          <span>Français</span>
        </a>
        <a href="#">
          <img src={lang3} />
          &nbsp;
          <span>Deutsch</span>
        </a>
        <a href="#">
          <img src={lang4} />
          &nbsp;
          <span>हिंदी</span>
        </a>
        <a href="#">
          <img src={lang5} />
          &nbsp;
          <span>Deutsch</span>
        </a>
        <a href="#">
          <img src={lang6} />
          &nbsp;
          <span>日本語</span>
        </a>
        <a href="#">
          <img src={lang15} />
          &nbsp;
          <span>ViệtNam</span>
        </a>
        <a href="#">
          <img src={lang8} />
          &nbsp;
          <span>Português</span>
        </a>
        <a href="#">
          <img src={lang9} />
          &nbsp;
          <span>Русский</span>
        </a>
        <a href="#">
          <img src={lang10} />
          &nbsp;
          <span>한국어</span>
        </a>

        <a href="#">
          <img src={lang12} />
          &nbsp;
          <span>Swedish</span>
        </a>
        <a href="#">
          <img src={lang13} />
          &nbsp;
          <span>Türkçe</span>
        </a>
        <a href="#">
          <img src={lang14} />
          &nbsp;
          <span>عربي</span>
        </a>
      </div>
    </div>
  );
}

export default Lang;
