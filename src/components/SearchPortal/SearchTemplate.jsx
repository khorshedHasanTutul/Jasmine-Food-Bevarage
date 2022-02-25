import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import appData from '../DataSource/appData';
import { urlProductDetails } from '../Services/UrlService';
import cartContext from '../Store/cart-context';

const SearchTemplate = ({item,closeSearch,lowerSearchvalue,setalert}) => {
  const categoryData= appData.BottomHeader[1].dropDownCategoryItem.find(item2=>(item2.categoryId===item.category_id))
  const getCartContext = useContext(cartContext);
  const [visibleCartBox,setVisibleCartBox]=useState(false)
  const getCartCtxItems=getCartContext.getCartModel.Items;
  const findItem=getCartCtxItems.find(item2=>item2.Id===item.Id)

  const storeCartHandler = (item,e) => {
    e.preventDefault();
    getCartContext.storeCartItems(item);
  };

  const qtyIncHandler=(e)=>{
    e.preventDefault();
    let quantity=findItem.quantity+1;
    getCartContext.updateQuantity(findItem,quantity)
  }

  const qtyDecHandler=(e)=>{
    e.preventDefault();
    let quantity=findItem.quantity-1;
    getCartContext.updateQuantity(findItem,quantity)
    if(findItem.quantity===0){
      setVisibleCartBox(false)
    }
  }
  
  useEffect(()=>{
    if(findItem){
      setVisibleCartBox(true)
    }
    else{
      setVisibleCartBox(false)
    }
  },[findItem])

  const getHTML = () => {
    return {
      __html: item.Nm.toLowerCase().replace(
        lowerSearchvalue,
        `<span class="t-pink">${lowerSearchvalue}</span>`
      ),
    };
  };

    return (
        <div class="search-result__items">
            <div class="result-card">
              <div class="result-card__img">
                <img src={item.image} alt="product_image" />
              </div>
              <div class="result-card__details">
                <Link to={urlProductDetails()+item.Id}  class="result-card__details--name" onClick={closeSearch}>
                  <span  dangerouslySetInnerHTML={getHTML()}></span>
                </Link>
                <p class="result-card__details--price">
                  <span>Price: </span>
                  {
                      (item.Ds>0)?<span class="current">৳{(item.MRP-((item.MRP)*item.Ds)/100).toFixed(2)}</span>:
                      <span class="current">৳{item.MRP}</span>
                  }
                  
                  {item.Ds>0 ? <span class="original"><del class="cross_price">৳ {item.MRP}</del></span> :
                  ''
                  }
                                
                </p>
                <Link to={'/category/'+item.category_id} class="result-card__details--category" href onClick={closeSearch}>
                <span>Category: </span>
                <span class="current">{categoryData.categoryName}</span>
                </Link>
              </div>
              {
                (!visibleCartBox)&&
                <div class="result-card__details--actions" onClick={storeCartHandler.bind(this,item)}>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"></path></svg>
                <strong> Add to Cart</strong>
                </button>            
              </div>
              }
              {
          (visibleCartBox)&&
          <div class="wishlist-btn">
          <div class="add-tocart-overlay">
              <div class="inner-card-flex">
                  <div class="qty-holder2">
                      <span onClick={qtyDecHandler} class="qty-dec-btn2" title="Dec">-</span>
                      <aside>{findItem?.quantity} Item</aside>
                      <span onClick={qtyIncHandler} class="qty-inc-btn2" title="Inc">+</span>
                  </div>
              </div>
          </div>
        </div>
        }
             
             
            </div>
        </div>
    );
};

export default SearchTemplate;