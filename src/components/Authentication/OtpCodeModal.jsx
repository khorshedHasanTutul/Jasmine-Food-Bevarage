import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const OtpCodeModal = ({ closeModal, closeLoginModalhandler }) => {
  const [clicked, setClicked] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpIsTouched, setOtpIsTouched] = useState(false);
  const [otpIsValid, setOtpIsValid] = useState(false);

  const otpTouchedHandler = () => {
    setOtpIsTouched(true);
  };
  const otpChangedHandler = ({ target }) => {
    setOtp(target.value);
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

  const loginModalHandler = (evt) => {
    //success code goes here
    evt.preventDefault();
    setClicked(true);


    //if fullfil all condition then state update of this states
    closeModal();
    closeLoginModalhandler();
  };
  const resendOtpHandler = () => {
    ///code goes here
  };
  return (
    <div class="login-main-area">
      <div class="login-info-from">
        <form>
          <h2>Please Enter Your Otp Code</h2>
          <i class="fa fa-spinner" aria-hidden="true"></i>
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
              {otpIsValid && (
                <div class="alert alert-error">Otp is required.</div>
              )}
              {otpIsTouched && otp.length === 0 && !otpIsValid && (
                <div class="alert alert-error">Otp is required.</div>
              )}
            </div>
            <div class="login-submit">
              {/* <!-- <input type="submit" value="Next"> --> */}
              <a href onClick={loginModalHandler}>
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
    </div>
  );
};

export default OtpCodeModal;
