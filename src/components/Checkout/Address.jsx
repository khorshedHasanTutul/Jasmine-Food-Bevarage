import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { storeAddressObj } from "../Services/AddressService";
import { urlCheckoutRoute, urlProfileAddressRoute, urlProfileRoute } from "../Services/UrlService";
import addressContext from "../Store/address-context";
import AddressList from "./AddressList";
import AddressValidation from "./AddressValidation/AddressValidation";
import AreaValidation from "./AddressValidation/AreaValidation";
import DistrictValidation from "./AddressValidation/DistrictValidation";
import Divisionvalidation from "./AddressValidation/Divisionvalidation";
import EmailValidation from "./AddressValidation/EmailValidation";
import MobileValidation from "./AddressValidation/MobileValidation";
import NameValidation from "./AddressValidation/NameValidation";
import BottomActiveAddress from "./BottomActiveAddress";

const Address = ({ProceedToOrderHandler}) => {
  const {pathname}=useLocation()
  const ctxAddress = useContext(addressContext);
  const [clicked, setClicked] = useState(false);
  let addressObj = Object.assign({}, storeAddressObj);

  const saveAddresshandler = () => {
    addressObj = Object.assign({}, storeAddressObj);
    setClicked(true);
    if (
      addressObj.name.length !== 0 &&
      addressObj.mobile.length !== 0 &&
      addressObj.division.length !== 0 &&
      addressObj.district.length !== 0 &&
      addressObj.area.length !== 0 &&
      addressObj.address.length !== 0
    ) {
      ctxAddress.storeAddressCtx(addressObj);
    }
  };

  return (
    <div id="Tab4" class={(pathname===urlProfileRoute()+urlProfileAddressRoute())?'tab-content checkout-main-tab-content':"tabcontent tab-content checkout-main-tab-content"} >
      <div class="cart-add-tab-content">
        <div class="checkout-address-information-main">
          <div class="inner-shop-add-flex d-flexx">
            <span>Your contact information</span>
          </div>
          <div class="address-info-inner-flex">
            <div class="address-info-from">
              <form>
                <div class="address-info-inner-content">
                  <NameValidation clicked={clicked} />
                  <MobileValidation clicked={clicked} />
                  <EmailValidation />
                  <div class="address-inner-select-item">
                    <Divisionvalidation clicked={clicked} />
                    <DistrictValidation clicked={clicked} />
                    <AreaValidation clicked={clicked} />
                  </div>
                  <AddressValidation clicked={clicked} />
                  <BottomActiveAddress
                    saveAddresshandler={saveAddresshandler}
                  />
                </div>
              </form>
            </div>

            <AddressList />
          </div>
        </div>
        {
          (pathname===urlCheckoutRoute())&&
          <div class="cart_navigation">
          <Link class="prev-btn" to="/">
            <i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i>{" "}
            Continue shopping
          </Link>
          <a href class="next-btn" onClick={ProceedToOrderHandler}>
            {" "}
            Proceed to order{" "}
            <i class="fa fa-angle-right check-ang-right" aria-hidden="true"></i>
          </a>
        </div>
        }
        
      </div>
    </div>
  );
};

export default Address;
