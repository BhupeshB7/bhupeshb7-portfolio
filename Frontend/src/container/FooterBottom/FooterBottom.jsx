import React from 'react'
// import { SocialMedia } from '../../components'
import logo from '../../assets/logo.png'
import './FooterBottom.scss'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
const FooterBottom = () => {
    return (
        <>
            <div className="app__FooterBottom">
                <div className="app__FooterBottom-logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="app__FooterBottom-links">
                    {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                        <li className="app__flex p-text" key={`link-${item}`}>
                            <div />
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))}
                </ul>


            </div>
            <div className="app__social-footerBottom">
                <div className="app__social-left">

                </div>
                <div className="app__social-right">
                    <div>
                        <a href="https://twitter.com/BhupeshBhaska11?t=XQxWe4mYf9fgrB-KjkKBkQ&s=09" target="_blank" rel=""><BsTwitter /></a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100036048681826" target="_blank" rel=""><FaFacebookF /></a>
                    </div>
                    <div>
                        <a href="https://wa.me/918581869783/?text=Hi!%20" target="_blank" rel="">< RiWhatsappFill /></a>

                    </div>
                    <div>
                        <a href="https://www.instagram.com/bhaskar_8581" target="_blank" rel=""><BsInstagram /></a>
                    </div>
                </div>
            </div>


            <div className="app__flex-footerBottom ">
                <h3 className="p-text">©CopyRight | @Bhupesh | All right reserved</h3>
            </div>
            {/* <Navbar /> */}
        </>
    )
}

export default FooterBottom

