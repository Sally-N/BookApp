/* eslint-disable no-unused-vars */
import React from 'react';
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import "./SearchForm.css"

const Searchform = () => {
    return (
        <div className='search-form'>
        <div className='container'>
            <div className="search-form-content">
                <form action="" className="search-form">
                    <div className="search-form-elem flex flex-sb bg-white" >
                        <input type="text" className='form-control' placeholder='The lost word ... '/>
                        <button type='submit' className='flex flex-c'>
                            <FaSearch className='text-purple' size={32} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
           
        </div>
    );
};

export default Searchform;