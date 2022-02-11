import React from 'react'

const ProductReview = () => {
  return (
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
  )
}

export default ProductReview