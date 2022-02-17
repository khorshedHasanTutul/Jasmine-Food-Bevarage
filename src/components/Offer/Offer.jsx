import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../utilities/slider/Slider';
import appData from '../DataSource/appData';
import { UrlOfferRoute } from '../Services/UrlService';
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
        <div class="common-heading">
            <h1>Special Offers</h1>
        </div>
     <div class="special-offer-main">
         <Slider options={options} Template={OfferSingleItem} data={getOfferProducts}/>
         <div class="common-btn">
             <Link to={UrlOfferRoute()}>See All Offers</Link>
         </div>
     </div>
    </div>
</section>
  );
};

export default Offer;
