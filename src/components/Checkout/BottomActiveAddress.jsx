import React, { useContext, useEffect, useState } from "react";
import appData from "../DataSource/appData";
import addressContext from "../Store/address-context";

const BottomActiveAddress = ({ saveAddresshandler }) => {
  const ctxAddress = useContext(addressContext);
  const getAddressList = appData.BottomActiveAddress;
  const [activeType, setactiveType] = useState(ctxAddress.getActiveType);

  const activeTypeHandler = (item) => {
    ctxAddress.setActiveType(item);
  };
  
  useEffect(() => {
    if (activeType !== ctxAddress.getActiveType) {
      setactiveType(ctxAddress.getActiveType);
    }
  }, [activeType, ctxAddress.getActiveType]);

  return (
    <div class="all-address-save-btn">
      <div class="chosse-your-fvt-btn">
        <ul>
          {getAddressList.map((item) => (
            <li
              class={item.type === activeType && "active"}
              onClick={activeTypeHandler.bind(null, item)}
            >
              <a href>{item.type}</a>
            </li>
          ))}

          <li class="default-set">
            <a href onClick={saveAddresshandler}>
              Save Address
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- <div class="chosse-another-address">
                                        <a href="#">Save Address</a>
                                    </div> --> */}
    </div>
  );
};

export default BottomActiveAddress;
