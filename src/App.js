import React from 'react'
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header.js';

class App extends React.Component {
  render(){
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

        <footer className="footer">
            <div className="grid footer-content">
                <div className="grid__row">
                    <div className="footer__column">
                        <h3 className="footer-heading">CHĂM SÓC KHÁCH HÀNG</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Trung Tâm Trợ Giúp</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Shopee Blog</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Shopee Mall</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Hướng Dẫn Mua Hàng</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Hướng Dẫn Bán Hàng</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Thanh Toán</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Shopee Xu</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Vận Chuyển</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Trả Tiền & Hoàn Tiền</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Chăm Sóc Khách Hàng</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Chính Sách Bảo Hành</a>
                            </li> 
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer-heading">VỀ SHOPEE</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Giới Thiệu Về Shopee Việt Nam</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Tuyển Dụng</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Điều Khoản Shopee</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Chính Sách Bảo Mật</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Chính Hãng</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Kênh Người Bán</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Flash sales</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Chương Trình Tiếp Thị Liên Kết Shopee</a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">Liên Hệ Với Truyển Thông</a>
                            </li> 
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer-heading">THANH TOÁN</h3>
                        <div className="footer-payment">
                            <a href="https://www.youtube.com/" className="footer-payment-link">
                                <img src="images/visa.png" alt="visa" className="footer-payment-image"/>
                            </a>
                            <a href="https://www.youtube.com/" className="footer-payment-link">
                                <img src="images/twodots.png" alt="twodots" className="footer-payment-image"/>
                            </a>
                            <a href="https://www.youtube.com/" className="footer-payment-link">
                                <img src="images/jcb.png" alt="jcb" className="footer-payment-image"/>
                            </a>
                            <a href="https://www.youtube.com/" className="footer-payment-link">
                                <img src="images/american-express.png" alt="American-express" className="footer-payment-image"/>
                            </a>
                            <a href="https://www.youtube.com/" className="footer-payment-link">
                                <img src="images/spay.png" alt="SPay" className="footer-payment-image"/>
                            </a>
                        </div>
                        <h3 className="footer-heading">ĐƠN VỊ VẬN CHUYỂN</h3>
                        <div className="footer-shipping">
                            <a href="https://www.youtube.com/" className="footer-shipping-link">
                                <img src="images/spx.png" alt="SPX" className="footer-shipping-image"/>
                            </a>
                            <a href="https://www.youtube.com/" className="footer-shipping-link">
                                <img src="images/viettelpost.png" alt="Viettel" className="footer-shipping-image"/>
                            </a>
                            <a href="https://www.youtube.com/" className="footer-shipping-link">
                                <img src="images/grab.png" alt="Grab" className="footer-shipping-image"/>
                            </a>
                            <a href="https://www.youtube.com/" className="footer-shipping-link">
                                <img src="images/be.png" alt="Be" className="footer-shipping-image"/>
                            </a>
                            <a href="https://www.youtube.com/" className="footer-shipping-link">
                                <img src="images/ninjavan.png" alt="Ninjavan" className="footer-shipping-image"/>
                            </a>
                        </div> 
                    </div>
                    <div className="footer__column">
                        <h3 className="footer-heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">
                                    <i className="footer-item-icon fa-brands fa-facebook"></i>
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">
                                    <i className="footer-item-icon fa-brands fa-instagram"></i>
                                    Instagram
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="https://www.youtube.com/" className="footer-link">
                                    <i className="footer-item-icon fa-brands fa-linkedin"></i>
                                    Linkedin
                                </a>
                            </li> 
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer-heading">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h3>
                        <div className="footer-download">
                            <img src="images/qr_code.png" alt="download-qrcode" className="footer-qrcode"/>
                            <div className="footer-download-apps">
                                <a href="https://www.youtube.com/" className="footer-download-apps-link">
                                    <img src="images/appstore.png" alt="App store" className="footer-download-apps-image"/>
                                </a>
                                <a href="https://www.youtube.com/" className="footer-download-apps-link">
                                    <img src="images/ggplay.png" alt="Google play" className="footer-download-apps-image"/>
                                </a>
                                <a href="https://www.youtube.com/" className="footer-download-apps-link">
                                    <img src="images/appgallery.png" alt="App gallery" className="footer-download-apps-image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__information">
                    <div className="footer__web--infor">© 2024 Shopee. Tất cả các quyền được bảo lưu.</div>
                    <div className="footer__web--infor-nations">
                        <div className="nations-list">Quốc gia & Khu vực: </div>
                        <div className="nations-items">
                            <a href="https://www.youtube.com/" className="nation">Singapore</a>
                            <a href="https://www.youtube.com/" className="nation">Indonesia</a>
                            <a href="https://www.youtube.com/" className="nation">Thái Lan</a>
                            <a href="https://www.youtube.com/" className="nation">Malaysia</a>
                            <a href="https://www.youtube.com/" className="nation">Việt Nam</a>
                            <a href="https://www.youtube.com/" className="nation">Phillipines</a>
                            <a href="https://www.youtube.com/" className="nation">Brazil</a>
                            <a href="https://www.youtube.com/" className="nation">México</a>
                            <a href="https://www.youtube.com/" className="nation">Columbia</a>
                            <a href="https://www.youtube.com/" className="nation">Chile</a>
                            <a href="https://www.youtube.com/" className="nation">Đài Loan</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
