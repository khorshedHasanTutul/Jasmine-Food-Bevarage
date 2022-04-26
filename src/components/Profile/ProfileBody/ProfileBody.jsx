import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Address from "../../Checkout/Address";
import {
  urlAllOrderRoutes,
  urlOrderRoute,
  urlProfileAddressRoute,
  urlProfileComplain,
  urlProfileEditRoute,
  urlProfileRoute,
  urlSpecialOfferRoute,
} from "../../Services/UrlService";
import Complain from "../Complain/Complain";
import OrderHistory from "../OrderHistory/OrderHistory";
import SpecialOffer from "../Special Offer/SpecialOffer";
import UpdateProfile from "../UpdateProfile/UpdateProfile";

const ProfileBody = ({getProfileInfoHttp}) => {
  return (
    <div class="profile-body">
      <div class="profile-body-inner-content">
        <div class="product-desc-review-information-main">
          <Switch>
            <Route path={urlProfileRoute()} exact>
              <Redirect to={urlProfileRoute() + urlAllOrderRoutes()} />
            </Route>
            <Route path={urlProfileRoute() + urlOrderRoute()} exact>
              <Redirect to={urlProfileRoute() + urlAllOrderRoutes()} />
            </Route>
            <Route path={urlProfileRoute() + urlOrderRoute()}>
              <OrderHistory />
            </Route>
            <Route path={urlProfileRoute() + urlProfileAddressRoute()} exact>
                <Address />
            </Route>
            <Route path={urlProfileRoute() + urlSpecialOfferRoute()} exact>
                <SpecialOffer/>
            </Route>
            <Route path={urlProfileRoute()+urlProfileEditRoute()} exact>
                <UpdateProfile getProfileInformation={getProfileInfoHttp}/>
            </Route>
            <Route path={urlProfileRoute()+urlProfileComplain()} exact>
                <Complain />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
