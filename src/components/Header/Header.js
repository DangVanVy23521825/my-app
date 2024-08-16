
import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './navBar.js'
import HeaderSearch from './headerSearch.js'

const Header = () => {
    return (
        <header className="header">
            <div className="grid">
                <NavBar />
                <HeaderSearch />
            </div>
        </header>
    );
  }

export default Header;
