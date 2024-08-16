import React from 'react'
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class HeaderCart extends React.Component {
  render(){
    return (
        <div>
            <div className="header__cart">
                <i className="header__cart--logo fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    );
  }
}

export default HeaderCart;
