import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import NotificationBody from "./NotificationBody";
import NotificationHeader from "./NotificationHeader";

const NotificationParent = () => {
  return (
    <Fragment>
      <NotificationHeader />
      <NotificationBody />
    </Fragment>
  );
};

export default NotificationParent;
