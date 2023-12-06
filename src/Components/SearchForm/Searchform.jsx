/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import "./SearchForm.css"
import axios from 'axios';
import { useGlobalContext } from '../../context';

const Searchform = () => {
    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const searchText = useRef('')
    const navigate = useNavigate()

    useEffect(() => searchText.current, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        let tempSearchTerm = searchText.current.trim();
        console.log(tempSearchTerm, 'temp');
        if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
            setSearchTerm("the lost world");
            setResultTitle("Please Enter Something ...");
        } else {
            setSearchTerm(searchText.current);
        }
    }

    return (
        <div className='search-form'>
            <div className='container'>
                <div className="search-form-content">
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="search-form-elem flex flex-sb bg-white" >
                            <input type="text" className='form-control' value={searchText.current.focus} placeholder='The lost word ... '
                                onChange={(e) => (searchText.current = e.target.value)}
                            />
                            <button type='submit' className='flex flex-c' onClick={handleSubmit}>
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