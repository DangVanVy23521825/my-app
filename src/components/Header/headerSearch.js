import React from 'react'
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HeaderLogo from './headerLogo.js';
import HeaderSearchSite from './headerSearchSite.js';
import HeaderCart from './headerCart.js';

const HeaderSearch = () => {
    return (
        <div className="header__search">
            <HeaderLogo />
            <HeaderSearchSite />
            <HeaderCart />
        </div>
    );
  }


export default HeaderSearch;
