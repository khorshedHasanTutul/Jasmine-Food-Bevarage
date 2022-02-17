import React from "react";
import BacktoTop from "./BacktoTop";
import FooterAddress from "./FooterAddress";
import FooterPayment from "./FooterPayment";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterUsefulLinks from "./FooterUsefulLinks";

const Footer = () => {
  return (
    <>
      <footer class="footer-bottom-area">
        <div class="container">
          <div class="footer-bottom-main">
            <div class="footer-bottom-flex">
              <FooterAddress />
              <FooterUsefulLinks />
              <FooterPayment />
              <FooterSocialLinks />
            </div>
          </div>
        </div>
      </footer>
      <footer class="copy-right-area">
        <div class="container">
          <div class="footer-copy-right">
            <p>
              {" "}
              Website Developed By -{" "}
              <a target="_blank" href="https://iqrasys.com/">
                www.iqrasys.com
              </a>
            </p>
            <a href="tel:01778-772327">(Mob: 01778-772327)</a>
          </div>
        </div>
      </footer>
      <BacktoTop />
    </>
  );
};

export default Footer;
