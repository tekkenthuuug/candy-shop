import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Slider from '../../components/Slider/Slider';
import SearchField from '../../components/SearchField/SearchField';

import { ROUTES } from '../../utils/constants';

import './Homepage.scss';

const sliderImages = [
  'https://previews.123rf.com/images/beats1/beats11810/beats1181000278/109501372-candies-with-jelly-and-sugar-colorful-array-of-different-childs-sweets-and-treats.jpg',
  'https://previews.123rf.com/images/beats1/beats11810/beats1181000278/109501372-candies-with-jelly-and-sugar-colorful-array-of-different-childs-sweets-and-treats.jpg',
  'https://previews.123rf.com/images/beats1/beats11810/beats1181000278/109501372-candies-with-jelly-and-sugar-colorful-array-of-different-childs-sweets-and-treats.jpg',
];

const Homepage = () => {
  const history = useHistory();
  const [searchField, setSearchField] = useState('');

  const redirectToShop = () => {
    history.push(`${ROUTES.shop}?q=${searchField}`);
  }

  return (
    <div className="homepage page-container">
      <Slider sliderImages={sliderImages}>
        <div className="homepage__info">
          <h1>We make candies</h1>
          <div className="homepage__search-wrapper">
            <SearchField
              showDropdown={false}
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
