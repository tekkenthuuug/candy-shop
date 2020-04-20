import React, { useState, useEffect, createRef, useRef } from 'react';

import LazyImage from "../LazyImage/LazyImage";

import './ImageSlider.scss';

const Slider = ({ sliderImages, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToRef = (ref, parent) => {
    parent.current.scrollLeft = ref.current.offsetLeft;
  };

  const refs = useRef(sliderImages.map(() => createRef()));
  const containerRef = useRef(null);

  useEffect(() => {
    scrollToRef(refs.current[currentSlide], containerRef);
    const timeout = setTimeout(() => {
      if (currentSlide < refs.current.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="slider__container">
        {children}
        <div className="slider__controls">
          {sliderImages.map((el, index) => {
            return (
              <span
                onClick={() => setCurrentSlide(index)}
                key={index}
                className={currentSlide === index ? 'slider__control slider__control--selected' : 'slider__control'}
              ></span>
            );
          })}
        </div>
      </div>
      <div className="slider__slide-container" ref={containerRef}>
        {sliderImages.map((img, index) => {
          return (
              <LazyImage
                alt="background slide"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                key={index}
                src={img.min}
                fullSrc={img.full}
                refc={refs.current[index]}
              />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Slider);
