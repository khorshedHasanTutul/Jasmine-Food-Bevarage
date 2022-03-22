import React, { useState, useEffect } from "react";
import AuthenticationModalBody from "./AuthenticationModalBody";
import ForgotModal from "./ForgotModal";
import RegistrationModal from "./RegistrationModal";

const LoginModal = ({ closeModal }) => {

  ///validation state defined
  const [phone, setPhone] = useState("");
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [clicked, setClicked] = useState(false);
  ///end
  

  const [forgotPopUpModal, setForgotPopUpModal] = useState(false);
  const [registerPopUpModal, setregisterPopUpModal] = useState(false);

  const phoneChangeHandler = ({ target }) => {
    setPhone(target.value);
  };
  const phoneTouchedHandler = () => {
    setPhoneIsTouched(true);
  };

  const passwordChangeHandler = ({ target }) => {
    setPassword(target.value);
  };
  const passwordTouchedHandler = () => {
    setPasswordIsTouched(true);
  };

  const submitButtonHandler = (evt) => {
    evt.preventDefault();
    setClicked(true);
    ///success codes go here
  };

  //#region modal functionality Handler
  const forgotModalHandler = () => {
    setForgotPopUpModal((prevState) => !prevState);
  };
  const registerModalHandler = () => {
    setregisterPopUpModal(true);
  };
  const closeForgotModalHandler = () => {
    closeModal();
    setForgotPopUpModal((prevState) => !prevState);
  };
  const closeRegistrationModalHandler = () => {
    closeModal();
    setregisterPopUpModal((prevState) => !prevState);
  };
  //#endregion

  useEffect(() => {
    if (clicked) {
      if (
        (phoneIsTouched && phone.length === 0) ||
        (!phoneIsTouched && phone.length === 0)
      ) {
        setPhoneIsValid(true);
      } else setPhoneIsValid(false);

      if (
        (passwordIsTouched && password.length === 0) ||
        (!passwordIsTouched && password.length === 0)
      ) {
        setPasswordIsValid(true);
      } else setPasswordIsValid(false);
    }
  }, [
    clicked,
    phone.length,
    phoneIsTouched,
    password.length,
    passwordIsTouched,
  ]);

  return (
    <>
      {!forgotPopUpModal && !registerPopUpModal && (
        <div class="login-main-area">
          <div class="login-info-from">
            <form>
              <h2>LogIn to Jasmine</h2>
              <i class="fa fa-spinner" aria-hidden="true"></i>
              <div class="login-info-inner-content">
                <div class="custom-input">
                  <label for="mobile">Mobile Number</label>
                  <input
                    type="text"
                    name=""
                    id="mobile"
                    required
                    value={phone}
                    onChange={phoneChangeHandler}
                    onBlur={phoneTouchedHandler}
                  />
                  {phoneIsValid && (
                    <div class="alert alert-error">Phone is required.</div>
                  )}
                  {phoneIsTouched && phone.length === 0 && !phoneIsValid && (
                    <div class="alert alert-error">Phone is required.</div>
                  )}
                </div>
                <div class="custom-input">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name=""
                    id="password"
                    required
                    onChange={passwordChangeHandler}
                    onBlur={passwordTouchedHandler}
                  />
                  {passwordIsValid && (
                    <div class="alert alert-error">Password is required.</div>
                  )}
                  {passwordIsTouched &&
                    password.length === 0 &&
                    !passwordIsValid && (
                      <div class="alert alert-error">Password is required.</div>
                    )}
                </div>
                <a class="forgot-pass" href onClick={forgotModalHandler}>
                  Forgot Password?
                </a>
                <div class="login-submit" onClick={submitButtonHandler}>
                  <input type="submit" value="Login" />
                </div>
              </div>
            </form>
          </div>
          <div class="dont-have-account">
            <p>Don't have account ?</p>
            <a href onClick={registerModalHandler}>
              Create Account
            </a>
          </div>
        </div>
      )}

      {forgotPopUpModal && (
        <AuthenticationModalBody
          Template={ForgotModal}
          closeModal={closeForgotModalHandler}
          closeLoginModalhandler={closeModal}
        />
      )}
      {registerPopUpModal && (
        <AuthenticationModalBody
          Template={RegistrationModal}
          closeModal={closeRegistrationModalHandler}
          closeLoginModalhandler={closeModal}
        />
      )}
    </>
  );
};

export default LoginModal;
