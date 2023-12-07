import React from 'react';
// import './header.css'
import Navbar from '../Navbar/Navbar';
import Searchform from '../SearchForm/Searchform';
import './../../../src/index.css'


const Header = () => {
    return (
        <div className='holder'>
            <header className="header">
                <Navbar />
                <div className='header-content py-8 flex flex-col text-center bg-purple-400 w-full' >
                    <h2 className='text-4xl text-white capitalize'>find the book of your choice
                    </h2><br />
                    <Searchform />
                </div>
            </header>
        </div>
    );
};

export default Header;