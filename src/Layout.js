// src/Layout.js
import React from 'react';
import LeftSideBar from './Components/LeftSideBar';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <LeftSideBar/>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Layout;
