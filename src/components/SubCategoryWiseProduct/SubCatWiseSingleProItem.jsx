import React from 'react'
import { Link } from 'react-router-dom'
import appData from '../DataSource/appData'
import { urlProductDetails } from '../Services/UrlService'

const SubCatWiseSingleProItem = ({categoryParam,subCategoryParam}) => {
    const getSubCategoryProducts=appData.categoryProducts.filter(item=>item.category_id===categoryParam && item.subCategory_id===subCategoryParam)
  return (
    <>
      {
         
        getSubCategoryProducts.map(item=>(
            <div class="inner-product-main-flex">
                  <Link to={urlProductDetails()+item.Id}>
                  {
                        (item.Ds>0)&&
                        <div class="group-price-drag">
                        <span class="product-new-drag">{item.Ds>0 ? item.Ds:''}{item.Ds>0 ? '%':null}</span>
                        </div>
                  }
                  <div class="product-top-area">
                  <div class="product-img">
                    <img src={item.image} alt="product" />
                  </div>
                  <div class="product-content">
                    <h3>{item.Nm}</h3>
                    <span>{item.St}</span>
                    <div class="basket-add">
                      {item.Ds === 0 && (
                        <span class="item__price item__price--now">৳{item.MRP}</span>
                      )}

                      {item.Ds > 0 && (
                        <>
                          <span class="item__price item__price--now">
                            ৳{(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
                          </span>
                          <span class="price product-price">
                            <del class="cross_price"> ৳{item.MRP}</del>
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                  <div class="add-to-cart d-flex al-center j-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg>
                      <span>Add to Cart</span>
                  </div>
              </Link>
              </div>
        ))
      
      }
      </>
  )
}

export default SubCatWiseSingleProItem