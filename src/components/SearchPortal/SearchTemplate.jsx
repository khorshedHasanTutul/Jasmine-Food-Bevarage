import React from 'react';
import { Link } from 'react-router-dom';
import appData from '../DataSource/appData';

const SearchTemplate = ({item,closeSearch,lowerSearchvalue,setalert}) => {
  const categoryData= appData.BottomHeader[1].dropDownCategoryItem.find(item2=>(item2.categoryId===item.category_id))

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
              {/* <!-- search result --> */}
            <div class="result-card">
              <div class="result-card__img">
                <img src={item.image} alt="product_image" />
              </div>
              <div class="result-card__details">
                <Link to={''}  class="result-card__details--name" onClick={closeSearch}>
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
             
              <div class="result-card__details--actions">
                <button>
                <i class="fa fa-shopping-cart" aria-hidden="true" ></i>
                <strong> Add to Cart</strong>
                </button>            
              </div>
             
             
            </div>
            </div>
    );
};

export default SearchTemplate;