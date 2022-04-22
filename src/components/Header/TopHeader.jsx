import React from 'react';
import appData from '../DataSource/appData';
import { getDisplayCategories } from '../Services/DataService';

const TopHeader = () => {
    const getTopHeaderData=appData.TopHeader;
    console.log({getDisplayCategories});
    
  return (
    <div class="new-header">
        <div class="container">
            <div class="header-top-flex d-flexx">
                <div class="header-top-left">
                    <ul class="d-flex al-center">
                        <li>
                            <a href={'mailto:'+getTopHeaderData[0].mail }><i class="fa fa-envelope-o" aria-hidden="true"></i>{getTopHeaderData[0].mail}</a>
                        </li>
                        <li>
                            <a href={'tel:'+getTopHeaderData[0].phone}><i class="fa mobile-ex fa-mobile" aria-hidden="true"></i><span class="ex-number">+88 {getTopHeaderData[0].phone}</span></a>
                        </li>
                    </ul>
                </div>
                <div class="header-top-right">
                    <ul class="d-flex">
                        <li><a href>{getTopHeaderData[0].message}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TopHeader;
