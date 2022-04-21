import React from "react";

const AuthenticationModalBody = ({ Template, closeModal,closeLoginModalhandler,isOrderNowPressed }) => {
  return (
    <div id="demo-modal" class="modal">
      <div class="modal__content">
        <Template closeModal={closeModal} closeLoginModalhandler={closeLoginModalhandler} isOrderNowPressed={isOrderNowPressed}/>
        <a href class="modal__close" onClick={closeModal}>
          &times;
        </a>
      </div>
    </div>
  );
};

export default AuthenticationModalBody;
