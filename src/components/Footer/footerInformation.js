import React from 'react'
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FooterInformation = () => {
    return (
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
    );
  }


export default FooterInformation;
