import React from 'react';
import SpecialOfferHeader from './SpecialOfferHeader';
import SpecialOfferProductArea from './SpecialOfferProductArea';
import SpecialOfferSlider from './SpecialOfferSlider';

const SpecialOfferParent = () => {
  return (
      <>
      <SpecialOfferHeader />
      <SpecialOfferSlider />
      <SpecialOfferProductArea />
      </>
      
  );
};

export default SpecialOfferParent;
