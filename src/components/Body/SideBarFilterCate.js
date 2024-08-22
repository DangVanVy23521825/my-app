import React, { useEffect, useState } from 'react';
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBarFilterCate = () => {
    const [filterCategories, setFilterCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/filterCategories')
            .then(response => response.json())
            .then(data => setFilterCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div className="category__filter_site">
            <div className="category__small_heading">Theo Danh Mục</div>
            <div className="folding__items">
                {filterCategories.map((category) => (
                    <div className="folding__items_checkbox" key={category.id}>
                        <div className="checkbox">
                            <input type="checkbox" id={`filter-list-${category.id}`} name="filter-list" checked/>
                            <label htmlFor={`filter-list-${category.id}`}>{category.name} ({category.productCount}+)</label>
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

export default SideBarFilterCate;