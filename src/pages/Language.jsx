import React from "react";
import "../styles/language.css";
import Lang from "../components/Lang";
function Language() {
  return (
    <section className="language_bigdiv">
      <div className="wrapper">
        <div className="language_div">
          <div className="hedgefi_bigdiv">
            <h1>Hello World</h1>
            <p>Multiple language options</p>
          </div>
          <div className="language_hello_div"></div>
          <Lang />
        </div>
      </div>
    </section>
  );
}

export default Language;
