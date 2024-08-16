import React from 'react'
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FooterPayShip = () => {
    return (
        
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
       
    );
  }

export default FooterPayShip;