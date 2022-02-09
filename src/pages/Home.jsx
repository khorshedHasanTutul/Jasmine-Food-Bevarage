import React from 'react';
import Banner from '../components/Banner/Banner';
import Offer from '../components/Offer/Offer';
import CategoryProductByHome from '../components/Product/HomeProduct/CategoryProductByHome';

const Home = () => {
  return (
      <>
          <Banner />
          <CategoryProductByHome/>
          <Offer />
      </>
  );
};
export default Home;
