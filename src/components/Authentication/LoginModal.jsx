import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../lib/endpoint";
import { http } from "../Services/httpService";
import { urlCheckoutRoute, UrlHomeRoute } from "../Services/UrlService";
import authContext from "../Store/auth-context";
import Suspense from "../Suspense/Suspense";
import AuthenticationModalBody from "./AuthenticationModalBody";
import ForgotModal from "./ForgotModal";
import RegistrationModal from "./RegistrationModal";

const LoginModal = ({ closeModal, isOrderNowPressed }) => {
  const authCtx = useContext(authContext);
  let history = useHistory();
  ///validation state defined
  const [phone, setPhone] = useState("");
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isValidLength, setIsValidLength] = useState("");

  const [clicked, setClicked] = useState(false);
  ///end

  const [forgotPopUpModal, setForgotPopUpModal] = useState(false);
  const [registerPopUpModal, setregisterPopUpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFailedLogin, setIsLoginFailed] = useState(false);

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
    if (
      phone.length !== 0 &&
      phone.length === 11 &&
      password.length !== 0 &&
      password.length >= 4
    ) {
      http.post({
        url: login,
        payload: {
          phone: phone,
          password: password,
        },
        before: () => {
          setIsLoading(true);
        },
        successed: (data) => {
          const loginInfo = {
            id: data.data.id,
            name: data.data.name,
            phone: data.data.phone,
            email: data.data.email,
            token: data.data.token,
          };
          authCtx.login(loginInfo);
          isOrderNowPressed
            ? history.push(urlCheckoutRoute())
            : //   : consultancyPressed
              //   ? history.push("/consultancy")
              //   : history.push("/");
              history.push(UrlHomeRoute());
          closeModal();
        },
        failed: () => {
          console.log("failed");
          setIsLoginFailed(true);
        },
        always: () => {
          setIsLoading(false);
        },
      });
    }
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
  useEffect(() => {
    if (passwordIsTouched) {
      if (password.length < 4) {
        setIsValidLength(true);
      } else {
        setIsValidLength(false);
      }
    }
  }, [password.length, passwordIsTouched]);

  return (
    <>
      {!forgotPopUpModal && !registerPopUpModal && (
        <div class="login-main-area">
          <div class="login-info-from">
            <form>
              <h2>LogIn to Jasmine</h2>
              {/* <i class="fa fa-spinner" aria-hidden="true"></i> */}
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
                  {/* {isValidLength && (
                    <div class="alert alert-error">
                      Password should be at least 4 charecter.
                    </div>
                  )} */}
                </div>
                {isFailedLogin && (
                  <div class="alert alert-error login-failed">
                    Login failed, Phone or Password is wrong!
                  </div>
                )}
                <a class="forgot-pass" href>
                  <span onClick={forgotModalHandler}>Forgot Password?</span>
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
      {isLoading && <Suspense />}

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
