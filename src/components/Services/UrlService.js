// navlink Route start
const UrlHomeRoute = () => "/";
const UrlOfferRoute = () => "/offer";
const UrlAboutRoute = () => "/about";
const UrlReviewRoute = () => "/review";
const UrlCarrerRoute = () => "/carrer";
const UrlContactRoute = () => "/contact";
//navlink Route end

// Category Wise Product Route start
export const urlCategoryRoute = () => "/category/";
export const urlSubCategoryRoute = () => "/subcategory/";
// Category Wise Product Route end

//Product Details Route
export const urlProductDetails = () => "/product/details/";
//Bottom Page Routes
export const urlReturnPolicyRoute = () => "/return/policy";
//Bottom Page Routes
const urlPrivacyPolicyRoute = () => "/return/PrivacyPolicy";
//Bottom Page Routes
const urlTermsConditionsRoute = () => "/return/TermsConditions";
//checkout Route
export const urlCheckoutRoute = () => "/checkout";
//notification Route
export const urlNotificationRoute= ()=> "/notification"

//profile Dashboard Route
export const urlProfileRoute = () => "/profile";
//profile order route
export const urlOrderRoute = () => "/order";
//Profile all Order Routes
export const urlAllOrderRoutes = () => "/order/all";
//profile order confirmed orders
export const urlConfirmedRoutes = () => "/order/confirmed";
// profile order processing orders
export const urlOrderProcessing = () => "/order/processing";
//profile order delivaring orders
export const urlOrderDelivaringRoute = () => "/order/delivaring";
//profile order canceled
export const urlOrderCancelingRoute = () => "/order/cancel";
//profile order details route
export const urlOrderDetailsRoute = () => "/order/details/"
//profile edit address
export const urlProfileAddressRoute=()=>"/edit/address";
//profile special offer
export const urlSpecialOfferRoute=()=>"/special/offer"
// profile edit 
export const urlProfileEditRoute=()=>"/edit"
// profile submit complain
export const urlProfileComplain=()=>"/complain"




//Not found 
export const urlNotFoundRoute=()=>"/*"

export {
  UrlHomeRoute,
  UrlOfferRoute,
  UrlAboutRoute,
  UrlReviewRoute,
  UrlCarrerRoute,
  UrlContactRoute,
  urlPrivacyPolicyRoute,
  urlTermsConditionsRoute,
};
