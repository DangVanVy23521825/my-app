import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBarFilterHeading = () => {
    return (
        <div className="category__filter-heading">
            <h1 className="category__all--heading category__filter">
                <i className="category__all--heading-icon category-filter-icon fa-solid fa-filter"></i>
                BỘ LỌC TÌM KIẾM
            </h1>
        </div>
    );
}

export default SideBarFilterHeading;