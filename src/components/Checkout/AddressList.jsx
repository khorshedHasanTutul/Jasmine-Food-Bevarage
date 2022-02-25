import React, { useContext, useEffect, useState } from "react";
import appData from "../DataSource/appData";
import addressContext from "../Store/address-context";

const AddressList = () => {
  const getBottomActiveAddress = appData.BottomActiveAddress;
  const ctxAddress = useContext(addressContext);
  const [activeAddress, setActiveAddress] = useState(ctxAddress.getActiveType);

  const addressActiveHandler=(item)=>{
    ctxAddress.setActiveType(item)
  }

  useEffect(() => {
    if (activeAddress !== ctxAddress.getActiveType) {
      setActiveAddress(ctxAddress.getActiveType);
    }
  }, [activeAddress, ctxAddress.getActiveType]);

  return (
    <div class="address-info-right-default">
      <h3>Saved Addresses</h3>
      <h2>Select Your Shipping Address</h2>
      {getBottomActiveAddress.map((item) => (
        <div
          class={
            item.type === activeAddress
              ? "address-home-default-single active"
              : "address-home-default-single"
          }
          onClick={addressActiveHandler.bind(null,item)}
        >
          {item.type === activeAddress && (
            <div class="selected-address">
              <p>
                <i class="fa fa-check" aria-hidden="true"></i>Selected
              </p>
            </div>
          )}

          <h3>{item.type}</h3>
          <p>Jak ma (01792855468)</p>
          <p>Mirpur 12,Dhaka City,Dhaka</p>
          <p>House 1005,Road 12,Avenue 3,Mirpur DOSH</p>
        </div>
      ))}

      {/* <div class="address-home-default-single">
        <h3>Office</h3>
        <p>No Address Saved In Office Slot</p>
      </div>

      <div class="address-home-default-single active">
        <div class="selected-address">
          <p>
            <i class="fa fa-check" aria-hidden="true"></i>Selected
          </p>
        </div>
        <h3>Home Town</h3>
        <p>Jak ma (01792855468)</p>
        <p>Mirpur 12,Dhaka City,Dhaka</p>
        <p>House 1005,Road 12,Avenue 3,Mirpur DOSH</p>
      </div> */}
    </div>
  );
};

export default AddressList;
