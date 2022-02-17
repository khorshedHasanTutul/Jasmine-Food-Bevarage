import React from 'react'
import { Link } from 'react-router-dom'
import { UrlContactRoute, urlReturnPolicyRoute, urlPrivacyPolicyRoute, urlTermsConditionsRoute, UrlAboutRoute } from '../Services/UrlService'

const FooterUsefulLinks = () => {
  return (
    <div class="footer-widget-single f-widget-2">
      <h2>USEFUL LINKS</h2>
      <ul>
        <li>
          <i class="fa fa-angle-double-right"></i>
          <Link to={UrlContactRoute()}>Contact Us</Link>
        </li>
        <li>
          <i class="fa fa-angle-double-right"></i>
          <Link to={UrlAboutRoute()}>About Us</Link>
        </li>
        <li>
          <i class="fa fa-angle-double-right"></i>
          <Link to={urlReturnPolicyRoute()}>Return Policy</Link>
        </li>
        <li>
          <i class="fa fa-angle-double-right"></i>
          <Link to={urlPrivacyPolicyRoute()}>Privacy Policy</Link>
        </li>
        <li>
          <i class="fa fa-angle-double-right"></i>
          <Link to={urlTermsConditionsRoute()}>Terms & Conditions</Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterUsefulLinks