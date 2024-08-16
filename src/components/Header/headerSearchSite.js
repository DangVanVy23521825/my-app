import React from 'react'
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HeaderSearchSite = () => {
    return (
        <div>
            <div className="header__search__site">
                <div className="header__search__bar">
                    <input type="text" className="header__search--bar-input" placeholder ="Tìm trong Máy tính & Laptop"/>
                    <div className="header__search--select">
                        <span className="header__search--select-content">Trong Máy Tính & Laptop</span>
                        <i className="header__search--select-icon fa-solid fa-chevron-down"></i>
                    </div>
                    <button className="header__search--button">
                        <i className="header__search--button-icon fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div className="list__link">
                    <div className="list__item">
                        <a href="https://www.youtube.com/" className="list__item--mod">Váy</a>
                        <a href="https://www.youtube.com/" className="list__item--mod">Áo phông</a>
                        <a href="https://www.youtube.com/" className="list__item--mod">Quần</a>
                        <a href="https://www.youtube.com/" className="list__item--mod">Bông Tẩy Trang</a>
                        <a href="https://www.youtube.com/" className="list__item--mod">Balo</a>
                        <a href="https://www.youtube.com/" className="list__item--mod">Dép</a>
                        <a href="https://www.youtube.com/" className="list__item--mod">Khẩu Trang</a>
                        <a href="https://www.youtube.com/" className="list__item--mod">Nệm Topper</a>  
                        <a href="https://www.youtube.com/" className="list__item--mod">Bánh Tráng</a>  
                        <a href="https://www.youtube.com/" className="list__item--mod">Bàn phím cơ</a>  
                        <a href="https://www.youtube.com/" className="list__item--mod">Bánh mì</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default HeaderSearchSite;
