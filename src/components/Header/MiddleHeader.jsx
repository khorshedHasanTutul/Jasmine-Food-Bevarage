import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import appData from '../DataSource/appData';
import SearchProduct from '../SearchPortal/SearchProduct';
import { UrlHomeRoute } from '../Services/UrlService';

const MiddleHeader = () => {
    const getLogo=appData.MiddleHeader;
    const  [searchValue,setSearchValuye]=useState('')
    const textChangeHandler=({target})=>{
        setSearchValuye(target.value)
    }
    const closeSearchHandler=()=>{
        setSearchValuye('')
    }
  return (
    <div class="header-middle-content mt-5">
    <div class="header-m-flex d-flexx">
        <div class="logo">
            <Link to={UrlHomeRoute()}>
                <img src={getLogo[0].logo} alt="logo" />
            </Link>
        </div>
        <div class="search-box">
            <form>
                <div class="inner-search-box">
                    <input type="search" name="" id="search" placeholder="I'am Looking for.." value={searchValue} onChange={textChangeHandler}/>
                    <button type="submit">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                    {
                        (searchValue)&& <SearchProduct searchValue={searchValue} closeSearchHandler={closeSearchHandler}/>
                    }
                </div>
            </form>
        </div>
        <div class="header-account-flex d-flex al-center">
            <div class="language-switch">
                  <label>
                    <input type='checkbox'/>
                      <span class='base-color'>
                       <span class='toggle-slider'></span>
                       <span class='token'>বাংলা</span> 
                       <span class='cash'>Eng</span>
                     </span>
                 </label>  
            </div>
            <ul class="d-flex">
                <li>
                  <a href="#demo-modal">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                    <a href>
                        <i class="fa fa-bell-o" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="#demo-modalxx">
                        <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
  );
};

export default MiddleHeader;
