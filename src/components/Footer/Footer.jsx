import React from "react";
import BacktoTop from "./BacktoTop";
import FooterAddress from "./FooterAddress";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterUsefulLinks from "./FooterUsefulLinks";

const Footer = () => {
  return (
    <>
      {/* //     <!--=================================================
//     start footer bottom area
// ===================================================--> */}
      <footer class="footer-bottom-area">
        <div class="container">
          <div class="footer-bottom-main">
            <div class="footer-bottom-flex">
              {/* <!-- single item --> */}
             <FooterAddress />
              {/* <!-- single item --> */}
              <FooterUsefulLinks />
              {/* <!-- single item --> */}
              
              {/* <!-- single item --> */}
              <FooterSocialLinks />
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer copy right area --> */}
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
      {/* <!--=================================================
End footer bottom area
===================================================--> */}
    </>
  );
};

export default Footer;
