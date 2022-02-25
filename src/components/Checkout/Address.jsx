import React, { useState } from "react";
import AddressList from "./AddressList";
import AddressValidation from "./AddressValidation/AddressValidation";
import AreaValidation from "./AddressValidation/AreaValidation";
import DistrictValidation from "./AddressValidation/DistrictValidation";
import Divisionvalidation from "./AddressValidation/Divisionvalidation";
import EmailValidation from "./AddressValidation/EmailValidation";
import MobileValidation from "./AddressValidation/MobileValidation";
import NameValidation from "./AddressValidation/NameValidation";
import BottomActiveAddress from "./BottomActiveAddress";

const Address = () => {
  const [clicked, setClicked] = useState(false);
  const saveAddresshandler = () => {
    setClicked(true);
  };

  return (
    <div id="Tab4" class="tabcontent tab-content checkout-main-tab-content">
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
                    <Divisionvalidation clicked={clicked}/>
                    <DistrictValidation clicked={clicked}/>
                    <AreaValidation clicked={clicked}/>    
                  </div>
                  <AddressValidation clicked={clicked}/>
                  <BottomActiveAddress saveAddresshandler={saveAddresshandler} />
                </div>
              </form>
            </div>

            <AddressList />
          </div>
        </div>
        <div class="cart_navigation">
          <a class="prev-btn" href="/">
            <i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i>{" "}
            Continue shopping
          </a>
          <a class="next-btn">
            {" "}
            Proceed to order{" "}
            <i class="fa fa-angle-right check-ang-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Address;
