import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideBarAll from './SideBarAll.js'
import SideBarFilterHeading from './SideBarFilterHeading.js'
import SideBarFilterCate from './SideBarFilterCate.js';
import SideBarFilterBrand from './SideBarFilterBrand.js';
import SideBarFilterPrice from './SideBarFilterPrice.js';
import SideBarFilterShops from './SideBarFilterShops.js';
import SideBarFilterCondition from './SideBarFilterCondition.js'

const SideBar = () => {
    return (
        <div className="grid__row-2-column">
            <nav className="category">
                <SideBarAll />
                <SideBarFilterHeading />
                <SideBarFilterCate />
                <SideBarFilterBrand />
                <SideBarFilterPrice />
                <SideBarFilterShops />
                <SideBarFilterCondition />
            </nav>
        </div>
    );
}

export default SideBar;