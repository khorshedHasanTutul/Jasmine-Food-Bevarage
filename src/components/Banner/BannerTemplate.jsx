import React from 'react';

const BannerTemplate = ({item}) => {
  return ( 
        <>
            <a href='/'><img src={item.image} alt="img" /></a>
        </>
  );
};

export default BannerTemplate;
