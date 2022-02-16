import React from 'react';
import SpecialOfferProItems from './SpecialOfferProItems';

const SpecialOfferProductArea = () => {
  return (
    <section class="special-offer-product-area">
    <div class="container">
         <div class="common-heading">
            <h1>Hot Offers!</h1>
        </div>
         <SpecialOfferProItems />
         <nav class="pagenation-for-web" aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span class="sr-only">Previous</span>
                </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a> 
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span class="sr-only">Next</span>
                </a>
                </li>
            </ul>
        </nav>
    </div>
</section>
  );
};

export default SpecialOfferProductArea;
