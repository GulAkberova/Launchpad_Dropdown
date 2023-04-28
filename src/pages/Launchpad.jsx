import React from "react";
import "../styles/launchpad.css";
import Launch from "../components/Launch";
import CreateCard from "../components/CreateCard";
function Launchpad() {
  return (
    <>
      <section className="launch_bigdiv">
        <div className="wrapper">
          <div className="launch_div">
            <Launch />
            <div className="hedgefi_bigdiv">
              <h1>H Pad</h1>
              <p>
                Welcome to the multichain launchpad with over 7 different ways
                to launch your project
              </p>
            </div>
            <CreateCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Launchpad;
