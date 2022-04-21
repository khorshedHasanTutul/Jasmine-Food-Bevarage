import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getOtp, verifyOtp } from "../../lib/endpoint";
import { http } from "../Services/httpService";
import authContext from "../Store/auth-context";
import Suspense from "../Suspense/Suspense";

const OtpCodeModal = ({ closeModal, closeLoginModalhandler }) => {
  let history = useHistory();
  const [clicked, setClicked] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpIsTouched, setOtpIsTouched] = useState(false);
  const [otpIsValid, setOtpIsValid] = useState(false);
  const authCtx = useContext(authContext);

  const [isLoading, setIsLoading] = useState(false);
  const [failedMessage, setFailedMessage] = useState(false);

  const user = {
    phone: authCtx.getRegistrationValue.phone,
    password: authCtx.getRegistrationValue.password,
  };

  const otpTouchedHandler = () => {
    setOtpIsTouched(true);
  };
  const otpChangedHandler = ({ target }) => {
    setOtp(target.value);
    setFailedMessage(false);
  };

  useEffect(() => {
    if (clicked) {
      if (
        (otpIsTouched && otp.length === 0) ||
        (!otpIsTouched && otp.length === 0)
      ) {
        setOtpIsValid(true);
      } else setOtpIsValid(false);
    }
  }, [clicked, otp.length, otpIsTouched]);

  const submitHandler = (evt) => {
    //success code goes here
    evt.preventDefault();
    setClicked(true);

    //if fullfil all condition then state update of this states
    if (otp.length !== 0) {
      http.post({
        url: verifyOtp,
        payload: {
          phone: user.phone,
          password: user.password,
          requestId: authCtx.userOtpId.id,
          otp: otp,
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
          closeModal();
          // closeLoginModalhandler();
          history.push("/");
        },
        failed: (data) => {
          console.log(data);
          setFailedMessage(true);
        },
        always: () => {
          setIsLoading(false);
        },
      });
    }
  };
  const resendOtpHandler = () => {
    ///code goes here
    http.post({
      url: getOtp,
      payload: {
        phone: user.phone,
        password: user.password,
      },
      before: () => {
        setIsLoading(true);
      },
      successed: (data) => {
        authCtx.userOtpId.id = data.data;
        authCtx.registration(user);
        setOtpIsValid(false);
        setFailedMessage(false);
      },
      failed: (data) => {
        console.log(data);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };
  return (
    <div class="login-main-area">
      <div class="login-info-from">
        <form>
          <h2>Please Enter Your Otp Code</h2>
          {/* <i class="fa fa-spinner" aria-hidden="true"></i> */}
          <div class="login-info-inner-content">
            <div class="custom-input">
              <label for="mobile">Otp Code</label>
              <input
                type="text"
                name=""
                id="mobile"
                required
                value={otp}
                onChange={otpChangedHandler}
                onBlur={otpTouchedHandler}
              />
              {failedMessage && <div class="alert alert-error">Wrong OTP!</div>}
              {otpIsValid && (
                <div class="alert alert-error">Otp is required.</div>
              )}
              {otpIsTouched && otp.length === 0 && !otpIsValid && (
                <div class="alert alert-error">Otp is required.</div>
              )}
            </div>
            <div class="login-submit">
              {/* <!-- <input type="submit" value="Next"> --> */}
              <a href onClick={submitHandler}>
                Next
              </a>
            </div>
          </div>
        </form>
      </div>
      <div class="dont-have-account">
        <p>Don't Receved Otp Code</p>
        <a href onClick={resendOtpHandler}>
          Resent
        </a>
      </div>
      {isLoading && <Suspense />}
    </div>
  );
};

export default OtpCodeModal;
