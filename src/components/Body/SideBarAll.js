import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const categories = [
  { id: 1, name: 'Máy Tính & Laptop', url: 'https://www.youtube.com/' },
  { id: 2, name: 'Máy tính bàn', url: 'https://www.youtube.com/' },
  { id: 3, name: 'Máy hình', url: 'https://www.youtube.com/' },
  { id: 4, name: 'Linh kiện máy tính', url: 'https://www.youtube.com/' },
  { id: 5, name: 'Thiết bị lưu trữ', url: 'https://www.youtube.com/' },
  { id: 6, name: 'Thiết bị mạng', url: 'https://www.youtube.com/' },
  { id: 7, name: 'Phụ kiện máy tính', url: 'https://www.youtube.com/' },
];

const SideBarAll = () => {
  return (
    <div className="category__all">
      <h3 className="category__all--heading">
        <i className="category__all--heading-icon fa-solid fa-list"></i>
        Tất cả danh mục
      </h3>
      <ul className="category__all__side_list">
        {categories.map((category) => (
          <li key={category.id} className={`side-items ${category.id === 1 ? 'side-items-active' : ''}`}>
            <a href={category.url} className="item-link">{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBarAll;