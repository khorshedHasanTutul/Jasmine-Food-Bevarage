import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { addressDistrict, GET_ADDRESS, postAddress } from "../../lib/endpoint";
import Select from "../../utilities/select/Select";
import { storeAddressObj } from "../Services/AddressService";
import { http } from "../Services/httpService";
import {
  urlCheckoutRoute,
  urlProfileAddressRoute,
  urlProfileRoute,
} from "../Services/UrlService";
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

const Address = ({ ProceedToOrderHandler }) => {
  const { pathname } = useLocation();
  const ctxAddress = useContext(addressContext);
  const [activeType, setactiveType] = useState(ctxAddress.getActiveType);
  const [addresses, setAddresses] = useState([]);
  const [name, setNameP] = useState("");
  const [phone, setPhoneP] = useState("");
  const [email, setEmailP] = useState("");
  const [address, setAddressP] = useState("");
  const [divisionID, setDivisionId] = useState();
  const [districtId, setDistrictId] = useState();
  const [areaId, setAreaId] = useState();
  const [clicked, setClicked] = useState(false);
  const [activeTypeAddress, setActiveTypeAddress] = useState({});
  let addressObj = Object.assign({}, storeAddressObj);
  const saveAddresshandler = () => {
    addressObj = Object.assign({}, storeAddressObj);
    setClicked(true);
    if (
      addressObj.name.length !== 0 &&
      addressObj.mobile.length !== 0 &&
      addressObj.division.name.length !== 0 &&
      addressObj.district.name.length !== 0 &&
      addressObj.area.name.length !== 0 &&
      addressObj.address.length !== 0
    ) {
      ctxAddress.storeAddressCtx(addressObj);
    }

    http.PUT({
      url: postAddress,
      payload: {
        id: activeTypeAddress?.id,
        phone: phone,
        email: email,
        name: name,
        provinceId: divisionID,
        districtId: districtId,
        upazilaId: areaId,
        remarks: address,
        isPrimary: true,
      },
      before: () => {},
      successed: (res) => {
        console.log(res.data);
        getAddressHttp();
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };

  const getDistrictHandler = (divisionId) => {
    setDivisionId(divisionId);
  };
  const getAreaHandler = (districtID) => {
    setDistrictId(districtID);
  };
  const getSelectAreaHandler = (areaID) => {
    setAreaId(areaID);
  };
  const getAddressHttp = () => {
    http.get({
      url: GET_ADDRESS,
      before: () => {},
      successed: (res) => {
        setAddresses(res.data);
        setActiveTypeAddress(
          res.data.find((item) => item.typeOfAddress === activeType.id)
        );
      },
      failed: () => {},
      always: () => {},
    });
  };

  useEffect(() => {
    getAddressHttp();
  }, []);

  useEffect(() => {
    if (activeType.type !== ctxAddress.getActiveType.type) {
      setactiveType(ctxAddress.getActiveType);
      // getAddressHttp();
      setActiveTypeAddress(
        addresses.find(
          (item) => item.typeOfAddress === ctxAddress.getActiveType.id
        )
      );
    }
  }, [activeType, ctxAddress.getActiveType, addresses]);

  return (
    <div
      id="Tab4"
      class={
        pathname === urlProfileRoute() + urlProfileAddressRoute()
          ? "tab-content checkout-main-tab-content"
          : "tabcontent tab-content checkout-main-tab-content"
      }
    >
      <div class="cart-add-tab-content">
        <div class="checkout-address-information-main">
          <div class="inner-shop-add-flex d-flexx">
            <span>Your contact information</span>
          </div>
          <div class="address-info-inner-flex">
            <div class="address-info-from">
              <form>
                <div class="address-info-inner-content">
                  <NameValidation
                    clicked={clicked}
                    setNameP={setNameP}
                    fixName={activeTypeAddress?.name}
                  />
                  <MobileValidation
                    clicked={clicked}
                    setPhoneP={setPhoneP}
                    fixPhone={activeTypeAddress?.phone}
                  />
                  <EmailValidation
                    setEmailP={setEmailP}
                    fixEmail={activeTypeAddress?.email}
                  />

                  <div className="grid-3 mb-16 g-8">
                    <Divisionvalidation
                      clicked={clicked}
                      getDistrictHandler={getDistrictHandler}
                      fixDivision={activeTypeAddress?.province}
                      setDivisionId={setDivisionId}
                    />
                    <DistrictValidation
                      clicked={clicked}
                      divisionID={divisionID}
                      getAreaHandler={getAreaHandler}
                      fixDistrict={activeTypeAddress?.district}
                      setDistrictId={setDistrictId}
                    />
                    <AreaValidation
                      clicked={clicked}
                      districtId={districtId}
                      getSelectAreaHandler={getSelectAreaHandler}
                      fixArea={activeTypeAddress?.upazila}
                      setAreaId={setAreaId}
                    />
                  </div>
                  <AddressValidation
                    clicked={clicked}
                    setAddressP={setAddressP}
                    activeTypeAddress={activeTypeAddress}
                    fixArea={activeTypeAddress?.remarks}
                  />
                  <BottomActiveAddress
                    saveAddresshandler={saveAddresshandler}
                  />
                </div>
              </form>
            </div>

            <AddressList addresses={addresses} />
          </div>
        </div>
        {pathname === urlCheckoutRoute() && (
          <div class="cart_navigation">
            <Link class="prev-btn" to="/">
              <i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i>{" "}
              Continue shopping
            </Link>
            <a href class="next-btn" onClick={ProceedToOrderHandler}>
              {" "}
              Proceed to order{" "}
              <i
                class="fa fa-angle-right check-ang-right"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Address;
