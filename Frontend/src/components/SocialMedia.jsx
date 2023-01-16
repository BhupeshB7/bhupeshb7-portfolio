import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'
import { FaFacebookF } from 'react-icons/fa'
const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://twitter.com/BhupeshBhaska11?t=XQxWe4mYf9fgrB-KjkKBkQ&s=09" target="_blank"><BsTwitter /></a>
            </div>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100036048681826" target="_blank"><FaFacebookF /></a>
            </div>
            <div>
                <a href="https://wa.me/918581869783/?text=Hi!%20I'm%20interested%20to%20know%20more." target="_blank">< RiWhatsappFill /></a>

            </div>
            <div>
                <a href="https://www.instagram.com/bhaskar_8581" target="_blank"><BsInstagram /></a>
            </div>
        </div>
    )
}

export default SocialMedia
