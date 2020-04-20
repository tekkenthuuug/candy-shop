import React, { useState } from 'react'

import "./LazyImage.scss";

const LazyImage = ({ src, alt, fullSrc, refc, ...rest }) => {
  const [img, setImg] = useState(src);
  const [fullLoaded, setFullLoaded] = useState(false);

  const loadFullImage = () => {
    if (fullSrc) {
      if (img === fullSrc) {
        setFullLoaded(true);
      }
      setImg(fullSrc);
    }
  }

  return (
    <img className={!fullLoaded ? "min-loading" : undefined} onLoad={loadFullImage} src={img} ref={refc} alt={alt} {...rest} />
  )
}

export default LazyImage
