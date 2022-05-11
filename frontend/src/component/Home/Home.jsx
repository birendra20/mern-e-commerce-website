import React, { Fragment } from "react";
import { CgMouse } from "react-icons";
import "./Home.css";
import Product from "./Product.jsx";
import MetaData from "../layout/MetaData";

const product = {
  name: "blue Tshirt",
  images: [
    {
      url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUsy08xwU3xSyHl1WYtWxma2EYPnok8CaObNYeSxDFr5No_f-9dZMrbHvU0VFaEQLIZnL-rK3UQvZAjzp8WiVumL6kvV4qZyND80a8ruZFRsXSHSBtzZ5p&usqp=CAc",
    },
  ],
  price: "39000",
  _id: "abhishek",
};

const Home = () => {
  return (
    <Fragment>
      <MetaData title="ECOMMERCE" />
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
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
