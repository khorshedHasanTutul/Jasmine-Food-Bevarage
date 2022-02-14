import React from 'react';
import appData from '../DataSource/appData';
import SearchPortal from './SearchPortal';

const SearchProduct = ({searchValue,closeSearchHandler}) => {

    const lowerSearchvalue=searchValue.toLowerCase();
    const allProduct=appData.categoryProducts;
    const filterData=allProduct.filter(item=>item.Nm.toLowerCase().includes(lowerSearchvalue));
    const data=(filterData.length>5)?filterData.slice(0,5):filterData;
    return (
        <SearchPortal data={data} closeSearchHandler={closeSearchHandler} lowerSearchvalue={lowerSearchvalue}/>
    );
};

export default SearchProduct;