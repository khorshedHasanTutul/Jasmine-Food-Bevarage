import React, { useEffect, useState } from "react";
import { POST_CONTACT } from "../../lib/endpoint";
import PopAlert from "../../utilities/alert/PopAlert";
import appData from "../DataSource/appData";
import { http } from "../Services/httpService";
import Suspense from "../Suspense/Suspense";

const ContactBodyTemplate = () => {
  const getFooterAddress = appData.Footer;
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [alert, setAlert] = useState(false);

  //clicked state
  const [clicked, setClicked] = useState(false);

  //name validation
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);

  //emailValidation
  const [email, setEmail] = useState("");
  // const [emailIsTouched, setEmailIsTouched] = useState(false);
  // const [emailIsValid, setEmailIsValid] = useState(false);

  //Mobilevalidation
  const [mobile, setMobile] = useState("");
  const [mobileIsTouched, setMobileIsTouched] = useState(false);
  const [mobileIsValid, setMobileIsValid] = useState(false);

  //messageValidation
  const [message, setMessage] = useState("");
  const [messageIsTouched, setMessageIsTouched] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);

  //UseEffectDependancyList
  const useEffectDepenDancyList = [
    clicked,
    name.length,
    nameIsTouched,
    // email.length,
    // emailIsTouched,
    mobile.length,
    mobileIsTouched,
    message.length,
    messageIsTouched,
  ];

  const closeAlert = () => {
    setAlert((prevState) => !prevState);
  };

  const nameChangeHandler = ({ target }) => {
    setName(target.value);
  };
  const nameIsTouchedHandler = () => {
    setNameIsTouched(true);
  };
  const emailChangeHandler = ({ target }) => {
    setEmail(target.value);
  };
  // const emailIsTouchedHandler = () => {
  //   setEmailIsTouched(true);
  // };
  const mobileChangeHandler = ({ target }) => {
    setMobile(target.value);
  };
  const mobileIsTouchedHandler = () => {
    setMobileIsTouched(true);
  };
  const messageChangeHandler = ({ target }) => {
    setMessage(target.value);
  };
  const messageIsTouchedHandler = () => {
    setMessageIsTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setClicked(true);
    if (name.length > 0 && mobile.length > 0 && message.length > 0) {
      http.post({
        url: POST_CONTACT,
        payload: {
          activityId: "00000000-0000-0000-0000-000000000000",
          name: name,
          mobile: mobile,
          email: email,
          massege: message,
        },
        before: () => {
          setIsLoading(false);
        },
        successed: (res) => {
          setClicked(false);
          setName("");
          setMobile("");
          setEmail("");
          setMessage("");
          setNameIsTouched(false);
          setMessageIsTouched(false);
          setMobileIsTouched(false);
          setNameIsValid(false);
          setMobileIsValid(false);
          setMessageIsValid(false);
          setAlert(true);
        },
        failed: () => {
          setIsFailed(true);
        },
        always: () => {
          setIsLoading(false);
        },
      });
    }
  };

  useEffect(() => {
    if (clicked) {
      (nameIsTouched && name.length === 0) ||
      (!nameIsTouched && name.length === 0)
        ? setNameIsValid(true)
        : setNameIsValid(false);
      // (emailIsTouched && email.length === 0) ||
      // (!emailIsTouched && email.length === 0)
      //   ? setEmailIsValid(true)
      //   : setEmailIsValid(false);
      (mobileIsTouched && mobile.length === 0) ||
      (!mobileIsTouched && mobile.length === 0)
        ? setMobileIsValid(true)
        : setMobileIsValid(false);
      (messageIsTouched && message.length === 0) ||
      (!messageIsTouched && message.length === 0)
        ? setMessageIsValid(true)
        : setMessageIsValid(false);
    }
  }, useEffectDepenDancyList);

  return (
    <>
      <section class="contact-us-area">
        <div class="container">
          <div class="contact-main-flex">
            <div class="contact-info">
              <h2>CONTACT INFO</h2>
              <span>
                Feel free to contact us! You can use our contact form to send us
                a message.
              </span>
              <ul>
                <li>
                  <i class="fa fa-home" aria-hidden="true"></i>
                  <span>{getFooterAddress[0].Address}</span>
                </li>
                <li>
                  <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                  <a href={"tel:+" + getFooterAddress[0].Mobile}>
                    +{getFooterAddress[0].Mobile}​
                  </a>
                </li>
                <li>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  <a href={"mailto:" + getFooterAddress[0].Email}>
                    {getFooterAddress[0].Email}
                  </a>
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
                      <input
                        type="text"
                        id="name"
                        class="auto_bind"
                        data-binding="name"
                        placeholder="E.g  Hasibul Mursalin"
                        onChange={nameChangeHandler}
                        onBlur={nameIsTouchedHandler}
                        value={name}
                        required=""
                      />
                      {nameIsValid && (
                        <div class="alert alert-error">Name is required.</div>
                      )}
                      {nameIsTouched && name.length === 0 && !nameIsValid && (
                        <div class="alert alert-error">Name is required.</div>
                      )}
                    </div>

                    <div class="custom-input">
                      <label for="email">Email Address</label>
                      <input
                        type="text"
                        id="email"
                        class="auto_bind"
                        data-binding="email"
                        placeholder="E.g Iqrasysinfo@gmail.com"
                        required=""
                        onChange={emailChangeHandler}
                        // onBlur={emailIsTouchedHandler}
                        value={email}
                      />
                      {/* {emailIsValid && (
                      <div class="alert alert-error">Email is required.</div>
                    )}
                    {emailIsTouched && email.length === 0 && !emailIsValid && (
                      <div class="alert alert-error">Email is required.</div>
                    )} */}
                    </div>
                  </div>
                  <div class="custom-input">
                    <label for="mobile">Phone Number</label>
                    <input
                      type="text"
                      id="mobile"
                      class="auto_bind"
                      data-binding="mobile"
                      placeholder="E.g 01778772327"
                      required=""
                      onChange={mobileChangeHandler}
                      onBlur={mobileIsTouchedHandler}
                      value={mobile}
                    />
                    {mobileIsValid && (
                      <div class="alert alert-error">Mobile is required.</div>
                    )}
                    {mobileIsTouched &&
                      mobile.length === 0 &&
                      !mobileIsValid && (
                        <div class="alert alert-error">Mobile is required.</div>
                      )}
                  </div>
                  <div class="custom-input">
                    <label for="textarea">Message</label>
                    <textarea
                      name=""
                      id="textarea"
                      class="auto_bind"
                      data-binding="textarea"
                      placeholder="Enter Your Message"
                      required=""
                      onChange={messageChangeHandler}
                      onBlur={messageIsTouchedHandler}
                      value={message}
                    ></textarea>
                    {messageIsValid && (
                      <div class="alert alert-error">Message is required.</div>
                    )}
                    {messageIsTouched &&
                      message.length === 0 &&
                      !messageIsValid && (
                        <div class="alert alert-error">
                          Message is required.
                        </div>
                      )}
                  </div>
                  <div class="custom-submit">
                    <button type="submit" onClick={submitHandler}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.978959823561!2d90.39865351438833!3d23.748129694781195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89057d4aaad%3A0x8fc7d22d077e27b8!2s37%20Dilu%20Road%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1643635146913!5m2!1sen!2sbd"
              style={{ border: "0" }}
              title="map"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      {alert && (
        <PopAlert
          content={"Sent Message is Successfull"}
          closeModal={closeAlert}
        />
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default ContactBodyTemplate;
