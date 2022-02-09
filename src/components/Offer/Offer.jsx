import React from 'react';
import Slider from '../../utilities/slider/Slider';
import appData from '../DataSource/appData';
import OfferSingleItem from './OfferSingleItem';

const Offer = () => {
    const getOfferProducts=appData.categoryProducts.filter(item=>item.offer_status===true);
    const options={
      rewind: true,
      type: 'loop',
      autoplay: true,
      rewindSpeed: 1000,
      speed: 500,
      pauseOnHover:false,
      perPage:2,
      width:'100%',
      breakpoints: {
        375: {
            perPage: 1,
        },
        575: {
            perPage: 1,
        },
  }
    }
  return (
    <section class="special-offer-area bg-sec">
    <div class="container">
        {/* <!-- common heading --> */}
        <div class="common-heading common-heading-Oil">
            <h1>Special Offers</h1>
        </div>
     {/* <!-- common heading --> */}
     <div class="special-offer-main">
        {/* <div class="splide offer-splide">
            <div class="splide__track">
                  <ul class="splide__list">
                      <li class="splide__slide offer_splide__slide">
                            
                      </li>
                  </ul>
            </div>
         </div> */}
         <Slider options={options} Template={OfferSingleItem} data={getOfferProducts}/>
         <div class="common-btn">
             <a href="#">See All Offers</a>
         </div>
     </div>
    </div>
</section>
  );
};

export default Offer;
