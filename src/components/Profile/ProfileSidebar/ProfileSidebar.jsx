import React from "react";
import { BASE_URL } from "../../Services/httpService";
import SidebarLinks from "../SidebarLinks/SidebarLinks";

const ProfileSidebar = ({ profileInfo }) => {
  console.log({ profileInfo });
  return (
    <div class="profile-sidebar">
      <div class="profile-sidebar-inner">
        <div class="profile-short-desc">
          <img src={BASE_URL+profileInfo?.imageURL} alt="cmt" />
          <p>{profileInfo?.name}</p>
          <p>{profileInfo?.phone}</p>
          <p>{profileInfo?.email}</p>
          <aside>
            My Wallet: <span>{profileInfo?.cashback}BDT</span>
          </aside>
          <aside>
            Pending Cash: <span>{profileInfo?.dueAmount}BDT</span>
          </aside>
        </div>
        <SidebarLinks />
      </div>
    </div>
  );
};

export default ProfileSidebar;
