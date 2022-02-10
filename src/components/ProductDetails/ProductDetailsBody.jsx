import React from 'react'

const ProductDetailsBody = () => {
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
                                          <ul class="splide__list">
                                              <li class="splide__slide product_gallery_splide__slide">
                                                  <div class="product_gallery_splide__slide ">
                                                      <a href="#">
                                                          <img src="/contents/assets/images/product/p1.jpg" alt="sp1.jpg" />
                                                      </a>
                                                  </div>   
                                              </li>
                                              <li class="splide__slide product_gallery_splide__slide">
                                                <div class="product_gallery_splide__slide ">
                                                    <a href="#">
                                                        <img src="/contents/assets/images/product/p2.jpg" alt="sp1.jpg" />
                                                    </a>
                                                </div>   
                                              </li>
                                              <li class="splide__slide product_gallery_splide__slide">
                                                <div class="product_gallery_splide__slide ">
                                                    <a href="#">
                                                        <img src="/contents/assets/images/product/p3.jpg" alt="sp1.jpg" />
                                                    </a>
                                                </div>   
                                               </li>
                                               <li class="splide__slide product_gallery_splide__slide">
                                                <div class="product_gallery_splide__slide ">
                                                    <a href="#">
                                                        <img src="/contents/assets/images/product/p4.jpg" alt="sp1.jpg" />
                                                    </a>
                                                </div>   
                                                </li>
                                                <li class="splide__slide product_gallery_splide__slide">
                                                    <div class="product_gallery_splide__slide ">
                                                        <a href="#">
                                                            <img src="/contents/assets/images/product/p5.jpg" alt="sp1.jpg" />
                                                        </a>
                                                    </div>   
                                                </li>
                                          </ul>
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
                                <button id="defaultOpen" class="tablinks" onclick="tabOpener(event, 'Tab1')">Product Details</button>
                                <button class="tablinks" onclick="tabOpener(event, 'Tab2')">review</button>
                            </nav>

                            <div class="tabbed niiceeTabContent">
                                <div id="Tab1" class="tabcontent tab-content detalis-page-tab-content">
                                    {/* <!-- product desc review information --> */}
                                    <div class="product-d-tab-content">
                                        <p>Kasundi is a protein-rich, spicy relish made from mustard seeds. A condiment  and a taste-enhancer. Kasundi brings out the best taste in whatever it is paired up with: seasonal green fruits, snacks such as “shingara” & “pakora”. A recent use of this condiment is in the preparation of “Shorshe Ilish”- famous traditional recipe in the Bengali cuisine & even as salad dressings. A dash of Radhuni Kasundi with any food will leave your taste buds tingling with joy.</p>
                                    </div>
                                    {/* <!-- product desc review information --> */}
                                </div>
      
                                <div  id="Tab2" class="tabcontent tab-content detalis-page-tab-content">
                                    {/* <!-- product desc review information --> */}
                                    <div class="product-comments-block-tab">
                                        <div class="new_comment_container">
                                            <div class="post-cmt-input">
                                                <input placeholder="Post Your Review Here" type="text"/>
                                            </div>
                                            <div class="post-cmt-btn">
                                                <button type="submit">Post</button>
                                            </div>
                                        </div>
                                        <p></p>
                                        <div class="comment_container">
                                            {/* <!-- single comment item --> */}
                                            <div class="cmt-item">
                                                <div class="cmt-row">
                                                    <div class="col ctr_img">
                                                        <div class="img_container">
                                                            <div class="img_round"><img src="/contents/assets/images/cmt.png" /></div>
                                                        </div>
                                                    </div>
                                                    <div class="col commnet-dettail_container">
                                                        <div class="commnet-dettail">
                                                            <div>
                                                                <a><strong>Md. Sabbir Rahman</strong></a>
                                                                <div></div>
                                                            </div>
                                                            <div class="commnet-content">Trusted Online Shopping Site in Bangladesh</div>
                                                        </div>
                                                        <div class="comment_event">
                                                            <a class="comment_time col"><em>21, Apr-2021</em></a><a class="btn_like"> Like </a><a class="btn_unlike"> Unlike </a><a class="btn_reply"> Reply </a>
                                                        </div>
                                                        <div class="comment_reply_container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- single comment item --> */}
                                            <div class="cmt-item">
                                                <div class="cmt-row">
                                                    <div class="col ctr_img">
                                                        <div class="img_container">
                                                            <div class="img_round"><img src="/contents/assets/images/notfount.png" /></div>
                                                        </div>
                                                    </div>
                                                    <div class="col commnet-dettail_container">
                                                        <div class="commnet-dettail">
                                                            <div>
                                                                <a><strong>Md. Sabbir Rahman</strong></a>
                                                                <div></div>
                                                            </div>
                                                            <div class="commnet-content">A class medicine store in Bangladesh........ Best wishes for LazzPharma</div>
                                                        </div>
                                                        <div class="comment_event">
                                                            <a class="comment_time col"><em>21, Apr-2021</em></a><a class="btn_like"> Like </a><a class="btn_unlike"> Unlike </a><a class="btn_reply"> Reply </a>
                                                        </div>
                                                        <div class="comment_reply_container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    {/* <!-- product desc review information --> */}
                                </div>
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