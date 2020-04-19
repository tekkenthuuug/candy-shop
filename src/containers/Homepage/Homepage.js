import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Slider from '../../components/Slider/Slider';
import SearchField from '../../components/SearchField/SearchField';

import { ROUTES } from '../../utils/constants';

import './Homepage.scss';

const sliderImages = [
  'https://i.insider.com/5bbcf5839fb84c270c2ebc3c?width=1136&format=jpeg',
  'https://www.simplemost.com/wp-content/uploads/2019/10/halloween-candy.jpeg',
  'https://ewscripps.brightspotcdn.com/dims4/default/39fa9e4/2147483647/strip/true/crop/1000x563+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F8d%2Fcc%2Fbc12c88e4679a97466d123f02c78%2Fsweathearts-valentines-day-candy-pexels-2017.png',
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
