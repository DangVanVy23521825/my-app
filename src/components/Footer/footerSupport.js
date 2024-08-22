import React, { useEffect, useState } from 'react';
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FooterSupport = () => {
  const [supportLinks, setSupportLinks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/supportLinks')
      .then((response) => response.json())
      .then((data) => setSupportLinks(data))
      .catch((error) => console.error('Error fetching support links:', error));
  }, []);

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