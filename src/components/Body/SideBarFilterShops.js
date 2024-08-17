import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBarFilterShops = () => {
    return (
        <div className="category__filter_site">
            <div className="category__small_heading">Loại Shop</div>
            <div className="folding__items">
                <div className="folding__items_checkbox">
                    <div className="checkbox">
                        <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                        <label for="filter-list-1">Shopee Mall</label>
                    </div>
                </div>
                <div className="folding__items_checkbox">
                    <div className="checkbox">
                        <input type="checkbox" id="filter-list-2" name="filter-list" checked/>
                        <label for="filter-list-2">Shop yêu thích</label>
                    </div>
                </div>
                <div className="folding__items_checkbox">
                    <div className="checkbox">
                        <input type="checkbox" id="filter-list-3" name="filter-list" checked/>
                        <label for="filter-list-3">Xử lý đơn hàng bởi Shopee</label>
                    </div>
                </div>
                <div className="folding__items_checkbox">
                    <div className="checkbox">
                        <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                        <label for="filter-list-1">Shop yêu thích +</label>
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

export default SideBarFilterShops;