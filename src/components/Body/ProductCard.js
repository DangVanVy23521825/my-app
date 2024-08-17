import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductCard = ({ products }) => {
    return (
        <div className="product__card">
      <div className="home-product-item">
        <div
          className="home-product-item-img"
          style={{ backgroundImage: `url(${products.image})` }}
        ></div>
        <h4 className="home-product-item-name">{products.name}</h4>
        <div className="home-product-item-sales">
          <span className="home-product-item-deal">{products.deal}</span>
        </div>
        <div className="home-product-item-price">
          <span className="home-product-item-new-price">đ{products.newPrice}</span>
          <span className="home-product-item-old-price">đ{products.oldPrice}</span>
          <span className="home-product-item-discount">-{products.discount}</span>
        </div>
        <div className="home-product-item-rating">
          <div className="home-product-item-star">
            {Array.from({ length: products.rating }, (_, i) => (
              <i key={i} className="fa-solid fa-star"></i>
            ))}
          </div>
          <span className="home-product-item-sold-count">Đã bán {products.soldCount}</span>
        </div>
        <div className="home-product-item-origin">
          <span className="home-product-item-origin-name">{products.origin}</span>
        </div>
        <div className="home-product-item-favourite">
          <span>Yêu Thích</span>
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
    );
}

export default ProductCard;