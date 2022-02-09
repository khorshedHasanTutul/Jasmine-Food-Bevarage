import React from 'react';
import BottomHeader from './BottomHeader';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';

const Header = () => {
  return (
    <header class="main-header-area" id="header">
    {/* <!-- header top content --> */}
         <TopHeader />
    {/* <!-- header top content --> */}
   <div class="container">
       <div class="header-main-content">
            {/* <!-- header middle content --> */}
          <MiddleHeader />
           {/* <!-- header middle content -->

           <!-- header bottom content --> */}
          <BottomHeader />
           {/* <!-- header bottom content --> */}
       </div>
   </div>
</header>
  );
};

export default Header;
