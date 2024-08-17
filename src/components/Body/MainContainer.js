import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeFilter from './HomeFilter.js';
import HomeProductSite from './HomeProductSite.js';
import HomeProductPagination from './HomeProductPagination.js';

const MainContainer = () => {
    return (
        <div className="grid__row-10-column">
            <HomeFilter />            

            <HomeProductSite />

            <HomeProductPagination />
        </div>
    );
}

export default MainContainer;