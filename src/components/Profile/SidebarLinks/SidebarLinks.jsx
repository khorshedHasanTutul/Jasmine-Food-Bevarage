import React from "react";
import { Link, NavLink } from "react-router-dom";
import { urlOrderRoute, urlProfileAddressRoute, urlProfileComplain, urlProfileEditRoute, urlProfileRoute, urlSpecialOfferRoute } from "../../Services/UrlService";

const SidebarLinks = () => {

  return (
    <div class="profile-nav">
      <ul>
        <li class="">
            <NavLink activeClassName='active' to={urlProfileRoute()+urlOrderRoute()}>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              Order History
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to={urlProfileRoute()+urlProfileAddressRoute()} exact>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              Edit Address
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to={urlProfileRoute()+urlSpecialOfferRoute()} exact>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>Special
              Offer
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to={urlProfileRoute()+urlProfileEditRoute()} exact>
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>Edit
            Profile
          </NavLink>
          
        </li>
        <li>
            <NavLink activeClassName='active' to={urlProfileRoute()+urlProfileComplain()} exact>
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>Submit
            Complain
          </NavLink>
        </li>
        <li>
          <Link to="/">
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLinks;
