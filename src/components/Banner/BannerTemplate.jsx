import React from 'react';
import { Link } from 'react-router-dom';

const BannerTemplate = ({item}) => {
  return ( 
        <>
            <Link to='/'><img src={item.image} alt="img" /></Link>
        </>
  );
};

export default BannerTemplate;
