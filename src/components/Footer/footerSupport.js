import React from 'react'
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const supportLinks = [
  { id: 1, name: 'Trung Tâm Trợ Giúp', url: 'https://www.youtube.com/' },
  { id: 2, name: 'Shopee Blog', url: 'https://www.youtube.com/' },
  { id: 3, name: 'Shopee Mall', url: 'https://www.youtube.com/' },
  { id: 4, name: 'Hướng Dẫn Mua Hàng', url: 'https://www.youtube.com/' },
  { id: 5, name: 'Hướng Dẫn Bán Hàng', url: 'https://www.youtube.com/' },
  { id: 6, name: 'Thanh Toán', url: 'https://www.youtube.com/' },
  { id: 7, name: 'Shopee Xu', url: 'https://www.youtube.com/' },
  { id: 8, name: 'Vận Chuyển', url: 'https://www.youtube.com/' },
  { id: 9, name: 'Trả Tiền & Hoàn Tiền', url: 'https://www.youtube.com/' },
  { id: 10, name: 'Chăm Sóc Khách Hàng', url: 'https://www.youtube.com/' },
  { id: 11, name: 'Chính Sách Bảo Hành', url: 'https://www.youtube.com/' },
];

const FooterSupport = () => {
  return (
    <div className="footer__column">
      <h3 className="footer-heading">CHĂM SÓC KHÁCH HÀNG</h3>
      <ul className="footer-list">
        {supportLinks.map((link) => (
          <li key={link.id} className="footer-item">
            <a href={link.url} className="footer-link">{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSupport;