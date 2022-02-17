import React from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const Slider = ({ options, data, Template, imageChangedHandler }) => {
  return (
    // new Splide( '.splide' ).mount( { AutoScroll } );

    <Splide options={options}>
      {data.map((item, index) => (
        <SplideSlide key={item.id || index}>
          {imageChangedHandler ? (
            <Template item={item} imageChangedHandler={imageChangedHandler} />
          ) : (
            <Template item={item} />
          )}
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
