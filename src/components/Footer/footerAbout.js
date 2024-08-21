import React from 'react'
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const footerLinks = [
  { id: 1, name: 'Giới Thiệu Về Shopee Việt Nam', url: 'https://www.youtube.com/' },
  { id: 2, name: 'Tuyển Dụng', url: 'https://www.youtube.com/' },
  { id: 3, name: 'Điều Khoản Shopee', url: 'https://www.youtube.com/' },
  { id: 4, name: 'Chính Sách Bảo Mật', url: 'https://www.youtube.com/' },
  { id: 5, name: 'Chính Hãng', url: 'https://www.youtube.com/' },
  { id: 6, name: 'Kênh Người Bán', url: 'https://www.youtube.com/' },
  { id: 7, name: 'Flash sales', url: 'https://www.youtube.com/' },
  { id: 8, name: 'Chương Trình Tiếp Thị Liên Kết Shopee', url: 'https://www.youtube.com/' },
  { id: 9, name: 'Liên Hệ Với Truyển Thông', url: 'https://www.youtube.com/' },
];

const FooterAbout = () => {
  return (
    <div className="footer__column">
      <h3 className="footer-heading">VỀ SHOPEE</h3>
      <ul className="footer-list">
        {footerLinks.map((link) => (
          <li key={link.id} className="footer-item">
            <a href={link.url} className="footer-link">{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterAbout;