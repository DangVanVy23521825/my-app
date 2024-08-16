import React from 'react'
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

const App = () => {
    return (
      <div className="App">
        <Header />
        
        <div className="body__container">
            <div className="grid">
                <div className="grid__row web-content">
                    <div className="grid__row-2-column">
                        <nav className="category">
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
                            <div className="category__filter-heading">
                                <h1 className="category__all--heading category__filter">
                                    <i className="category__all--heading-icon category-filter-icon fa-solid fa-filter"></i>
                                    BỘ LỌC TÌM KIẾM
                                </h1>
                            </div>
                            <div className="category__filter_site">
                                <div className="category__small_heading">Theo Danh Mục</div>
                                <div className="folding__items">
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                                            <label for="filter-list-1">Chuột & Bàn Phím (220k+)</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-2" name="filter-list" checked/>
                                            <label for="filter-list-2">Máy In & Máy Scan (114k+)</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-3" name="filter-list" checked/>
                                            <label for="filter-list-3">Linh Kiện Máy Tính (107k+)</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                                            <label for="filter-list-1">Thiết Bị Mạng (107k+)</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_more">
                                        <span className="folding__items_more--mod">Thêm</span>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="category__filter_site">
                                <div className="category__small_heading">Thương Hiệu</div>
                                <div className="folding__items">
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                                            <label for="filter-list-1">sido tech</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-2" name="filter-list" checked/>
                                            <label for="filter-list-2">Logitech</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-3" name="filter-list" checked/>
                                            <label for="filter-list-3">Samsung</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                                            <label for="filter-list-1">TP-link</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_more">
                                        <span className="folding__items_more--mod">Thêm</span>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="category__filter_site">
                                <div className="category__small_heading">Khoảng Giá</div>
                                <div className="price-range-form">
                                    <div className="price-range-form-input-site">
                                        <input type="text" max-length="13" id="min-price" placeholder="đ TỪ" className="price-range-form-input"/>
                                        <span className="price-range-form-estimation"></span>
                                        <input type="text" max-length="13" id="max-price" placeholder="đ ĐẾN" className="price-range-form-input"/>
                                    </div>
                                </div>
                                <button type="button" className="price-button">ÁP DỤNG</button>
                            </div>
                            <div className="category__filter_site">
                                <div className="category__small_heading">Loại Shop</div>
                                <div className="folding__items">
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                                            <label for="filter-list-1">Shopee Mall</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-2" name="filter-list" checked/>
                                            <label for="filter-list-2">Shop yêu thích</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-3" name="filter-list" checked/>
                                            <label for="filter-list-3">Xử lý đơn hàng bởi Shopee</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                                            <label for="filter-list-1">Shop yêu thích +</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_more">
                                        <span className="folding__items_more--mod">Thêm</span>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="category__filter_site">
                                <div className="category__small_heading">Tình Trạng</div>
                                <div className="folding__items">
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-1" name="filter-list" checked/>
                                            <label for="filter-list-1">Đã sử dụng</label>
                                        </div>
                                    </div>
                                    <div className="folding__items_checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox" id="filter-list-2" name="filter-list" checked />
                                            <label for="filter-list-2">Mới</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="grid__row-10-column">
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

                        <div className="home__product_site">
                            <div className="grid__row product__list">
                            </div>
                        </div>

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
                    </div>
                </div>
            </div>
        </div>

        <Footer />
      </div>
    );
  }

export default App;
