import React from 'react';
import { Link } from 'react-router-dom';

const BannerTemplate = ({item}) => {
  return ( 
        <>
            <Link to={item.link}><img src={item.imageURL} alt="img" /></Link>
        </>
  );
};

export default BannerTemplate;
