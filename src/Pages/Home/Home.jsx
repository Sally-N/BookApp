import React from 'react';
import Header from '../../Components/Header/Header';
import BookList from '../../Components/BookList/BookList';
import {Outlet } from 'react-router-dom';
// import BookList from '../../Components/BookList/BookList';
// import { CategoriesButtons } from '../../Components/Categories/Categories';


const Home = () => {
    // http://openlibrary.org/subjects/love.json

    return (
        <main>
            <Header />
            <BookList />
            <Outlet />
        </main>
    );
};


export default Home;