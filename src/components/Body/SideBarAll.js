import React, { useEffect, useState } from 'react';
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBarAll = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

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