import React from "react";
import "../styles/products.css";
import Services from "../components/Services";
import World from "../components/World";
function Products() {
  return (
    <>
      <section className="products_bigdiv">
        <div className="wrapper">
          <div className="products_div">
            <Services />
            <div className="hedgefi_bigdiv">
              <h1>Products</h1>
              <p>
                HedgePay provides more services for projects than we have room
                to list. Don’t see what you want? Contact us directly
              </p>
            </div>
            <World />
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
