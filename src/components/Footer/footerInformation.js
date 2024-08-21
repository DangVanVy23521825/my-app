import React from 'react'
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const nations = [
  { id: 1, name: 'Singapore', url: 'https://www.youtube.com/' },
  { id: 2, name: 'Indonesia', url: 'https://www.youtube.com/' },
  { id: 3, name: 'Thái Lan', url: 'https://www.youtube.com/' },
  { id: 4, name: 'Malaysia', url: 'https://www.youtube.com/' },
  { id: 5, name: 'Việt Nam', url: 'https://www.youtube.com/' },
  { id: 6, name: 'Phillipines', url: 'https://www.youtube.com/' },
  { id: 7, name: 'Brazil', url: 'https://www.youtube.com/' },
  { id: 8, name: 'México', url: 'https://www.youtube.com/' },
  { id: 9, name: 'Columbia', url: 'https://www.youtube.com/' },
  { id: 10, name: 'Chile', url: 'https://www.youtube.com/' },
  { id: 11, name: 'Đài Loan', url: 'https://www.youtube.com/' },
];

const FooterInformation = () => {
  return (
    <div className="footer__information">
      <div className="footer__web--infor">© 2024 Shopee. Tất cả các quyền được bảo lưu.</div>
      <div className="footer__web--infor-nations">
        <div className="nations-list">Quốc gia & Khu vực: </div>
        <div className="nations-items">
          {nations.map((nation) => (
            <a key={nation.id} href={nation.url} className="nation">{nation.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterInformation;