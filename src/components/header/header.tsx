import React, { useState,useEffect, useRef } from 'react'
import './header.css'
import { Link,NavLink } from 'react-router-dom';
import { useStore,useStoreCart } from '../stores/stores';

const Header:React.FC = () => {

    // ---- the state ---- //
    const [isMenuOpen, setMenuOpen] = useState(false);

    // ---- store zustand ---- //

    // Utilisez le hook useStore pour accéder à l'état et aux fonctions du store
    const { isBooleanValue, setBooleanValue } = useStore();
    const { selectedItems } = useStoreCart();

    const numberOfElements = Object.keys(selectedItems).length;


    // ---- the function ---- //

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

  return (
    <header>
        <nav className={`container ${isMenuOpen ? 'responsive-nav' : ''}`}>
            <div className="left">
                <p>shop</p>
            </div>
            <div className="center">
                <NavLink to={"/landingPage"}>Home</NavLink>
                <NavLink to={"/About"}>About us</NavLink>
                <NavLink to={"/Shop"}>Shop</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>

                <span className='close-rideaux' onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" opacity=".35" fill="#0659E9" />
                        <path d="M14.8,16.2l-7-7c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0l7,7c0.4,0.4,0.4,1,0,1.4l0,0C15.8,16.6,15.2,16.6,14.8,16.2z" fill="#0659E9" />
                        <path d="M7.8,14.8l7-7c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4l-7,7c-0.4,0.4-1,0.4-1.4,0l0,0C7.4,15.8,7.4,15.2,7.8,14.8z" fill="#0659E9" />
                    </svg>
                </span>
            </div>
            <div className="right">
                    {
                        numberOfElements == 0 ? 
                        <small className='market'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M8 1C6.351563 1 5 2.351563 5 4L3 4C2.734375 4 2.515625 4.207031 2.5 4.472656L2 13.472656C1.992188 13.609375 2.042969 13.746094 2.136719 13.84375C2.230469 13.945313 2.363281 14 2.5 14L13.5 14C13.636719 14 13.769531 13.945313 13.863281 13.84375C13.957031 13.746094 14.007813 13.609375 14 13.472656L13.5 4.472656C13.484375 4.207031 13.265625 4 13 4L11 4C11 2.351563 9.648438 1 8 1 Z M 8 2C9.101563 2 10 2.898438 10 4L6 4C6 2.898438 6.898438 2 8 2 Z M 3.472656 5L5 5L5 7L6 7L6 5L10 5L10 7L11 7L11 5L12.527344 5L12.96875 13L3.03125 13Z" fill="#0659E9" />
                            </svg>
                            <p className={`${numberOfElements !=0 ? "notification" : "notificationzeroMarket"}`}>{numberOfElements}</p>
                        </small>
                    :
                    <small className='market' onClick={() => setBooleanValue(!isBooleanValue)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M8 1C6.351563 1 5 2.351563 5 4L3 4C2.734375 4 2.515625 4.207031 2.5 4.472656L2 13.472656C1.992188 13.609375 2.042969 13.746094 2.136719 13.84375C2.230469 13.945313 2.363281 14 2.5 14L13.5 14C13.636719 14 13.769531 13.945313 13.863281 13.84375C13.957031 13.746094 14.007813 13.609375 14 13.472656L13.5 4.472656C13.484375 4.207031 13.265625 4 13 4L11 4C11 2.351563 9.648438 1 8 1 Z M 8 2C9.101563 2 10 2.898438 10 4L6 4C6 2.898438 6.898438 2 8 2 Z M 3.472656 5L5 5L5 7L6 7L6 5L10 5L10 7L11 7L11 5L12.527344 5L12.96875 13L3.03125 13Z" fill="#0659E9" />
                        </svg>
                            <p className='notification'>{numberOfElements}</p>
                    </small>
                    }
                <span className='register'>
                    <Link to={"/singup"}><button>S'inscrire</button></Link>
                </span>
                <span className='rideaux' onClick={toggleMenu}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5C5 7.16848 5.1317 6.85054 5.36612 6.61612C5.60054 6.3817 5.91848 6.25 6.25 6.25H23.75C24.0815 6.25 24.3995 6.3817 24.6339 6.61612C24.8683 6.85054 25 7.16848 25 7.5C25 7.83152 24.8683 8.14946 24.6339 8.38388C24.3995 8.6183 24.0815 8.75 23.75 8.75H6.25C5.91848 8.75 5.60054 8.6183 5.36612 8.38388C5.1317 8.14946 5 7.83152 5 7.5ZM5 22.5C5 22.1685 5.1317 21.8505 5.36612 21.6161C5.60054 21.3817 5.91848 21.25 6.25 21.25H23.75C24.0815 21.25 24.3995 21.3817 24.6339 21.6161C24.8683 21.8505 25 22.1685 25 22.5C25 22.8315 24.8683 23.1495 24.6339 23.3839C24.3995 23.6183 24.0815 23.75 23.75 23.75H6.25C5.91848 23.75 5.60054 23.6183 5.36612 23.3839C5.1317 23.1495 5 22.8315 5 22.5ZM13.75 13.75C13.4185 13.75 13.1005 13.8817 12.8661 14.1161C12.6317 14.3505 12.5 14.6685 12.5 15C12.5 15.3315 12.6317 15.6495 12.8661 15.8839C13.1005 16.1183 13.4185 16.25 13.75 16.25H23.75C24.0815 16.25 24.3995 16.1183 24.6339 15.8839C24.8683 15.6495 25 15.3315 25 15C25 14.6685 24.8683 14.3505 24.6339 14.1161C24.3995 13.8817 24.0815 13.75 23.75 13.75H13.75Z" fill="black"></path>
                    </svg>
                </span>
            </div>
        </nav>
    </header>
  )
}

export default Header