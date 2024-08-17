import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBarFilterPrice = () => {
    return (
        <div className="category__filter_site">
            <div className="category__small_heading">Khoảng Giá</div>
            <div className="price-range-form">
                <div className="price-range-form-input-site">
                    <input type="text" max-length="13" id="min-price" placeholder="đ TỪ" className="price-range-form-input"/>
                    <span className="price-range-form-estimation"></span>
                    <input type="text" max-length="13" id="max-price" placeholder="đ ĐẾN" className="price-range-form-input"/>
                </div>
            </div>
            <button type="button" className="price-button">ÁP DỤNG</button>
        </div>
    );
}

export default SideBarFilterPrice;