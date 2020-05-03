import React, { useState } from "react";

import Slider from "../../components/ImageSlider/ImageSlider";
import SearchField from "../../components/SearchField/SearchField";

import { ROUTES } from "../../utils/constants";

import "./Homepage.scss";

const sliderImages = [
  {
    min: "https://i.imgur.com/MKZIRZy.jpg",
    full: "https://imgur.com/jPnLT9E.jpg",
  },
  {
    min: "https://imgur.com/Ae1yx4b.jpg",
    full: "https://imgur.com/rdCy635.jpg",
  },
  {
    min: "https://imgur.com/Ud6d0E6.jpg",
    full: "https://imgur.com/erbMvWk.jpg",
  },
];

const Homepage = (props) => {
  const { history } = props;

  const [searchField, setSearchField] = useState("");

  const redirectToShop = () => {
    history.push(`${ROUTES.shop}?search=${searchField}`);
  };

  return (
    <div className="homepage page-container">
      <Slider sliderImages={sliderImages}>
        <div className="homepage__info">
          <h1>We sell best candies in Poland</h1>
          <div className="homepage__search-wrapper">
            <SearchField
              setSearchField={setSearchField}
              searchField={searchField}
              onSubmit={redirectToShop}
              ComponentRight={
                <button
                  className="homepage__search-btn"
                  onClick={redirectToShop}
                >
                  Search
                </button>
              }
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Homepage;
