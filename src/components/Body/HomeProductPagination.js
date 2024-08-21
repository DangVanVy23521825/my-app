import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomeProductPagination = () => {
  const pages = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <ul className="pagination home-product__pagination">
      <li className="pagination-item">
        <a href="https://www.youtube.com/" className="pagination-link">
          <i className="pagination-icon fa-solid fa-angle-left"></i>
        </a>
      </li>
      {pages.map((page, index) => (
        <li key={index} className={`pagination-item ${page === 1 ? 'pagination-item-active' : ''}`}>
          <a href="https://www.youtube.com/" className="pagination-link">{page}</a>
        </li>
      ))}
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

export default HomeProductPagination;