import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomeFilter = () => {
    return (
        <div className="home__filter">
            <span className ="home__filter-label">Sắp xếp theo</span>
            <button className="home__filter-btn btn">Phổ biến</button>
            <button className="home__filter-btn btn btn-primary">Mới nhất</button>
            <button className="home__filter-btn btn">Bán chạy</button>

            <div className="home__select_input">
                <span className="home__select_input-label">Giá</span>
                <i className="home__select_input-icon fa-solid fa-chevron-down"></i>
            </div>

            <div className="home__filter-page">
                <span className ="home__filter-nums">
                    <span className="home__filter-page-current">1</span>/14
                </span>
            </div>

            <div className="home__filter-page-control">
                <a href="https://www.youtube.com/" className="home__filter-page-btn home__filter-page-control-icon-disabled">
                    <i className="home__filter-page-control-icon fa-solid fa-angle-left"></i>
                </a>
                <a href="https://www.youtube.com/" className="home__filter-page-btn">
                    <i className="home__filter-page-control-icon fa-solid fa-angle-right"></i>
                </a>
            </div>
        </div>
    );
}

export default HomeFilter;