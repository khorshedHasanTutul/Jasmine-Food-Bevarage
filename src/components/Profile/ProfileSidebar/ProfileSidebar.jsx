import React from 'react'
import SidebarLinks from '../SidebarLinks/SidebarLinks'

const ProfileSidebar = () => {
  return (
    <div class="profile-sidebar">
    <div class="profile-sidebar-inner">
        <div class="profile-short-desc">
            <img src="/contents/assets/images/cmt.png" alt="cmt" />
            <p>Khorshed Hasan Tutul</p>
            <p>jakma@gmail.com</p>
            <aside>My Wallet: <span>0BDT</span></aside>
            <aside>Pending Cash: <span>0BDT</span></aside>
        </div>
        <SidebarLinks />
    </div>
</div>
  )
}

export default ProfileSidebar