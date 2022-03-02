import React from "react";
import appData from "../DataSource/appData";

const PhoneCallAlert = ({closeModal}) => {
    const getBottomAddressMobile=appData.Footer;
  return (
    <div class="user-info-phone">
            <div id="demo-modalxx" class="modal">
                <div class="modal__content">
                    <div class="login-main-area">
                        {/* <!-- <h2>Call for Order</h2> --> */}
                        <div class="login-info-from">
                            <p>Please call to bellow number to make an order!!!</p>
                            <a href={'tel:'+getBottomAddressMobile[0].Mobile}>{getBottomAddressMobile[0].Mobile}</a>
                        </div>
                    </div>
                    <a href class="modal__close" onClick={closeModal}>&times;</a>
                </div>
            </div>
        </div>
  );
};

export default PhoneCallAlert;
