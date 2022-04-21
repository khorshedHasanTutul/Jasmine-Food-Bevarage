import React, { useState, useEffect, useContext } from "react";
import { getOtp, userIfExist } from "../../lib/endpoint";
import { http } from "../Services/httpService";
import authContext from "../Store/auth-context";
import Suspense from "../Suspense/Suspense";
import AuthenticationModalBody from "./AuthenticationModalBody";
import OtpCodeModal from "./OtpCodeModal";

const RegistrationModal = ({ closeModal, closeLoginModalhandler }) => {
  const [clicked, setClicked] = useState(false);
  const authCtx = useContext(authContext);
  const [otpCodeModal, setOtpCodeModal] = useState(false);

  //validation state start
  const [phone, setPhone] = useState("");
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [cPassword, setCPassword] = useState("");
  const [missMatchPass, setMissMatchPass] = useState(false);
  const [cFrmIsTouched, setCFrmIsTouched] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  //User if Exist States
  const [isExistUser, setIsUserExist] = useState(false);

  //end

  //validation handlers

  const phoneChangeHandler = ({ target }) => {
    setPhone(target.value);
  };
  const phoneTouchedHandler = () => {
    setPhoneIsTouched(true);
    http.get({
      url: userIfExist + phone,
      before: () => {},
      successed: (data) => {
        if (data.data === true) {
          setIsUserExist(true);
        } else setIsUserExist(false);
      },
      failed: (data) => {
        console.log(data);
      },
      always: () => {},
    });
  };

  const passwordChangeHandler = ({ target }) => {
    setPassword(target.value);
  };
  const passwordTouchedHandler = () => {
    setPasswordIsTouched(true);
  };

  const cfrmPasswordChangeHandler = ({ target }) => {
    setCPassword(target.value);
  };
  const cfrmTouchedHandler = () => {
    setCFrmIsTouched(true);
  };
  const closeOtpModalHandler = () => {
    closeModal();
    setOtpCodeModal((prevState) => !prevState);
  };
  // end

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
    if (cFrmIsTouched) {
      if (password !== cPassword) {
        setMissMatchPass(true);
      } else if (password === cPassword) setMissMatchPass(false);
    }
  }, [cPassword, password, cFrmIsTouched]);

  const submitButtonHandler = (evt) => {
    evt.preventDefault();
    setClicked(true);
    const user = {
      phone: phone,
      password: password,
    };

    //success code goes here
    if (
      phone.length !== 0 &&
      phone.length === 11 &&
      !isExistUser &&
      password.length !== 0 &&
      password === cPassword
    ) {
      http.post({
        url: getOtp,
        payload: {
          phone: phone,
          password: password,
        },
        before: () => {
          setIsLoading(true);
        },
        successed: (data) => {
          authCtx.userOtpId.id = data.data;
          setOtpCodeModal(true);
          authCtx.registration(user);
        },
        failed: (data) => {
          console.log(data);
        },
        always: () => {
          setIsLoading(false);
        },
      });
    }
  };

  //modal handler
  const closeModalHandler = () => {
    closeModal();
    closeLoginModalhandler();
  };

  return (
    <>
      {!otpCodeModal && (
        <div class="login-main-area">
          <div class="login-info-from">
            <form>
              <h2>registration to Jasmine</h2>
              {/* <i class="fa fa-spinner" aria-hidden="true"></i> */}
              <div class="login-info-inner-content">
                <div class="custom-input">
                  <label for="mobile">Mobile Number</label>
                  <input
                    type="text"
                    name=""
                    id="mobile"
                    required=""
                    onChange={phoneChangeHandler}
                    onBlur={phoneTouchedHandler}
                  />
                  {phoneIsValid && (
                    <div class="alert alert-error">Phone is required.</div>
                  )}
                  {isExistUser && (
                    <div class="alert alert-error">User is already exist.</div>
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
                  <label for="password">Confirm Password</label>
                  <input
                    type="password"
                    name=""
                    id="confirm_password"
                    required=""
                    onChange={cfrmPasswordChangeHandler}
                    onBlur={cfrmTouchedHandler}
                  />
                  {missMatchPass && (
                    <div class="alert alert-error">
                      Password is not matched.
                    </div>
                  )}
                </div>
                <div class="login-submit" onClick={submitButtonHandler}>
                  <input type="submit" value="Registration" />
                </div>
              </div>
            </form>
          </div>
          <div class="dont-have-account">
            <p>Already a member?</p>
            <a href onClick={closeModalHandler}>
              LogIn
            </a>
          </div>
          {isLoading && <Suspense />}
        </div>
      )}
      {otpCodeModal && (
        <AuthenticationModalBody
          Template={OtpCodeModal}
          closeModal={closeOtpModalHandler}
          closeLoginModalhandler={closeLoginModalhandler}
        />
      )}
    </>
  );
};

export default RegistrationModal;
