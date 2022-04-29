import React from 'react';
import { Link } from 'react-router-dom';
import { getBannerObjectFrom } from '../Services/DataService';
import { BASE_URL } from '../Services/httpService';

const BannerTemplate = ({item}) => {
  const getObjectFromBannerItem =getBannerObjectFrom(item);
  return ( 
        <>
            <Link to={getObjectFromBannerItem.Link}><img src={`${BASE_URL}${getObjectFromBannerItem.Image}`} alt="img" /></Link>
        </>
  );
};

export default BannerTemplate;
