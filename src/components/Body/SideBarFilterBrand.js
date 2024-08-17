import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBarFilterBrand = () => {
    return (
        <div className="category__filter_site">
            <div className="category__small_heading">Thương Hiệu</div>
            <div className="folding__items">
                <div className="folding__items_checkbox">
                    <div className="checkbox">
                        <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                        <label for="filter-list-1">sido tech</label>
                    </div>
                </div>
                <div className="folding__items_checkbox">
                    <div className="checkbox">
                        <input type="checkbox" id="filter-list-2" name="filter-list" checked/>
                        <label for="filter-list-2">Logitech</label>
                    </div>
                </div>
                <div className="folding__items_checkbox">
                    <div className="checkbox">
                        <input type="checkbox" id="filter-list-3" name="filter-list" checked/>
                        <label for="filter-list-3">Samsung</label>
                    </div>
                </div>
                <div className="folding__items_checkbox">
                    <div className="checkbox">
                        <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                        <label for="filter-list-1">TP-link</label>
                    </div>
                </div>
                <div className="folding__items_more">
                    <span className="folding__items_more--mod">Thêm</span>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>
    );
}

export default SideBarFilterBrand;