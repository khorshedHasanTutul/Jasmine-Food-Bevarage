import React, { useEffect, useState } from "react";
import { GET_PROMOTIONAL } from "../../../lib/endpoint";
import { BASE_URL, http } from "../../Services/httpService";

const SpecialOffer = () => {
  const [promotedOffers, setPromottedOffers] = useState([]);
  const getOffersHttp = () => {
    http.get({
      url: GET_PROMOTIONAL,
      before: () => {},
      successed: (res) => {
        console.log(res.data);
        setPromottedOffers(res.data);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };
  useEffect(() => {
    getOffersHttp();
  }, []);
  return (
    <div class="cash-back-offer-inner-card">
      {/* <!-- single item --> */}
      {promotedOffers.map((item) => (
        <div class="single-cash-card-item">
          <div class="card-img">
            <img src={BASE_URL+item.imageURL} alt="img" />
          </div>
          <div class="cash-content">
            <h4>{item.headline}</h4>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialOffer;
