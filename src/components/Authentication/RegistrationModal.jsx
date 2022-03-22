import React, { useState, useEffect } from "react";

const RegistrationModal = ({ closeModal, closeLoginModalhandler }) => {
  const [clicked, setClicked] = useState(false);

  //validation state start 
  const [name, setName] = useState("");
  const [nameIsTouched, setnameIsTouched] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  //end

  //validation handlers
  const nameChangeHandler = ({ target }) => {
    setName(target.value);
  };
  const nameTouchedHandler = () => {
    setnameIsTouched(false);
  };

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
  // end 

  useEffect(() => {
    if (clicked) {
      if (
        (nameIsTouched && name.length === 0) ||
        (!nameIsTouched && name.length === 0)
      ) {
        setNameIsValid(true);
      } else setNameIsValid(false);
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
    nameIsTouched,
    name.length,
    phone.length,
    phoneIsTouched,
    password.length,
    passwordIsTouched,
  ]);

  const submitButtonHandler = (evt) => {
    evt.preventDefault();
    setClicked(true);

    //success code goes here
  };

  //modal handler
  const closeModalHandler = () => {
    closeModal();
    closeLoginModalhandler();
  };

  return (
    <div class="login-main-area">
      <div class="login-info-from">
        <form>
          <h2>registration to Jasmine</h2>
          <i class="fa fa-spinner" aria-hidden="true"></i>
          <div class="login-info-inner-content">
            <div class="custom-input">
              <label for="name">Name</label>
              <input
                type="text"
                name=""
                id="name"
                required
                value={name}
                onChange={nameChangeHandler}
                onBlur={nameTouchedHandler}
              />
              {nameIsValid && (
                <div class="alert alert-error">Name is required.</div>
              )}
              {nameIsTouched && name.length === 0 && !nameIsValid && (
                <div class="alert alert-error">Name is required.</div>
              )}
            </div>
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
    </div>
  );
};

export default RegistrationModal;
