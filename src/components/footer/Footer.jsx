import React from "react";
import "./footer.scss"

import logo from '../../images/logo.svg'

function Footer(){
    return(
        <footer>
        <div className="container">
            <div className="footer__content">
                <img src={logo} alt="" className="footer__logo"/>
                <ul>
                    <li><a href="" className="footer_li">Linkedin</a></li>
                    <li><a href="" className="footer_li">Instagram</a></li>
                    <li><a href="" className="footer_li">Telegram</a></li>
                    <li><a href="" className="footer_li">Tiktok</a></li>
                    <li><a href="" className="footer_li">Youtube</a></li>
                    <li><a href="" className="footer_li">Twitter</a></li>
                </ul>
                <div className="footer__line"/>
                <div className="footer__contact">
                    <p className="f_contact">Develop by Zeon IT HUB</p>
                    <p className="f_contact">zeonithub@gmail.com</p>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer