import React from 'react';
import { Link } from 'react-router-dom';
import appData from '../DataSource/appData';
import { urlCategoryRoute, urlSubCategoryRoute } from '../Services/UrlService';
import BottomLinks from './BottomLinks/BottomLinks';

const BottomHeader = () => {
    const getBottomHeaderItems=appData.BottomHeader;
  return (
    <div class="header-main-menu">
    <button class="mobile-desk openbtn" onclick="openNav()">&#9776;</button>
    <div id="mySidepanel" class="menu sidepanel">
        <a href="javascript:void(0)" class="mobile-desk closebtn" onclick="closeNav()">&times;</a>
        <ul class="d-flex al-center">
            <li class="prent-dropdown">
                <div class="inner-flex d-flex al-center js-center">
                    <a href>{getBottomHeaderItems[1].dropDownCategoryName}</a>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
             <ul class="child-dropdown">
                 {
                     getBottomHeaderItems[1].dropDownCategoryItem.map((item,index)=>(
                        <li>
                        <div class="inner-flex d-flex al-center js-center">
                            <Link to={urlCategoryRoute()+item.categoryId}>{item.categoryName} </Link>
                            <i class="fa fa-angle-right sub-menu-arrow-right" aria-hidden="true"></i>
                        </div>
                    <ul class="child-dropdown child-dropdown-inner">
                        {
                            item.subCategory.map(item2=>(
                                <li><Link to={urlSubCategoryRoute()+item.categoryId+'/'+item2.subCategoryId}>{item2.subCategoryName}</Link></li>
                            ))
                        }
                    </ul>
                    </li>
                     ))
                 }
             </ul>   
            </li>
            <BottomLinks getNavLinksItem={getBottomHeaderItems[0].navLink}/>
        </ul>
    </div>
</div>
  );
};

export default BottomHeader;
