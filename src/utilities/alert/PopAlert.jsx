import React from "react";

const PopAlert = ({ Template, closeModal,content }) => {
  return (
    <div class="order-success-modal">
      <div id="demo-modal5" class="modal">
        <div class="modal__content">
          <div class="login-main-area">
            <div class="login-info-from">
                {
                    (Template)&&
                    <Template></Template>
                }
             
              {
                  (content)&&<>{content}</>
              }
            </div>
          </div>
          <a href onClick={closeModal} class="modal__close">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopAlert;
