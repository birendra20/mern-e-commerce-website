import React from "react";
import Products from "../Product/Products";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://cdn.static-zoutons.com/images/originals/blog/MAIN-BANNER-BLOG-SHOPCLUES-(30-OCT)_1635739500.png"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.dealsshutter.com/blog/wp-content/uploads/2020/10/diwali-offers.jpg"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://indiakaaoffer.com/wp-content/uploads/2017/03/Shopclues-FreeShipping-banner.jpg"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Products />
    </>
  );
};

export default Home;
