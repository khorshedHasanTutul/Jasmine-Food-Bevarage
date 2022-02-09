import React from 'react';
import Slider from '../../utilities/slider/Slider';
import appData from '../DataSource/appData';
import BannerTemplate from './BannerTemplate';

const Banner = () => {
  const getSlider=appData.Banner;
  const options={
    rewind: true,
    type: 'loop',
    autoplay: true,
    rewindSpeed: 1000,
    speed: 500,
    pauseOnHover:false
  }
  return (
    <section class="banner-area" >
      <Slider options={options} data={getSlider} Template={BannerTemplate} />
 </section>
  );
};

export default Banner;
