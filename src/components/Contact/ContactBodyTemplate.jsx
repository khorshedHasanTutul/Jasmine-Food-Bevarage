import React from 'react';

const ContactBodyTemplate = () => {
  return (
    <section class="contact-us-area">
    <div class="container">
        <div class="contact-main-flex">
            <div class="contact-info">
                <h2>CONTACT INFO</h2>
                <span>Feel free to contact us! You can use our contact form to send us a message.</span>
                <ul>
                    <li>
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <span>Jasmine Food & Beverage 37/B Dilu Road,New Eskaton, Dhaka</span>
                    </li>
                    <li>
                        <i class="fa fa-volume-control-phone" aria-hidden="true"></i>

                        <a href="tel:+880258155933​">+880258155933​</a>
                    </li>
                    <li>
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <a href="mailto:iqrasysinfo@gmail.com​">info@jasmin.com</a>
                    </li>
                </ul>
            </div>
            <div class="get-in-tuch">
                <h2>GET IN TOUCH</h2>
                <div class="reqest-demo-from">
                    <form>
                        <div class="reqest-inner-content-flex">
                            <div class="custom-input">
                                <label for="name">Full Name</label>
                                <input type="text" id="name" class="auto_bind" data-binding="name" placeholder="E.g  Hasibul Mursalin" required="" />
                            </div>
                            <div class="custom-input">
                                <label for="email">Email Address</label>
                                <input type="text" id="email" class="auto_bind" data-binding="email" placeholder="E.g Iqrasysinfo@gmail.com" required="" />
                            </div>
                        </div>
                        <div class="custom-input">
                            <label for="mobile">Phone Number</label>
                            <input type="text" id="mobile" class="auto_bind" data-binding="mobile" placeholder="E.g 01778772327" required="" />
                        </div>
                        <div class="custom-input">
                            <label for="textarea">Message</label>
                            <textarea name="" id="textarea" class="auto_bind" data-binding="textarea" placeholder="Enter Your Message" required=""></textarea>
                        </div>
                        <div class="custom-submit">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.978959823561!2d90.39865351438833!3d23.748129694781195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89057d4aaad%3A0x8fc7d22d077e27b8!2s37%20Dilu%20Road%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1643635146913!5m2!1sen!2sbd"style={{border:"0"}} title='map' allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</section>    
  );
};

export default ContactBodyTemplate;
