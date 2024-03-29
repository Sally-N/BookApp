import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../Images/logo.png";
import './../../../src/index.css';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Searchform from '../SearchForm/Searchform';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);

    return (
        <nav className="navbar" id='navbar'>
            <div className="container navbar-content flex" >
                <div className="brand-and-toggler flex flex-sb">
                    <Link to="/" className="navbar-brand flex">
                        <img src={logoImg} alt="site logo" />
                        <span className=' fw-7 fs-24 ls-1'>BOOKHUB</span>
                    </Link>
                    <button type='button' className='navbar-toggler-btn' onClick={handleNavbar}>
                        <HiOutlineMenuAlt3 size={35} style={{
                            color: `${toggleMenu ? "#fff" : "010101"}`
                        }} />
                    </button>
                </div>
                <Searchform />
                <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapsse"}>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to="book" className="nav-link text-uppercase text-white fs-22 fw-6">Home</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;