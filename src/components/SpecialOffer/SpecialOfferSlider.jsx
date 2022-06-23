import React from "react";
import Slider from "../../utilities/slider/Slider";
import { specialOfferImage } from "../Services/imageService";
import SpecialOfferSliderItem from "./SpecialOfferSliderItem";

const SpecialOfferSlider = () => {
  const options = {
    rewind: true,
    type: "loop",
    autoplay: true,
    rewindSpeed: 1000,
    speed: 500,
    pauseOnHover: false,
    perPage: 1,
    width: "100%",
    breakpoints: {
      375: {
        perPage: 1,
      },
      575: {
        perPage: 1,
      },
    },
  };
  return (
    <section class="special-offer-slider-area">
      <div class="container">
        <Slider
          options={options}
          Template={SpecialOfferSliderItem}
          data={specialOfferImage}
        />
      </div>
    </section>
  );
};

export default SpecialOfferSlider;
