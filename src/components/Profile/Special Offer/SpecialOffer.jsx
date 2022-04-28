import React, { useEffect, useState } from "react";
import { GET_PROMOTIONAL } from "../../../lib/endpoint";
import PopAlert from "../../../utilities/alert/PopAlert";
import { BASE_URL, http } from "../../Services/httpService";
import Suspense from "../../Suspense/Suspense";

const SpecialOffer = () => {
  const [promotedOffers, setPromottedOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setIsFailed] = useState(false);
  //api request for get special offers
  const getOffersHttp = () => {
    http.get({
      url: GET_PROMOTIONAL,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setPromottedOffers(res.data);
        setIsFailed(false);
      },
      failed: () => {
        setIsFailed(true);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };
  const closeResAlerthandler = () => {
    setIsFailed((prevState) => !prevState);
  };
  //get offers call function
  useEffect(() => {
    getOffersHttp();
  }, []);

  return (
    <div class="cash-back-offer-inner-card">
      {/* <!-- single item --> */}
      {!isLoading && promotedOffers?.length === 0 && (
        <div className="without-special-offer">
          <div className="zero-special-offers">
            No Speical Offers Recently 😥
          </div>
        </div>
      )}
      {!isLoading &&
        promotedOffers?.length > 0 &&
        promotedOffers.map((item) => (
          <div class="single-cash-card-item">
            <div class="card-img">
              <img src={BASE_URL + item.imageURL} alt="img" />
            </div>
            <div class="cash-content">
              <h4>{item.headline}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      {isLoading && <Suspense />}
      {isFailed && (
        <PopAlert
          content={"Something went wrong."}
          closeModal={closeResAlerthandler}
        />
      )}
    </div>
  );
};

export default SpecialOffer;
