import React, { useEffect, useRef } from 'react';
import BottomHeader from './BottomHeader';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';

const Header = () => {
  const ref=useRef(null)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>10){
        ref.current.classList.add('fade-in')
      }
      else{
        ref.current.classList.remove("fade-in")
      }
    })
  },[])
  return (
    <header class="main-header-area" id="header" ref={ref}>
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
