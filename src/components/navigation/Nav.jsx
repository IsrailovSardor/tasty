import React from "react";
import "./style.scss"
import logo from '../../images/logo.svg'
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import {useNavigate} from "react-router-dom"

function Nav(){
    const navigate = useNavigate()
    return(
        <div className="header__nav">
            <div className="container">
                    <div className="header__nav-body">
                        <MobileNavigation/>
                        <div className="nav__content nav__content--desktop">
                            <div className="nav__links">
                                <a className="nav__navigate" onClick={() => navigate("/about")}>About us</a>
                            <a className="nav__navigate" href="">Career Opportunity</a>
                            </div>
                            <div className="nav__logo" onClick={() => navigate('/')}>
                                <img src={logo} alt="" className="logo"/>
                            </div>
                        </div>
                        <div className="header__btn-block">
                            <button className="nav__btn" onClick={() => navigate("/career")}>Contact Us</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Nav