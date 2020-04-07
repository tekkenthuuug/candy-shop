import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

import "./About.scss";

const About = () => {
  return (
    <div className="page-container about">
      <h1>Our store - is what you will love!</h1>
      <img
        src="https://www.scoutingny.com/wp-content/uploads/2011/07/candy.jpg"
        alt="our store"
      />
      <p>
        We create sweets of the highest grades since the beginning of 1891. The
        quality of our sweets remains at a high level despite the fact that they
        are sold at an affordable price.
      </p>
      <h1>Best quality - our main goal!</h1>
      <img
        src="https://www.belarus.by/relimages/000937_146631.jpg"
        alt="process"
      />
      <p>
        To create sweets, we use the highest grades of sugar and the best
        technologies for production. We occupy a leading position in the quality
        of our products.
      </p>
      <div>
        <h3>Manufacturing process</h3>
        <img
          src="https://lh3.googleusercontent.com/proxy/UDxfzu8yWZbDYeD8Q63BjXd5N-PZQHLcq3rtsAkZ09nJcXk3y8eB2806-cT_NHEHvvKEaFi4I0CHkgeDF8sKHqt0mofcOuFBh2gWRlhWaLpEoaXiKnEmX3emyIgXjbnzBxPKTw18hCgwX9m6GIQ"
          alt="manufactoring"
        />
      </div>
      <h1 className="about-footer">
        We are waiting for you in our store!
        <h2>
          <Link to={ROUTES.shop}>Make you first order online</Link>
        </h2>
      </h1>
    </div>
  );
};

export default About;
