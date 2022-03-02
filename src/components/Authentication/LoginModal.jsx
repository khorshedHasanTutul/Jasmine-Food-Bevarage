import React, { useState } from "react";
import AuthenticationModalBody from "./AuthenticationModalBody";
import ForgotModal from "./ForgotModal";
import RegistrationModal from "./RegistrationModal";

const LoginModal = ({closeModal}) => {
  const [forgotPopUpModal, setForgotPopUpModal] = useState(false);
  const [registerPopUpModal , setregisterPopUpModal]=useState(false)

  const forgotModalHandler = () => {
    setForgotPopUpModal(true);
  };
  const registerModalHandler=()=>{
    setregisterPopUpModal(true);
  }
  const closeModalHandler=()=>{
    closeModal();
    setForgotPopUpModal(prevState=>!prevState);
  }
  const closeRegistrationModalHandler=()=>{
    closeModal();
    setregisterPopUpModal(prevState=>!prevState);
  }

  return (
    <>
      <div class="login-main-area">
        <div class="login-info-from">
          <form>
            <h2>LogIn to Jasmine</h2>
            <i class="fa fa-spinner" aria-hidden="true"></i>
            <div class="login-info-inner-content">
              <div class="custom-input">
                <label for="mobile">Mobile Number</label>
                <input type="text" name="" id="mobile" required="" />
              </div>
              <div class="custom-input">
                <label for="password">Password</label>
                <input type="password" name="" id="password" required="" />
              </div>
              <a
                class="forgot-pass"
                href
                onClick={forgotModalHandler}
              >
                Forgot Password?
              </a>
              <div class="login-submit">
                <input type="submit" value="Login" />
              </div>
            </div>
          </form>
        </div>
        <div class="dont-have-account">
          <p>Don't have account ?</p>
          <a href onClick={registerModalHandler}>Create Account</a>
        </div>
      </div>
      {
          forgotPopUpModal&& <AuthenticationModalBody  Template={ForgotModal} closeModal={closeModalHandler}/>
      }
      {
          registerPopUpModal&& <AuthenticationModalBody Template={RegistrationModal} closeModal={closeRegistrationModalHandler} />
      }
    </>
  );
};

export default LoginModal;
