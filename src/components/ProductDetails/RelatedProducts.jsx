import React from 'react'
import { Link } from 'react-router-dom'
import appData from '../DataSource/appData'
import { urlProductDetails } from '../Services/UrlService'

const RelatedProducts = ({productItem,imageChangedHandler}) => {
    const getRelatedProducts=appData.categoryProducts.filter(item=>item.category_id===productItem.category_id && item.subCategory_id===productItem.subCategory_id)
  return (
    <div class="product-details-right">
    <div class="related-product-main">
        <h4>RELATED PRODUCTS</h4>
        {
            getRelatedProducts.map(item=>(
                <div class="recent-pro-del-flex">
            <Link to={urlProductDetails()+item.Id } onClick={imageChangedHandler.bind(null,item.image)}>
                <div class="product-del-s-img">
                    <img src={item.image} alt="img" />
                </div>
                <div class="product-del-s-content">
                    <div class="product-del-s-title">
                        <h4>{item.Nm}</h4>
                    </div>
                    <div class="product-del-s-blog-desc">
                        <div class="basket-add">
                            <span class="item__price item__price--now">৳{item.MRP}</span>
                        </div>
                    </div>
                </div>
             </Link>
        </div>
            ))
        }
        
    </div>
</div>
  )
}

export default RelatedProducts