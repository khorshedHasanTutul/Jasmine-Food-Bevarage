import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthenticationModalBody from "../Authentication/AuthenticationModalBody";
import LoginModal from "../Authentication/LoginModal";
import appData from "../DataSource/appData";
import PhoneCallAlert from "../PhoneCallAlert/PhoneCallAlert";
import SearchProduct from "../SearchPortal/SearchProduct";
import {
  UrlHomeRoute,
  urlNotificationRoute,
  urlProfileRoute,
} from "../Services/UrlService";
import authContext from "../Store/auth-context";

const MiddleHeader = () => {
  let history = useHistory();
  const getLogo = appData.MiddleHeader;
  const [searchValue, setSearchValuye] = useState("");
  const [alert, setAlert] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false);
  const authCtx = useContext(authContext);

  const textChangeHandler = ({ target }) => {
    setSearchValuye(target.value);
  };

  const closeSearchHandler = () => {
    setSearchValuye("");
  };

  const alertStatusChangesHandler = () => {
    setAlert((prevState) => !prevState);
  };
  const phoneCallHandler = () => {
    setAlert(true);
  };
  const userHandler = () => {
    if (authCtx.isLoggedIn) {
      history.push(urlProfileRoute());
    } else {
      setLoginPopUp(true);
    }
  };
  const closeAuthModalHandler = () => {
    setLoginPopUp((prevState) => !prevState);
  };
  return (
    <div class="header-middle-content mt-5">
      <div class="header-m-flex d-flexx">
        <div class="logo">
          <Link to={UrlHomeRoute()}>
            <img src={getLogo[0].logo} alt="logo" />
          </Link>
        </div>
        <div class="search-box">
          <form>
            <div class="inner-search-box">
              <input
                type="search"
                name=""
                id="search"
                placeholder="I'm Looking for..."
                value={searchValue}
                onChange={textChangeHandler}
              />
              <button type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
              {searchValue && (
                <SearchProduct
                  searchValue={searchValue}
                  closeSearchHandler={closeSearchHandler}
                />
              )}
            </div>
          </form>
        </div>
        <div class="header-account-flex d-flex al-center">
          <div class="language-switch">
            <label>
              <input type="checkbox" />
              <span class="base-color">
                <span class="toggle-slider"></span>
                <span class="token">???????????????</span>
                <span class="cash">Eng</span>
              </span>
            </label>
          </div>
          <ul class="d-flex">
            <li>
              <a href onClick={userHandler}>
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <Link to={urlNotificationRoute()}>
                <i class="fa fa-bell-o" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <a href onClick={phoneCallHandler}>
                <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {alert && <PhoneCallAlert closeModal={alertStatusChangesHandler} />}
      {loginPopUp && (
        <AuthenticationModalBody
          Template={LoginModal}
          closeModal={closeAuthModalHandler}
        />
      )}
    </div>
  );
};

export default MiddleHeader;
