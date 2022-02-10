import React from 'react';
import { Link } from 'react-router-dom';
import appData from '../DataSource/appData';
import { UrlHomeRoute } from '../Services/UrlService';

const CategoryWiseProductHeader = ({categoryParam}) => {
  const getCategoryName=appData.BottomHeader[1].dropDownCategoryItem.find(item=>item.categoryId===categoryParam)
  return (
    <section class="breadcrumb-main-area">
    <div class="container">
        <nav aria-label="breadcrumb" class="breadcrumb-main">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><Link to={UrlHomeRoute()}>Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">{getCategoryName.categoryName}</li>
            </ul>
        </nav>
    </div>
</section>
  );
};

export default CategoryWiseProductHeader;
