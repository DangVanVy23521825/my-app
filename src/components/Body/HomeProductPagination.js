import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomeProductSite = () => {
    return (
        <ul className="pagination home-product__pagination">
            <li className="pagination-item">
                <a href="https://www.youtube.com/" className="pagination-link">
                    <i className="pagination-icon fa-solid fa-angle-left"></i>
                </a>
            </li>
            <li className="pagination-item pagination-item-active">
                <a href="https://www.youtube.com/" className="pagination-link">1</a>
            </li>
            <li className="pagination-item">
                <a href="https://www.youtube.com/" className="pagination-link">2</a>
            </li>
            <li className="pagination-item">
                <a href="https://www.youtube.com/" className="pagination-link">3</a>
            </li>
            <li className="pagination-item">
                <a href="https://www.youtube.com/" className="pagination-link">4</a>
            </li>
            <li className="pagination-item">
                <a href="https://www.youtube.com/" className="pagination-link">5</a>
            </li>
            <li className="pagination-item">
                <a href="https://www.youtube.com/" className="pagination-link">...</a>
            </li>
            <li className="pagination-item">
                <a href="https://www.youtube.com/" className="pagination-link">11</a>
            </li>
            <li className="pagination-item">
                <a href="https://www.youtube.com/" className="pagination-link">
                    <i className="pagination-icon fa-solid fa-angle-right"></i>
                </a>
            </li>
        </ul>
    );
}

export default HomeProductSite;