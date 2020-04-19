import React, { useEffect, useState } from 'react';

import './GoUp.scss';

const GoUp = () => {
  const [show, setShow] = useState(false);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollingElement.scrollTop;
    if (scrollTop > 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return show ? (
    <div className="go-up" onClick={scrollToTop}>
      <span>&#10140;</span>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(GoUp);
