import React from 'react';

const ReviewBodyTemplate = () => {
  return (
    <section class="customar-review-area">
    <div class="container">
        <div class="customar-review-main-flex">
            <div class="tab-content detalis-page-tab-content">
                {/* <!-- product desc review information --> */}
                <div class="product-comments-block-tab">
                    <i class="fa fa-commenting-o" aria-hidden="true"></i>
                    <div class="new_comment_container">
                        <div class="post-cmt-input">
                            <input placeholder="Post Your Review Here" type="text" />
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
                                        <div class="img_round"><img src="/contents/assets/images/cmt.png" alt='img'/></div>
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
                                        <div class="img_round"><img src="/contents/assets/images/notfount.png" alt='img' /></div>
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
                        <div class="cmt-item">
                            <div class="cmt-row">
                                <div class="col ctr_img">
                                    <div class="img_container">
                                        <div class="img_round"><img src="/contents/assets/images/cmt.png" alt='img' /></div>
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
                                        <div class="img_round"><img src="/contents/assets/images/notfount.png" alt='img'/></div>
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
</section>    
  );
};

export default ReviewBodyTemplate;
