import React from 'react'
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FooterDownload = () => {
    return (
        
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
       
    );
  }


export default FooterDownload;
