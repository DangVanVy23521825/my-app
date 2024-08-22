import React, { useEffect, useState } from 'react';
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FooterInformation = () => {
  const [nations, setNations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/nations')
      .then((response) => response.json())
      .then((data) => setNations(data))
      .catch((error) => console.error('Error fetching nations:', error));
  }, []);

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