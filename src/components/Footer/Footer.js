import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer__section">
        <h5>Contact</h5>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Stok%C5%82osy+3,+02-787+Warszawa/@52.1569372,21.0300659,14z/data=!4m5!3m4!1s0x47193291027e15a1:0x57a820cc1900e8b!8m2!3d52.1588131!4d21.0343466"
            >
              Stok&#322;osy 3, Warsaw
            </a>
          </li>
          <li>
            <a href="tel:+4812345678">+4812345678</a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="mailto:durka@gmail.com">
              durka@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__section">
        <h5>Privacy</h5>
        <ul>
          <li>Privacy policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
