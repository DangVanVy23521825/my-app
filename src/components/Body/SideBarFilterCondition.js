import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBarFilterCondition = () => {
    return (
        <div className="category__filter_site">
            <div className="category__small_heading">Tình Trạng</div>
            <div className="folding__items">
                <div className="folding__items_checkbox">
                    <div className="checkbox">
                        <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                        <label for="filter-list-1">Đã sử dụng</label>
                    </div>
                </div>
                <div className="folding__items_checkbox">
                    <div className="checkbox">
                        <input type="checkbox" id="filter-list-2" name="filter-list" checked />
                        <label for="filter-list-2">Mới</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBarFilterCondition;