import React, { useEffect, useState } from 'react';
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBarFilterShops = () => {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/shops')
            .then(response => response.json())
            .then(data => setShops(data))
            .catch(error => console.error('Error fetching shops:', error));
    }, []);

    return (
        <div className="category__filter_site">
            <div className="category__small_heading">Loại Shop</div>
            <div className="folding__items">
                {shops.map((shop) => (
                    <div className="folding__items_checkbox" key={shop.id}>
                        <div className="checkbox">
                            <input type="checkbox" id={`filter-list-${shop.id}`} name="filter-list" checked={shop.checked}/>
                            <label htmlFor={`filter-list-${shop.id}`}>{shop.name}</label>
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

export default SideBarFilterShops;