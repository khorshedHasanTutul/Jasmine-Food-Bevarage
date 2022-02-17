import React from 'react';
import BottomHeader from './BottomHeader';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';

const Header = () => {
  return (
    <header class="main-header-area" id="header">
         <TopHeader />
        <div class="container">
            <div class="header-main-content">
                <MiddleHeader />
                <BottomHeader />
            </div>
        </div>
    </header>
  );
};

export default Header;
