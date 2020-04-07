import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';

import './About.scss';

const About = () => {
  return (
    <div className="page-container about">
      <div className="about__section">
        <h1>Our store - is what you will love!</h1>
        <p>
          We create sweets of the highest grades since the beginning of 1891. The quality of our sweets remains at a
          high level despite the fact that they are sold at an affordable price.
        </p>
      </div>
      <div className="about__section">
        <h1>Best quality - our main goal!</h1>
        <p>
          To create sweets, we use the highest grades of sugar and the best technologies for production. We occupy a
          leading position in the quality of our products.
        </p>
      </div>
      <div className="about__order-now-container">
        <Link to={ROUTES.shop} className="about__order-now">
          Make you first order online
        </Link>
      </div>
    </div>
  );
};

export default About;
