import React from "react";

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
              <div class="footer-widget-single f-widget-1">
                <h2>Address</h2>
                <ul>
                  <li>
                    Address:{" "}
                    <span>
                      Jasmine Food & Beverage 37/B Dilu Road,New Eskaton, Dhaka
                    </span>
                  </li>
                  <li>
                    Mobile: <a href="tel:+880258155933">+880258155933,</a>
                  </li>
                  <li>
                    Email: <a href="mailto:info@jasmin.com">info@jasmin.com</a>
                  </li>
                </ul>
                <a href="index.html">
                  <img src="/contents/assets/images/logo-01.png" alt="img" />
                </a>
              </div>
              {/* <!-- single item --> */}
              <div class="footer-widget-single f-widget-2">
                <h2>USEFUL LINKS</h2>
                <ul>
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <a href>Contact Us</a>
                  </li>
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <a href>Return Policy</a>
                  </li>
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <a href>Privacy Policy</a>
                  </li>
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <a href>Catalogue</a>
                  </li>
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <a href>Terms & Conditions</a>
                  </li>
                </ul>
              </div>
              {/* <!-- single item --> */}
              <div class="footer-widget-single f-widget-3">
                <h2>Payment System</h2>
                <ul>
                  <li>
                    <a href>
                      <img src="/contents/assets/images/card4.png" alt="img" />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <img src="/contents/assets/images/card6.png" alt="img" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- single item --> */}
              <div class="footer-widget-single f-widget-4">
                <h2>Our Social Links</h2>
                <ul>
                  <li>
                    <a href>
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
                <ul class="shiping-system">
                  <h3>Shipping System :</h3>
                  <li>
                    <img src="/contents/assets/images/shipping.png" alt="img" />
                  </li>
                </ul>
              </div>
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
      {/* <!--=================================================
End footer bottom area
===================================================--> */}
    </>
  );
};

export default Footer;
