import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import LogoLandscape from '../Images/TM-Icon.png';
import './styling.css';
import { ReactComponent as Hamburger} from '../Images/Icons/menu-open.svg';
import { ReactComponent as CloseIcon} from '../Images/Icons/menu-close.svg';

const Header = ({setLoading}) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);

        const hamIcon = document.getElementById('ham-icon');
        if (showNavbar === false) {
            hamIcon.style.display = 'none';
        } else if (showNavbar === true) {
            hamIcon.style.display = 'block';
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <section className="header">
            <div className="logoDiv" onClick={() => window.location.href = '/'}>
                <img src={LogoLandscape} className="logoHeader" alt="TM Staffing Logo" />
                <h1 className="companyName">TM Staffing<br /><span>Solutions</span></h1>
            </div>

            <div className="menu-icon" onClick={handleShowNavbar}>
                <Hamburger id="ham-icon" />
            </div>

            <div className={`menuDiv ${showNavbar && 'active'}`}>
                <div className="iconDiv">
                    <CloseIcon className="closeIcon" alt="Close menu" onClick={handleShowNavbar} />
                </div>
                <div className="menuListDiv">
                    <h4><NavLink className={({ isActive }) => isActive ? 'headerBtns activeBtn' : 'headerBtns'} to='/'>Home</NavLink></h4>
                    <h4><NavLink className={({ isActive }) => isActive ? 'headerBtns activeBtn' : 'headerBtns'} to='/about-us'>About Us</NavLink></h4>
                    <h4><NavLink className={({ isActive }) => isActive ? 'headerBtns activeBtn' : 'headerBtns'} to='/employers'>Employers</NavLink></h4>
                    <h4><NavLink className={({ isActive }) => isActive ? 'headerBtns activeBtn' : 'headerBtns'} to='/job-seekers'>Job Seekers</NavLink></h4>
                    <h4><NavLink className={({ isActive }) => isActive ? 'headerBtns activeBtn' : 'headerBtns'} to='/our-services'>Our Services</NavLink></h4>
                    <h4><NavLink className={({ isActive }) => isActive ? 'headerBtns activeBtn' : 'headerBtns'} to='/contact-us'>Contact Us</NavLink></h4>
                </div>
            </div>
        </section>
    );
}

export default Header;
