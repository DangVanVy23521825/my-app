import React, { useEffect, useState } from 'react';
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBarFilterBrand = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/brands')
            .then(response => response.json())
            .then(data => setBrands(data))
            .catch(error => console.error('Error fetching brands:', error));
    }, []);

    return (
        <div className="category__filter_site">
            <div className="category__small_heading">Thương Hiệu</div>
            <div className="folding__items">
                {brands.map((brand) => (
                    <div className="folding__items_checkbox" key={brand.id}>
                        <div className="checkbox">
                            <input type="checkbox" id={`filter-list-${brand.id}`} name="filter-list" checked/>
                            <label htmlFor={`filter-list-${brand.id}`}>{brand.name}</label>
                        </div>
                    </div>
                ))}
                <div className="folding__items_more">
                    <span className="folding__items_more--mod">Thêm</span>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>
    );
}

export default SideBarFilterBrand;