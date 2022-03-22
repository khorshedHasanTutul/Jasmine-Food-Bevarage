import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import AuthenticationModalBody from "./AuthenticationModalBody";
import OtpCodeModal from "./OtpCodeModal";

const ForgotModal = ({ closeModal, closeLoginModalhandler }) => {
  ///validation state defined
  const [phone, setPhone] = useState("");
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [retypePassword, setRetypePassword] = useState("");
  const [retypePasswordIsTouched, setRetypePasswordIsTouched] = useState(false);
  const [retypePasswordIsValid, setRetypePasswordIsValid] = useState(false);

  const [clicked, setClicked] = useState(false);
  ///end
  const [otpCodeModal, setOtpCodeModal] = useState(false);

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

  const retypePasswordChangeHandler = ({ target }) => {
    setRetypePassword(target.value);
  };
  const retypePasswordTouchedHandler = () => {
    setRetypePasswordIsTouched(true);
  };

  //#region modal handlers
  const loginModalHandler = () => {
    closeModal();
    closeLoginModalhandler();
  };

  const closeOtpModalHandler = () => {
    closeModal();
    setOtpCodeModal((prevState) => !prevState);
  };

  const submitNextButtonHandler = (evt) => {
    evt.preventDefault();
    setClicked(true);
    ///success codes go here
    
    //if success all condition then state update bellow code
    setOtpCodeModal(true);
  };
  //#endregion end heres

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

      if (
        (retypePasswordIsTouched && retypePassword.length === 0) ||
        (!retypePasswordIsTouched && retypePassword.length === 0)
      ) {
        setRetypePasswordIsValid(true);
      } else setRetypePasswordIsValid(false);
    }
  }, [
    clicked,
    phone.length,
    phoneIsTouched,
    password.length,
    passwordIsTouched,
    retypePassword.length,
    retypePasswordIsTouched,
  ]);

  return (
    <Fragment>
      {!otpCodeModal && (
        <div class="login-main-area">
          <div class="login-info-from">
            <form>
              <h2>Reset Password</h2>
              <i class="fa fa-spinner" aria-hidden="true"></i>
              <div class="login-info-inner-content">
                <div class="custom-input">
                  <label for="mobile">Mobile Number</label>
                  <input
                    type="text"
                    name=""
                    id="mobile"
                    required=""
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
                    required=""
                    value={password}
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
                <div class="custom-input">
                  <label for="password">Retype Password</label>
                  <input
                    type="password"
                    name=""
                    id="password"
                    required=""
                    value={retypePassword}
                    onChange={retypePasswordChangeHandler}
                    onBlur={retypePasswordTouchedHandler}
                  />
                  {retypePasswordIsValid && (
                    <div class="alert alert-error">
                      Confirm Password is required.
                    </div>
                  )}
                  {retypePasswordIsTouched &&
                    retypePassword.length === 0 &&
                    !retypePasswordIsValid && (
                      <div class="alert alert-error">
                        Confirm Password is required.
                      </div>
                    )}
                  {password !== retypePassword && !retypePasswordIsValid && retypePassword.length!==0 && (
                    <div class="alert alert-error">
                      {" "}
                      Password is mismatched.
                    </div>
                  )}
                </div>
                <div class="login-submit">
                  {/* <!-- <input type="submit" value="Reset Password"> --> */}
                  <a href onClick={submitNextButtonHandler}>
                    Reset Password
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div class="dont-have-account">
            <p>Already a member?</p>
            <a href onClick={loginModalHandler}>
              LogIn
            </a>
          </div>
        </div>
      )}

      {otpCodeModal && (
        <AuthenticationModalBody
          Template={OtpCodeModal}
          closeModal={closeOtpModalHandler}
          closeLoginModalhandler={closeLoginModalhandler}
        />
      )}
    </Fragment>
  );
};

export default ForgotModal;
