import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import appData from '../DataSource/appData';
import { urlProductDetails } from '../Services/UrlService';
import cartContext from '../Store/cart-context';
import SpecialOfferSingleItem from './SpecialOfferSingleItem';

const SpecialOfferProItems = () => {
    const getSpecialProduct=appData.categoryProducts.filter(item=>item.offer_status===true);
    const cartCtx =  useContext(cartContext);

    const addToCartHandler = (item, e) => {
      e.preventDefault();
      cartCtx.storeCartItems(item);
    }

    return (
    <div class="hot-offer-product mt-20">
    <div class="product-main-flex">
        {
            getSpecialProduct.map(item=>(
                <SpecialOfferSingleItem item={item} />
            ))
        }
        
    </div>
 </div>
  );
};

export default SpecialOfferProItems;
