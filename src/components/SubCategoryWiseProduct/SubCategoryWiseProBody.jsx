import React from 'react'
import appData from '../DataSource/appData'
import SubCatWiseSingleProItem from './SubCatWiseSingleProItem'

const SubCategoryWiseProBody = ({categoryParam,subCategoryParam}) => {
    const getCategory=appData.BottomHeader[1].dropDownCategoryItem.find(item=>item.categoryId===categoryParam)
    const getSubCategory=getCategory.subCategory.find(item=>item.subCategoryId===subCategoryParam);
  return (
    <section class="special-offer-product-area single-product-item-area">
        <div class="container">
             {/* <!-- common heading --> */}
             <div class="common-heading common-heading-Oil">
                <h1>{getSubCategory.subCategoryName}</h1>
            </div>
             {/* <!-- common heading --> */}
             <div class="hot-offer-product mt-20">
                <div class="product-main-flex">
                    {/* <!-- single item --> */}
                   <SubCatWiseSingleProItem categoryParam={categoryParam} subCategoryParam={subCategoryParam}/>
                </div>
             </div>
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
  )
}

export default SubCategoryWiseProBody