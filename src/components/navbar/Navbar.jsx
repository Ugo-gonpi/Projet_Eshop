import React from 'react';
import './Navbar.css'
import bag from './../../assets/bag.png'

const Navbar = (props) => {
    return (
        <div className='mainNav fixed top-0'>

            <div className='titre'>
                <h1>Geek Poster</h1>
            </div>

            <button onClick={()=> props.SetSidebarClicked(!props.SidebarClicked)} className='sack transition-all hover:opacity-50'>
                <img src={bag} alt="" />
            </button>

        </div>
    );
}

export default Navbar;
