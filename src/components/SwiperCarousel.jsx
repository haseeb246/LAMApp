/* eslint-disable react/jsx-props-no-spreading */
// https://swiperjs.com/react

/* eslint-disable react/prop-types */

import React, { useRef, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/swiper.min.css';

const SwiperCarousel = ({ id, loop, options, nav, slides }) => {
  // ---------------------------------------------------------------------------
  // context / ref / state

  const swiper = useRef(null);
  const [current, setCurrent] = useState(1);
  const [swiperOptions, setSwiperOptions] = useState(options);
  const [slideKeys, setSlideKeys] = useState([]);

  // const windowSize = useWindowDimensions();

  // ---------------------------------------------------------------------------
  // methods

  const next = () => {
    if (swiper?.current?.swiper?.slideNext) {
      swiper.current.swiper.slideNext();
    }
  };

  const prev = () => {
    if (swiper?.current?.swiper?.slidePrev) {
      swiper.current.swiper.slidePrev();
    }
  };

  // ---------------------------------------------------------------------------
  // lifecycle

  useEffect(() => {
    const keys = slides.map(() => uuidv4());

    setSlideKeys(keys);
  }, [slides]);

  // ---------------------------------------------------------------------------
  // render

  const swiperJSX = (
    <>
      <Swiper
        id={id}
        ref={swiper}
        className="swiper-carousel"
        loop={loop}
        onSlideChange={({ realIndex }) => {
          setCurrent(realIndex);
        }}
        {...swiperOptions}
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={slideKeys[slideIndex]}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      {nav &&
        nav({
          current,
          next,
          prev
        })}
    </>
  );

  return swiperJSX;
};

SwiperCarousel.defaultProps = {
  id: `default-swiper`,
  loop: true,
  options: {
    spaceBetween: 0,
    slidesPerView: 1
  },
  slides: null
};
SwiperCarousel.propTypes = {
  id: PropTypes.string,
  loop: PropTypes.bool,
  options: PropTypes.shape({}),
  slides: PropTypes.arrayOf(PropTypes.shape({}))
};

export default SwiperCarousel;
