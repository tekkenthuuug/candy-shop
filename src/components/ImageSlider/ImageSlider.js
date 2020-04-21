import React, { useState, useEffect, createRef, useRef } from 'react';

import LazyImage from "../LazyImage/LazyImage";

import './ImageSlider.scss';

const ImageSlider = ({ sliderImages, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToRef = (ref, parent) => {
    parent.current.scrollLeft = ref.current.offsetLeft;
  };

  const handleResize = (ref, parent) => {
    parent.current.classList.add("slider__slide-container--resizing")
    scrollToRef(ref, parent);
    parent.current.classList.remove("slider__slide-container--resizing")
  };

  const imgRefs = useRef(sliderImages.map(() => createRef()));
  const containerRef = useRef(null);

  useEffect(() => {
    // Saving ref for cleanup function
    const savedRefs = imgRefs;
    const savedContainerRef = containerRef;
    
    window.addEventListener("resize", () => handleResize(savedRefs.current[currentSlide], savedContainerRef))

    scrollToRef(imgRefs.current[currentSlide], containerRef);
    const timeout = setTimeout(() => {
      if (currentSlide < imgRefs.current.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 10000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", () => handleResize(savedRefs.current[currentSlide], containerRef))
    };
    // eslint-disable-next-line
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
                refc={imgRefs.current[index]}
              />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(ImageSlider);
