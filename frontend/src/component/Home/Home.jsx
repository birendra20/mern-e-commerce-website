import React, { Fragment } from "react";
import { CgMouse } from "react-icons";
import "./Home.css";
import Product from "./Product.jsx";

const product = {
  name: "blue Tshirt",
  images: [{ url: "lkjsfdlkglk" }],
  price: "39000",
  _id: "abhishek",
};

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to E-Commerce</p>
        <h1>FIND AMAZING PRODUCT BELOW</h1>

        <a href="#container">
          <button>
            Scroll
            {/* <CgMouse /> */}
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
