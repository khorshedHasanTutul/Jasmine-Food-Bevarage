import React from 'react'
import { Link } from 'react-router-dom'
import appData from '../DataSource/appData'
import { urlCategoryRoute, UrlHomeRoute } from '../Services/UrlService'

const SubCategoryWiseProHeader = ({categoryParam,subCategoryParam}) => {
    const getCategory=appData.BottomHeader[1].dropDownCategoryItem.find(item=>item.categoryId===categoryParam)
    const getSubCategory=getCategory.subCategory.find(item=>item.subCategoryId===subCategoryParam)
  return (
    <section class="breadcrumb-main-area">
    <div class="container">
        <nav aria-label="breadcrumb" class="breadcrumb-main">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><Link to={UrlHomeRoute()}>Home</Link></li>
                <li class="breadcrumb-item"><Link to={urlCategoryRoute()+getCategory.categoryId}>{getCategory.categoryName}</Link></li>
                <li class="breadcrumb-item active" aria-current="page">{getSubCategory.subCategoryName}</li>
            </ul>
        </nav>
    </div>
</section>
  )
}

export default SubCategoryWiseProHeader