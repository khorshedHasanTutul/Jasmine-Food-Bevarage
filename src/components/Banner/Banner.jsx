import React, { useEffect, useState } from "react";
import { banners } from "../../lib/endpoint";
import { bannerType } from "../../utilities/dictionaries";
import Slider from "../../utilities/slider/Slider";
import appData from "../DataSource/appData";
import { http } from "../Services/httpService";
import BannerTemplate from "./BannerTemplate";

const Banner = () => {
  const getSlider = appData.Banner;
  const [bannerList, setBannerList] = useState([])
  const getBannersForHome = () => {
    http.get({
      url: banners + bannerType.mainBanner,
      before: () => {},
      successed: (data) => {
        console.log(data);
        setBannerList(data.data);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };
  useEffect(() => {
    getBannersForHome();
  }, []);
  const options = {
    rewind: true,
    type: "loop",
    autoplay: true,
    rewindSpeed: 1000,
    speed: 500,
    pauseOnHover: false,
  };
  return (
    <section class="banner-area">
      <Slider options={options} data={bannerList} Template={BannerTemplate} />
    </section>
  );
};

export default Banner;
