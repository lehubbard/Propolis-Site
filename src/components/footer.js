import React from 'react';
import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify";
import { FaBandcamp } from "@react-icons/all-files/fa/FaBandcamp";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { SiBandsintown } from "@react-icons/all-files/si/SiBandsintown";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";







function Footer({ homePage }) {
  
    return ( 
        <footer className={homePage ? 'home-footer' : 'footer'}>
            <div className='social-icons-wrapper'>
                <FaSpotify className='social-icon'/>
                <FaBandcamp className='social-icon'/>
                <FaYoutube className='social-icon'/>
                <FaFacebookF className='social-icon'/>
                <AiFillInstagram className='social-icon'/>
                <SiBandsintown className='social-icon'/>
            </div>
        </footer>
     );
}

export default Footer;