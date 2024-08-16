import React from 'react'
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HeaderLogo from './headerLogo.js';
import HeaderSearchSite from './headerSearchSite';
import HeaderCart from './headerCart';

class HeaderSearch extends React.Component {
  render(){
    return (
        <div className="header__search">
            <HeaderLogo />
            <HeaderSearchSite />
            <HeaderCart />
        </div>
    );
  }
}

export default HeaderSearch;
