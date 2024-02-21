import React from 'react';
import './Footer.css'
import insta from './../../assets/instagram.png'
import twitter from './../../assets/twitter.png'
import linkedin from './../../assets/linkedin.png'
import copyright from './../../assets/copyright.png'

const Footer = () => {
    return (
        <div className='mainFooter'>
            <div className='logos'>
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
            </div>

            <div className='copyright'>
                <p>Tous droits réservés à :</p>
                <div className='textCop'>
                    <p>Jules Voiturier et Ugo Gonzalez Pinto</p> 
                    <img src={copyright} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;