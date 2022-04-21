import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  UrlHomeRoute,
  urlOrderRoute,
  urlProfileAddressRoute,
  urlProfileComplain,
  urlProfileEditRoute,
  urlProfileRoute,
  urlSpecialOfferRoute,
} from "../../Services/UrlService";
import authContext from "../../Store/auth-context";

const SidebarLinks = () => {
  const history = useHistory();
  const authCtx = useContext(authContext);
  const logoutHandler = () => {
    authCtx.logout();
    history.push(UrlHomeRoute());
  };
  return (
    <div class="profile-nav">
      <ul>
        <li class="">
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlOrderRoute()}
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            Order History
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlProfileAddressRoute()}
            exact
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            Edit Address
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlSpecialOfferRoute()}
            exact
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>Special
            Offer
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlProfileEditRoute()}
            exact
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>Edit
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlProfileComplain()}
            exact
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>Submit
            Complain
          </NavLink>
        </li>
        <li>
          <a href onClick={logoutHandler}>
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLinks;
