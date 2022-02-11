import React from 'react'
import { Link } from 'react-router-dom';
import appData from "../DataSource/appData"
import { UrlHomeRoute } from '../Services/UrlService';
const FooterAddress = () => {
  const getFooterAddress=appData.Footer[0];
  return (
    (
        <div class="footer-widget-single f-widget-1">
        <h2>Address</h2>
        <ul>
          <li>
            Address:{" "}
            <span>
             {getFooterAddress.Address}
            </span>
          </li>
          <li>
            Mobile: <a href={'tel:'+getFooterAddress.Mobile}>+{getFooterAddress.Mobile},</a>
          </li>
          <li>
            Email: <a href={'mailto:'+getFooterAddress.Email}>{getFooterAddress.Email}</a>
          </li>
        </ul>
        <Link to={UrlHomeRoute()}>
          <img src={getFooterAddress.Image} alt="img" />
        </Link>
      </div>
    )
  )
}

export default FooterAddress