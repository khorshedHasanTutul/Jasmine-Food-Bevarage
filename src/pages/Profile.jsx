import React, { useEffect, useState } from "react";
import ProfileBody from "../components/Profile/ProfileBody/ProfileBody";
import ProfileSidebar from "../components/Profile/ProfileSidebar/ProfileSidebar";
import { http } from "../components/Services/httpService";
import { getProfileInfo } from "../lib/endpoint";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState();
  const getProfileInfoHttp = () => {
    http.get({
      url: getProfileInfo,
      before: () => {},
      successed: (res) => {
        setProfileInfo(res.data);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };

  useEffect(() => {
    getProfileInfoHttp();
  }, []);
  
  return (
    <section class="profile-area">
      <div class="container">
        <div class="profile-main">
          <ProfileSidebar profileInfo={profileInfo} />
          <ProfileBody getProfileInfoHttp={getProfileInfoHttp} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
