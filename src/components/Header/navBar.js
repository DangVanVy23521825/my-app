import React from 'react'
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = () => {
    return (
        <div>
            <nav className ="header__navbar">
                <ul className="navbar__list">
                    <li className="navbar__list_item item-col">
                        <a href="https://banhang.shopee.vn/"
                        className="navbar__list_item--link">Kênh người bán</a>
                    </li>
                    <li className="navbar__list_item item-col">
                        <a href="https://shopee.vn/web"
                        className ="navbar__list_item--link">Tải ứng dụng</a>
                    </li>
                    <li className="connection navbar__list_item">
                        <span className="navbar__list--connect-title">Kết nối</span>
                        <a href="https://www.youtube.com/" className ="navbar__list--social-icon">
                            <i className="navbar__list--icon fab fa-facebook"></i>
                        </a>
                        <a href="https://www.youtube.com/" className ="navbar__list--social-icon">
                            <i className="navbar__list--icon fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <ul className="navbar__list">
                    <li className="navbar__list_item">
                        <i className="navbar__list--icon fa-solid fa-bell"></i>
                        <span>Thông Báo</span>
                    </li>
                    <li className="navbar__list_item">
                        <i className="navbar__list--icon fa fa-question-circle" aria-hidden="true"></i>
                        <span>Hỗ Trợ</span>
                    </li>
                    <li className="navbar__list_item">
                        <i className="navbar__list--icon fa-solid fa-globe"></i>
                        <span>Tiếng Việt</span>
                    </li>
                    <li className="navbar__list_item">
                        <i className="navbar__list--icon far fa-user"></i>
                        <span>Đặng Văn Vỹ</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }

export default NavBar;
