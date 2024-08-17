import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBarAll = () => {
    return (
        <div className="category__all">
            <h3 className="category__all--heading">
                <i className="category__all--heading-icon fa-solid fa-list"></i>
                Tất cả danh mục
            </h3>
            <ul className="category__all__side_list">
                <li className="side-items side-items-active">
                    <a href="https://www.youtube.com/" className="item-link">Máy Tính & Laptop
                    </a>
                </li>
                <li className="side-items">
                    <a href="https://www.youtube.com/" className="item-link">Máy tính bàn
                    </a>
                </li>
                <li className="side-items">
                    <a href="https://www.youtube.com/" className="item-link">Máy hình
                    </a>
                </li>
                <li className="side-items">
                    <a href="https://www.youtube.com/" className="item-link">Linh kiện máy tính
                    </a>
                </li>
                <li className="side-items">
                    <a href="https://www.youtube.com/" className="item-link">Thiết bị lưu trữ
                    </a>
                </li>
                <li className="side-items">
                    <a href="https://www.youtube.com/" className="item-link">Thiết bị mạng
                    </a>
                </li>
                <li className="side-items">
                    <a href="https://www.youtube.com/" className="item-link">Phụ kiện máy tính
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SideBarAll;