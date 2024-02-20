import React from 'react';
import './Navbar.css'
import bag from './../../assets/bag.png'

const Navbar = () => {
    return (
        <div className='mainNav'>

            <div className='titre'>
                <h1>Post Molen</h1>
            </div>

            <div className='sack'>
                <img src={bag} alt="" />
            </div>
            
        </div>
    );
}

export default Navbar;
