var data = window.APP_DATA;
//getMainCategories
export const getMainCategories = data[0];

//get dropdownmainCategories
export const getDropDownMainCategories = () => {
  return getMainCategories.map((item, index) => item[2]);
};

//get Banners
export const getBannersTemplate = data[1];
//get object banners Data
export const getBannerObjectFrom = (item) => {
  const data = {
    Id: item[0],
    Rank: item[1],
    Size: item[2],
    Image: item[3],
    Link: item[4],
  };
  return data;
};

//Notice
// export const getNotice = data[2];

//get Display Products
export const getDisplayCategories = data[2];

//get object from of display Data
export const getObjectFormatofData = (item) => {
  const getDisplayProductsInfo = {
    category_id: item[0],
    categoryName: item[1],
    // rank: item[2],
    products: item[2],
  };
  return getDisplayProductsInfo;
};

//get Display Tranding Products
export const getTrandingDisplayProducts = data[4];

//Product Information
export const returnDataAsObjectProperties = (item) => {
  const productInfo = {
    id: item[0],
    displayName: item[1],
    packSize: item[2],
    imageURL: item[3],
    currentPrice: item[4],
    originalPrice: item[5],
    discountedPrice: item[6],
    discountedPercentage: item[7],
    stockUnit: item[8],
  };
  return productInfo;
};
