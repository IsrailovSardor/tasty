import React, { useState } from 'react'
import logo from '../../../images/logo.svg'
import iconCloseBtn from '../../../images/icons/close.svg'
import "../style.scss"
import {useNavigate} from "react-router-dom";

function MobileNavigation() {
    const navigate = useNavigate()

    const [mobileNavbarClass, setMobileNavbarClass] = useState(['nav__content-body']);
    const [mobileNavbar, setMobileNavbar] = useState(false);

    const activeClassNavbar = 'nav__content-body--active';

    const toggleNavbarActive = () => {
        document.body.style.overflow === "hidden" ? document.body.style.overflow = "visible" : document.body.style.overflow = "hidden"
        !mobileNavbar ? setMobileNavbarClass([...mobileNavbarClass, activeClassNavbar]) : setMobileNavbarClass(['nav__content-body']);
        setMobileNavbar(!mobileNavbar);
    }

  return (
    <>

    <div className="burger" onClick={toggleNavbarActive}>
        <svg viewBox="0 0 100 80" width="40" height="30">
            <rect width="90" height="10"/>
            <rect y="30" width="90" height="10"/>
            <rect y="60" width="90" height="10"/>
        </svg>
    </div>

    <div className="nav__logo--mobile" onClick={() => navigate("/")}>
        <img src={logo} alt="" className="logo"/>
    </div>

    <div className="nav__content nav__content--mobile">
        <div className={mobileNavbarClass.join(' ')}>
            <div className="burger--close" onClick={toggleNavbarActive}>
                <img src={iconCloseBtn} alt="close" />
            </div>
            <div className="nav__logo" onClick={() => {
                document.body.style.overflow = 'visible'
                navigate("/")
            }}>
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="nav__links">
                <a className="nav__navigate" href="" onClick={() => navigate("/about")}>About us</a>
                <a className="nav__navigate" href="" onClick={() => navigate("/career")}>Career Opportunity</a>
            </div>
            <div className="header__btn-block">
                <button className="nav__btn">Contact Us</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default MobileNavigation