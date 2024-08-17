
import React from 'react'
import '../../App.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideBar from './SideBar.js';
import MainContainer from './MainContainer.js';

const BodyContainer = () => {
    return (
        <div className="body__container">
            <div className="grid">
                <div className="grid__row web-content">
                   <SideBar />

                    <MainContainer />                    
                </div>
            </div>
        </div>
    );
  }

export default BodyContainer;
