import React, { useEffect, useRef, useState } from 'react'
import Slider from '../../utilities/slider/Slider'
import appData from '../DataSource/appData'
import ProDetailsSliderSingleItem from './ProDetailsSliderSingleItem'
import ProductDescription from './ProductDescription'
import ProductReview from './ProductReview'

const ProductDetailsBody = () => {
    const ref = useRef(null)
    const [isActive, setisActive] = useState(false)
    const toggleHandler=()=>{
        setisActive(prevState => !prevState)
    }
    useEffect(() => {
        if(!isActive){
            ref.current.classList.add('active')
        }
        else{
            ref.current.classList.remove('active')
        }
    }, [isActive])
    
    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 500,
        speed: 500,
        pauseOnHover:true,
        perPage:4,
        width:'100%'
    }
    const data=appData.categoryProducts.filter(item=>item.category_id===2)
  return (
    <section class="product-details-area">
    <div class="container">
        <div class="product-details-main">
            <div class="product-details-inner-flex">
                {/* <!-- product-details-left --> */}
                <div class="product-details-left">
                     {/* <!-- product item details --> */}
                    <div class="inner-product-details-flex">
                        <div class="product-d-left-img">
                            <div class="det-img-padding">
                                <img src="/contents/assets/images/product/p1.jpg" alt="img" />
                                <div class="product-dec-overlay">
                                    <img src="/contents/assets/images/product/p1.jpg" alt="" />
                                </div>
                            </div>
                            <div class="product-gallery-hover">
                                <div class="splide product-gallery-splide">
                                    <div class="splide__track">
                                          <Slider Template={ProDetailsSliderSingleItem} options={options} data={data}/>
                                    </div>
                                 </div>
                             </div>
                        </div>
                        <div class="product-desc-right-content">
                            <div class="catagory-overly-main-bg">
                                <div class="catagory-product-overly">
                                    <h4>Britney Spears Electric Fantasy Eau De Toilette Spray 100ml</h4>
                                    <p>Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment  and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”.</p>
                                </div>
                                <div class="avablle-in-product">
                                    <h3>Available In</h3>
                                    <span>265 ml</span>
                                </div>
                                {/* <!-- <div class="product-review-main">
                                    <a href="#">No Review</a>
                                </div> --> */}
                                <div class="basket-add">
                                    <span class="item__price item__price--now">৳1556.00</span>
                                    <span class="price product-price"><del class="cross_price">৳ 300</del></span>
                                </div>
                                <div class="pd-brand-ctg">
                                    <ul>
                                        <li>Category :<a href="#"> Spices</a></li>
                                        <li>Brand :<a href="#"> Radhuni</a></li>
                                    </ul>
                                </div>

                                <div class="pro-add-wish-flex">
                                    <div class="add-to-cart d-flex al-center j-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg>
                                        <span>Add to Cart</span>
                                    </div>
                                  <div class="wishlist-btn">
                                    <div class="add-tocart-overlay">
                                        <div class="inner-card-flex">
                                            <div class="qty-holder2">
                                                <span onclick="inc()" class="qty-dec-btn2" title="Dec">-</span>
                                                <aside>2 Item Add</aside>
                                                <span onclick="dec()" class="qty-inc-btn2" title="Inc">+</span>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- product item details --> */}
                    {/* <!-- product desc review information --> */}
                    <div class="product-desc-review-information-main">
                        <div id="niiceeTab" class="page-content">
                            {/* <!-- Tab links --> */}
                            <nav class="niiceeTabBtn">
                                <button id="defaultOpen" ref={ref} class="tablinks" onClick={toggleHandler}>Product Details</button>
                                <button class="tablinks"  onClick={toggleHandler}>review</button>
                            </nav>

                            <div class="tabbed niiceeTabContent">
                                {
                                    (!isActive)&& <ProductDescription />
                                }
                                {
                                    (isActive) &&  <ProductReview />
                                }
      
                               
                            </div>
                        </div>
                    </div>
                    {/* <!-- product desc review information --> */}
                </div>
                {/* <!-- product-details-right --> */}
                <div class="product-details-right">
                    {/* <!-- RELATED PRODUCTS --> */}
                    <div class="related-product-main">
                        <h4>RELATED PRODUCTS</h4>
                        {/* <!-- single item --> */}
                        <div class="recent-pro-del-flex">
                            <a href="#">
                                <div class="product-del-s-img">
                                    <img src="/contents/assets/images/product/p1.jpg" alt="img" />
                                </div>
                                <div class="product-del-s-content">
                                    <div class="product-del-s-title">
                                        <h4>A companion for extra sleeping</h4>
                                    </div>
                                    <div class="product-del-s-blog-desc">
                                        <div class="basket-add">
                                            <span class="item__price item__price--now">৳1556.00</span>
                                        </div>
                                    </div>
                                </div>
                             </a>
                        </div>
                        <div class="recent-pro-del-flex">
                            <a href="#">
                                <div class="product-del-s-img">
                                    <img src="/contents/assets/images/product/p2.jpg" alt="img" />
                                </div>
                                <div class="product-del-s-content">
                                    <div class="product-del-s-title">
                                        <h4>A companion for extra sleeping</h4>
                                    </div>
                                    <div class="product-del-s-blog-desc">
                                        <div class="basket-add">
                                            <span class="item__price item__price--now">৳1556.00</span>
                                        </div>
                                    </div>
                                </div>
                             </a>
                        </div>
                        <div class="recent-pro-del-flex">
                            <a href="#">
                                <div class="product-del-s-img">
                                    <img src="/contents/assets/images/product/p3.jpg" alt="img" />
                                </div>
                                <div class="product-del-s-content">
                                    <div class="product-del-s-title">
                                        <h4>A companion for extra sleeping</h4>
                                    </div>
                                    <div class="product-del-s-blog-desc">
                                        <div class="basket-add">
                                            <span class="item__price item__price--now">৳1556.00</span>
                                        </div>
                                    </div>
                                </div>
                             </a>
                        </div>
                        <div class="recent-pro-del-flex">
                            <a href="#">
                                <div class="product-del-s-img">
                                    <img src="/contents/assets/images/product/p4.jpg" alt="img" />
                                </div>
                                <div class="product-del-s-content">
                                    <div class="product-del-s-title">
                                        <h4>A companion for extra sleeping</h4>
                                    </div>
                                    <div class="product-del-s-blog-desc">
                                        <div class="basket-add">
                                            <span class="item__price item__price--now">৳1556.00</span>
                                        </div>
                                    </div>
                                </div>
                             </a>
                        </div>
                        <div class="recent-pro-del-flex">
                            <a href="#">
                                <div class="product-del-s-img">
                                    <img src="/contents/assets/images/product/p6.jpg" alt="img" />
                                </div>
                                <div class="product-del-s-content">
                                    <div class="product-del-s-title">
                                        <h4>A companion for extra sleeping</h4>
                                    </div>
                                    <div class="product-del-s-blog-desc">
                                        <div class="basket-add">
                                            <span class="item__price item__price--now">৳1556.00</span>
                                        </div>
                                    </div>
                                </div>
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>   
  )
}

export default ProductDetailsBody