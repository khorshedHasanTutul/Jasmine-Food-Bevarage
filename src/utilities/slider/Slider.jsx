import React from 'react';
import { SplideSlide,Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Slider = ({options,data,Template}) => {
  return (
      <Splide options={options}>
          {
              data.map((item,index)=>(
                <SplideSlide key={item.id || index}>
                    <Template item={item} />
                </SplideSlide>
              ))
          }
      </Splide>
  );
};

export default Slider;
