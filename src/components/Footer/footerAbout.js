import React, { useEffect, useState } from 'react';
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FooterAbout = () => {
  const [footerLinks, setFooterLinks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/footerLinks')
      .then((response) => response.json())
      .then((data) => setFooterLinks(data))
      .catch((error) => console.error('Error fetching footer links:', error));
  }, []);

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