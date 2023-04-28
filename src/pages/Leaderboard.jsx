import React from "react";
import "../styles/leader.css";
import Leader from "../components/Leader";
function Leaderboard() {
  return (
    <>
      <section className="leader_bigdiv">
        <div className="wrapper">
          <div className="leader_div">
            <Leader />
            <div className="hedgefi_bigdiv">
              <h1>Security Center</h1>
              <p>
                One of HedgePay’s three core tenants is security. Use our
                database to find projects with known leaders and audited
                contracts.
              </p>
            </div>
            <div className="globe_bigdiv"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leaderboard;
