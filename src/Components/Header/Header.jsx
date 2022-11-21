import React from 'react';
import './header.css'
import Navbar from '../Navbar/Navbar';
import Searchform from '../SearchForm/Searchform';


const Header = () => {
    return (
        <div className='holder'>
            <header className="header">
                <Navbar />
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title' text-capitalize>find the book of your choice
                    </h2><br />
                    <p className='header-text fs-18' >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ab at, est quisquam voluptatem neque quidem, repellendus maxime nihil temporibus nisi culpa fugiat! Ducimus cumque, suscipit quaerat explicabo hic placeat.
                    </p>
                    <Searchform />
                </div>

            </header>

        </div>
    );
};

export default Header;